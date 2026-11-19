import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { schemaJson } from '../data/schema.js';

/**
 * Keeps the page's JSON-LD in <head> in sync with the current route.
 * The build already writes the same block into each route's static HTML
 * (scripts/prerender-meta.mjs); this replaces it on client-side navigation
 * so there is always exactly one schema block, for the page being viewed.
 */
export default function JsonLd() {
    const { pathname } = useLocation();

    useEffect(() => {
        document.head.querySelectorAll('script[data-lfx-schema]').forEach((el) => el.remove());
        const json = schemaJson(pathname);
        if (!json) return;
        const el = document.createElement('script');
        el.type = 'application/ld+json';
        el.setAttribute('data-lfx-schema', '');
        el.textContent = json;
        document.head.appendChild(el);
    }, [pathname]);

    return null;
}
