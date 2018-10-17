import './styles/styles.scss';
import { slideShow } from './scripts/slidesGallery';
import { showServices } from './scripts/scroll';
import { renderProjects } from './scripts/render_our_projects';
import { projects } from './scripts/DATA_projects';

slideShow();
showServices();

projects.forEach((project, i) => renderProjects(project, i));
