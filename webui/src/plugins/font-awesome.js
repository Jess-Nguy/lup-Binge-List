// Links on How to set up https://fontawesome.com/v5.9/how-to-use/with-the-api/setup/library https://halilyuce.com/web/how-to-add-font-awesome-to-your-vue-3-project-typescript/

import { library } from '@fortawesome/fontawesome-svg-core';
// https://fontawesome.com/icons?s=regular&m=free
import { far } from '@fortawesome/free-regular-svg-icons';
// https://fontawesome.com/icons?s=solid&m=free
import { fas, faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
// https://fontawesome.com/icons?s=brands
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import FontAwesomeIcon from '@/libs/FontAwesomeIcon.vue';

library.add(far, fas, faUser, faLock, faEnvelope, faTwitter, faInstagram);

export { FontAwesomeIcon };
