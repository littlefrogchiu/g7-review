# tools/U1..U6.json → docs/bank.js（BANK: grammar/fix；NEWS: 課文句意）
import json, os, re
D = os.path.dirname(os.path.abspath(__file__))
bank, news = {}, {}
for n in range(1, 7):
    d = json.load(open(os.path.join(D, f'U{n}.json'), encoding='utf-8'))
    for q in d['grammar']:
        assert len(q['o']) == 4 and 0 <= q['a'] < 4, q
    for f in d['fix']:
        k = len(re.findall(r'\[\[.*?\]\]', f['t']))
        assert 3 <= k <= 4 and 0 <= f['e'] < k and 0 <= f['a'] < len(f['o']), f
    for s in d['sent']:
        assert s['hl'].replace('[[', '').replace(']]', '') == s['en'] and 0 <= s['a'] < 3, s
    bank[str(n)] = {'grammar': d['grammar'], 'fix': d['fix']}
    news[str(n)] = d['sent']
    print(n, len(d['grammar']), len(d['fix']), len(d['sent']))
out = ('// 各單元題庫：grammar（文法選擇）、fix（文法糾錯）；NEWS：Level 4 課文句意（由 tools/build_bank.py 產生）\n'
       'const BANK = ' + json.dumps(bank, ensure_ascii=False) + ';\n'
       'const NEWS = ' + json.dumps(news, ensure_ascii=False) + ';\n')
open(os.path.join(D, '..', 'docs', 'bank.js'), 'w', encoding='utf-8').write(out)
