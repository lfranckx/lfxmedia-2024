# Renders the Open Graph images in og.html into public/. Run: python3 scripts/og/render.py  (needs playwright)
from playwright.sync_api import sync_playwright
from pathlib import Path
here = Path(__file__).resolve().parent; out = here.parent.parent / 'public'
with sync_playwright() as p:
    b = p.chromium.launch(); pg = b.new_page(viewport={'width': 1200, 'height': 630})
    pg.goto(f'file://{here}/og.html'); pg.wait_for_timeout(600)
    for el in pg.locator('.card, .sq').all():
        i = el.get_attribute('id')
        f = f'{i}.png' if i in ('og-image', 'logo-square') else f'og/{i}.png'
        el.screenshot(path=str(out / f)); print('wrote', f)
    b.close()
