import teamMeta from './team.meta.js';
import lachlan from '../images/team/lachlan.webp';
import raquel from '../images/team/raquel.webp';
import zahid from '../images/team/zahid.webp';

// Copy lives in team.meta.js; this adds the photos.
const photos = { lachlan, raquel, zahid };

const team = teamMeta.map((m) => ({ ...m, photo: photos[m.slug] }));

export default team;
