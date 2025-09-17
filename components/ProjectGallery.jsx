import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper/modules';
import 'swiper/css';
// import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

const projects = [
  {
    title: 'Modern Living Room',
    category: 'Residential',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAwC8W4490L_EgzOqKBDrtsp__eTOHRbJ3_TNVcIEfz0oo0IoCLsMJcpZTGKI1cAel_RolqiEjHPvogTL0wayAHniBr5HyfJ7O-kol-V0LNVm53WTSH_ugnSh854NM-q_nsEbHIB_d7kTQbVINzpbDiK-0ZmxvAXgk20JifHyfBAZHM0inApfGyXXW6z_MiV-wfN3Yf23VfJJEUVKsOIZL9qtQlnf8FU_PU3iT-XN69qFyTwN1RDrHMucNOj2bqtGN-SN6yfLLcv2ao',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAwC8W4490L_EgzOqKBDrtsp__eTOHRbJ3_TNVcIEfz0oo0IoCLsMJcpZTGKI1cAel_RolqiEjHPvogTL0wayAHniBr5HyfJ7O-kol-V0LNVm53WTSH_ugnSh854NM-q_nsEbHIB_d7kTQbVINzpbDiK-0ZmxvAXgk20JifHyfBAZHM0inApfGyXXW6z_MiV-wfN3Yf23VfJJEUVKsOIZL9qtQlnf8FU_PU3iT-XN69qFyTwN1RDrHMucNOj2bqtGN-SN6yfLLcv2ao',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAkrcFe0rc3JzijNrKwV7vZQugygHIxVWmH1N74j2ecAuZ3qktCHuYLRVAfFEsU6xRzL7YAQ_4Utp7NKXmGe3ILTRA2docsOwpceEpAUsxHcnulWd40H7hKVzLMIG3_4wsNymYafDUqeTYCG0KftHnZrFXvphQ62tOdQMNWhgS2g3p-MZd8rTqjI9B56dRtgAoLeBVDEuEvtAM0ECGjzq2nClb0_HIX1NboQvU3CV6JkwAL3FAlQP_1osL4u-5IqFxbajVfbBz-EY2R',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAkrcFe0rc3JzijNrKwV7vZQugygHIxVWmH1N74j2ecAuZ3qktCHuYLRVAfFEsU6xRzL7YAQ_4Utp7NKXmGe3ILTRA2docsOwpceEpAUsxHcnulWd40H7hKVzLMIG3_4wsNymYafDUqeTYCG0KftHnZrFXvphQ62tOdQMNWhgS2g3p-MZd8rTqjI9B56dRtgAoLeBVDEuEvtAM0ECGjzq2nClb0_HIX1NboQvU3CV6JkwAL3FAlQP_1osL4u-5IqFxbajVfbBz-EY2R',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAkrcFe0rc3JzijNrKwV7vZQugygHIxVWmH1N74j2ecAuZ3qktCHuYLRVAfFEsU6xRzL7YAQ_4Utp7NKXmGe3ILTRA2docsOwpceEpAUsxHcnulWd40H7hKVzLMIG3_4wsNymYafDUqeTYCG0KftHnZrFXvphQ62tOdQMNWhgS2g3p-MZd8rTqjI9B56dRtgAoLeBVDEuEvtAM0ECGjzq2nClb0_HIX1NboQvU3CV6JkwAL3FAlQP_1osL4u-5IqFxbajVfbBz-EY2R',
    ],
  },
  {
    title: 'Elegant Dining Area',
    category: 'Residential',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBgP-Lvepw0jKpEw7Z6Ug2KTOOZcxfhGapHRJK-RfHrT2OoI0OTnLWJYG0ifj3ke7m1T07FBfnTUxEJLBPlomwgC_N5Zpdekr2BxOneM5DU7FWmdXCKHNfbKBnY9HWpQU_rEFSXaWJ2c2RaTHuHbHeRvGvuJvyyywFnHy4_lm_6vPLw8QeUBe81l6cdkUl8CDCBgDGEIdH3zQuFsVvd0Dt49s70IUhzlaoaV2Ro2twth0isLsWqQjfcvMB2iI4jWNBXXuR2Gw7mZrB1',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAkrcFe0rc3JzijNrKwV7vZQugygHIxVWmH1N74j2ecAuZ3qktCHuYLRVAfFEsU6xRzL7YAQ_4Utp7NKXmGe3ILTRA2docsOwpceEpAUsxHcnulWd40H7hKVzLMIG3_4wsNymYafDUqeTYCG0KftHnZrFXvphQ62tOdQMNWhgS2g3p-MZd8rTqjI9B56dRtgAoLeBVDEuEvtAM0ECGjzq2nClb0_HIX1NboQvU3CV6JkwAL3FAlQP_1osL4u-5IqFxbajVfbBz-EY2R',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAkrcFe0rc3JzijNrKwV7vZQugygHIxVWmH1N74j2ecAuZ3qktCHuYLRVAfFEsU6xRzL7YAQ_4Utp7NKXmGe3ILTRA2docsOwpceEpAUsxHcnulWd40H7hKVzLMIG3_4wsNymYafDUqeTYCG0KftHnZrFXvphQ62tOdQMNWhgS2g3p-MZd8rTqjI9B56dRtgAoLeBVDEuEvtAM0ECGjzq2nClb0_HIX1NboQvU3CV6JkwAL3FAlQP_1osL4u-5IqFxbajVfbBz-EY2R',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAkrcFe0rc3JzijNrKwV7vZQugygHIxVWmH1N74j2ecAuZ3qktCHuYLRVAfFEsU6xRzL7YAQ_4Utp7NKXmGe3ILTRA2docsOwpceEpAUsxHcnulWd40H7hKVzLMIG3_4wsNymYafDUqeTYCG0KftHnZrFXvphQ62tOdQMNWhgS2g3p-MZd8rTqjI9B56dRtgAoLeBVDEuEvtAM0ECGjzq2nClb0_HIX1NboQvU3CV6JkwAL3FAlQP_1osL4u-5IqFxbajVfbBz-EY2R',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAkrcFe0rc3JzijNrKwV7vZQugygHIxVWmH1N74j2ecAuZ3qktCHuYLRVAfFEsU6xRzL7YAQ_4Utp7NKXmGe3ILTRA2docsOwpceEpAUsxHcnulWd40H7hKVzLMIG3_4wsNymYafDUqeTYCG0KftHnZrFXvphQ62tOdQMNWhgS2g3p-MZd8rTqjI9B56dRtgAoLeBVDEuEvtAM0ECGjzq2nClb0_HIX1NboQvU3CV6JkwAL3FAlQP_1osL4u-5IqFxbajVfbBz-EY2R',
    ],
  },
  {
    title: 'Minimalist Bedroom',
    category: 'Residential',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAkrcFe0rc3JzijNrKwV7vZQugygHIxVWmH1N74j2ecAuZ3qktCHuYLRVAfFEsU6xRzL7YAQ_4Utp7NKXmGe3ILTRA2docsOwpceEpAUsxHcnulWd40H7hKVzLMIG3_4wsNymYafDUqeTYCG0KftHnZrFXvphQ62tOdQMNWhgS2g3p-MZd8rTqjI9B56dRtgAoLeBVDEuEvtAM0ECGjzq2nClb0_HIX1NboQvU3CV6JkwAL3FAlQP_1osL4u-5IqFxbajVfbBz-EY2R',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAkrcFe0rc3JzijNrKwV7vZQugygHIxVWmH1N74j2ecAuZ3qktCHuYLRVAfFEsU6xRzL7YAQ_4Utp7NKXmGe3ILTRA2docsOwpceEpAUsxHcnulWd40H7hKVzLMIG3_4wsNymYafDUqeTYCG0KftHnZrFXvphQ62tOdQMNWhgS2g3p-MZd8rTqjI9B56dRtgAoLeBVDEuEvtAM0ECGjzq2nClb0_HIX1NboQvU3CV6JkwAL3FAlQP_1osL4u-5IqFxbajVfbBz-EY2R',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAkrcFe0rc3JzijNrKwV7vZQugygHIxVWmH1N74j2ecAuZ3qktCHuYLRVAfFEsU6xRzL7YAQ_4Utp7NKXmGe3ILTRA2docsOwpceEpAUsxHcnulWd40H7hKVzLMIG3_4wsNymYafDUqeTYCG0KftHnZrFXvphQ62tOdQMNWhgS2g3p-MZd8rTqjI9B56dRtgAoLeBVDEuEvtAM0ECGjzq2nClb0_HIX1NboQvU3CV6JkwAL3FAlQP_1osL4u-5IqFxbajVfbBz-EY2R',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAkrcFe0rc3JzijNrKwV7vZQugygHIxVWmH1N74j2ecAuZ3qktCHuYLRVAfFEsU6xRzL7YAQ_4Utp7NKXmGe3ILTRA2docsOwpceEpAUsxHcnulWd40H7hKVzLMIG3_4wsNymYafDUqeTYCG0KftHnZrFXvphQ62tOdQMNWhgS2g3p-MZd8rTqjI9B56dRtgAoLeBVDEuEvtAM0ECGjzq2nClb0_HIX1NboQvU3CV6JkwAL3FAlQP_1osL4u-5IqFxbajVfbBz-EY2R',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAkrcFe0rc3JzijNrKwV7vZQugygHIxVWmH1N74j2ecAuZ3qktCHuYLRVAfFEsU6xRzL7YAQ_4Utp7NKXmGe3ILTRA2docsOwpceEpAUsxHcnulWd40H7hKVzLMIG3_4wsNymYafDUqeTYCG0KftHnZrFXvphQ62tOdQMNWhgS2g3p-MZd8rTqjI9B56dRtgAoLeBVDEuEvtAM0ECGjzq2nClb0_HIX1NboQvU3CV6JkwAL3FAlQP_1osL4u-5IqFxbajVfbBz-EY2R',
    ],
  },
  {
    title: 'Chic Home Office',
    category: 'Commercial',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB36alxvaNQhEHYQ6nA85qfD_tewwBUwqmrgWlIq36Qv6wWD9Qz67UogzYsgyoVeezwvLFAoagS_R1MjlVMPgqATPrmceOKA6ps7o2wcnTHToQRvcInaIMZlHMnfrK59fuPf96_oq-xav75xotTwDlxWCjB-S63vWhz7JMh3jyjzlso232O3opbrU9SDJOri9uNUpZCKkbJYZXpRWR7KpFUdmAgm7XEfNrY4cfztZQEalVZdAT2fT0jpykclgKHDwDqIaQW-FNIKsWf',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAkrcFe0rc3JzijNrKwV7vZQugygHIxVWmH1N74j2ecAuZ3qktCHuYLRVAfFEsU6xRzL7YAQ_4Utp7NKXmGe3ILTRA2docsOwpceEpAUsxHcnulWd40H7hKVzLMIG3_4wsNymYafDUqeTYCG0KftHnZrFXvphQ62tOdQMNWhgS2g3p-MZd8rTqjI9B56dRtgAoLeBVDEuEvtAM0ECGjzq2nClb0_HIX1NboQvU3CV6JkwAL3FAlQP_1osL4u-5IqFxbajVfbBz-EY2R',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAkrcFe0rc3JzijNrKwV7vZQugygHIxVWmH1N74j2ecAuZ3qktCHuYLRVAfFEsU6xRzL7YAQ_4Utp7NKXmGe3ILTRA2docsOwpceEpAUsxHcnulWd40H7hKVzLMIG3_4wsNymYafDUqeTYCG0KftHnZrFXvphQ62tOdQMNWhgS2g3p-MZd8rTqjI9B56dRtgAoLeBVDEuEvtAM0ECGjzq2nClb0_HIX1NboQvU3CV6JkwAL3FAlQP_1osL4u-5IqFxbajVfbBz-EY2R',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAkrcFe0rc3JzijNrKwV7vZQugygHIxVWmH1N74j2ecAuZ3qktCHuYLRVAfFEsU6xRzL7YAQ_4Utp7NKXmGe3ILTRA2docsOwpceEpAUsxHcnulWd40H7hKVzLMIG3_4wsNymYafDUqeTYCG0KftHnZrFXvphQ62tOdQMNWhgS2g3p-MZd8rTqjI9B56dRtgAoLeBVDEuEvtAM0ECGjzq2nClb0_HIX1NboQvU3CV6JkwAL3FAlQP_1osL4u-5IqFxbajVfbBz-EY2R','https://lh3.googleusercontent.com/aida-public/AB6AXuAkrcFe0rc3JzijNrKwV7vZQugygHIxVWmH1N74j2ecAuZ3qktCHuYLRVAfFEsU6xRzL7YAQ_4Utp7NKXmGe3ILTRA2docsOwpceEpAUsxHcnulWd40H7hKVzLMIG3_4wsNymYafDUqeTYCG0KftHnZrFXvphQ62tOdQMNWhgS2g3p-MZd8rTqjI9B56dRtgAoLeBVDEuEvtAM0ECGjzq2nClb0_HIX1NboQvU3CV6JkwAL3FAlQP_1osL4u-5IqFxbajVfbBz-EY2R',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAkrcFe0rc3JzijNrKwV7vZQugygHIxVWmH1N74j2ecAuZ3qktCHuYLRVAfFEsU6xRzL7YAQ_4Utp7NKXmGe3ILTRA2docsOwpceEpAUsxHcnulWd40H7hKVzLMIG3_4wsNymYafDUqeTYCG0KftHnZrFXvphQ62tOdQMNWhgS2g3p-MZd8rTqjI9B56dRtgAoLeBVDEuEvtAM0ECGjzq2nClb0_HIX1NboQvU3CV6JkwAL3FAlQP_1osL4u-5IqFxbajVfbBz-EY2R',
    ],
  },
  {
    title: 'Luxury Bathroom',
    category: 'Residential',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCtrbedUoOkuaiazRKu_umvCiu_LzhywX_GrQVn4INZXWZkbaj2l3jAGvXUVLxsJCSI5x8H_h5Tyafm8sh5002Rwv1y8LHx8K3jhesSI6rN4Oj465GoBUZwNdUhBsvOqGAJQ7NdeNLvxSS_f0wMh0EDPbod9KiPppWPM0Z5GV2WzNtzZLyvqGfTZh6GilgkOM933fvkah0GwCl51tLHGtIgMBAxzJe3HC3M4kc1hmNjyGEYZsWbusMioDLc2t9rAduPv0Ej6Mcdr9GR',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAkrcFe0rc3JzijNrKwV7vZQugygHIxVWmH1N74j2ecAuZ3qktCHuYLRVAfFEsU6xRzL7YAQ_4Utp7NKXmGe3ILTRA2docsOwpceEpAUsxHcnulWd40H7hKVzLMIG3_4wsNymYafDUqeTYCG0KftHnZrFXvphQ62tOdQMNWhgS2g3p-MZd8rTqjI9B56dRtgAoLeBVDEuEvtAM0ECGjzq2nClb0_HIX1NboQvU3CV6JkwAL3FAlQP_1osL4u-5IqFxbajVfbBz-EY2R','https://lh3.googleusercontent.com/aida-public/AB6AXuAkrcFe0rc3JzijNrKwV7vZQugygHIxVWmH1N74j2ecAuZ3qktCHuYLRVAfFEsU6xRzL7YAQ_4Utp7NKXmGe3ILTRA2docsOwpceEpAUsxHcnulWd40H7hKVzLMIG3_4wsNymYafDUqeTYCG0KftHnZrFXvphQ62tOdQMNWhgS2g3p-MZd8rTqjI9B56dRtgAoLeBVDEuEvtAM0ECGjzq2nClb0_HIX1NboQvU3CV6JkwAL3FAlQP_1osL4u-5IqFxbajVfbBz-EY2R',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAkrcFe0rc3JzijNrKwV7vZQugygHIxVWmH1N74j2ecAuZ3qktCHuYLRVAfFEsU6xRzL7YAQ_4Utp7NKXmGe3ILTRA2docsOwpceEpAUsxHcnulWd40H7hKVzLMIG3_4wsNymYafDUqeTYCG0KftHnZrFXvphQ62tOdQMNWhgS2g3p-MZd8rTqjI9B56dRtgAoLeBVDEuEvtAM0ECGjzq2nClb0_HIX1NboQvU3CV6JkwAL3FAlQP_1osL4u-5IqFxbajVfbBz-EY2R',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAkrcFe0rc3JzijNrKwV7vZQugygHIxVWmH1N74j2ecAuZ3qktCHuYLRVAfFEsU6xRzL7YAQ_4Utp7NKXmGe3ILTRA2docsOwpceEpAUsxHcnulWd40H7hKVzLMIG3_4wsNymYafDUqeTYCG0KftHnZrFXvphQ62tOdQMNWhgS2g3p-MZd8rTqjI9B56dRtgAoLeBVDEuEvtAM0ECGjzq2nClb0_HIX1NboQvU3CV6JkwAL3FAlQP_1osL4u-5IqFxbajVfbBz-EY2R',
    ],
  },
  {
    title: 'Cozy Reading Nook',
    category: 'Residential',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDSGgIOJMgOWAVSagbhKhD0BUU6pjPmkFjx6BevnD5NvFB-_STxzZwtlzV47gtqU6spj5RXeoVUqOOiBfMzD1vab_GuF1pKQO2Pxw69OB5sdUU7uftI2NoQ2AVmAOASL3HU2E2Luu52icL01kw_5MdL8SzpEhbMzlci5vXuyPA6ftoHtlLQNY9LNv3YaauD9OjosnCLnbZICh71_ZaxyBY89ppniX1UFmeXlJ8rZWcUusxjO3FeDomhY_KvbkXpXIlyd_Wf7Z0HDpqY',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAkrcFe0rc3JzijNrKwV7vZQugygHIxVWmH1N74j2ecAuZ3qktCHuYLRVAfFEsU6xRzL7YAQ_4Utp7NKXmGe3ILTRA2docsOwpceEpAUsxHcnulWd40H7hKVzLMIG3_4wsNymYafDUqeTYCG0KftHnZrFXvphQ62tOdQMNWhgS2g3p-MZd8rTqjI9B56dRtgAoLeBVDEuEvtAM0ECGjzq2nClb0_HIX1NboQvU3CV6JkwAL3FAlQP_1osL4u-5IqFxbajVfbBz-EY2R',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAkrcFe0rc3JzijNrKwV7vZQugygHIxVWmH1N74j2ecAuZ3qktCHuYLRVAfFEsU6xRzL7YAQ_4Utp7NKXmGe3ILTRA2docsOwpceEpAUsxHcnulWd40H7hKVzLMIG3_4wsNymYafDUqeTYCG0KftHnZrFXvphQ62tOdQMNWhgS2g3p-MZd8rTqjI9B56dRtgAoLeBVDEuEvtAM0ECGjzq2nClb0_HIX1NboQvU3CV6JkwAL3FAlQP_1osL4u-5IqFxbajVfbBz-EY2R',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAkrcFe0rc3JzijNrKwV7vZQugygHIxVWmH1N74j2ecAuZ3qktCHuYLRVAfFEsU6xRzL7YAQ_4Utp7NKXmGe3ILTRA2docsOwpceEpAUsxHcnulWd40H7hKVzLMIG3_4wsNymYafDUqeTYCG0KftHnZrFXvphQ62tOdQMNWhgS2g3p-MZd8rTqjI9B56dRtgAoLeBVDEuEvtAM0ECGjzq2nClb0_HIX1NboQvU3CV6JkwAL3FAlQP_1osL4u-5IqFxbajVfbBz-EY2R',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAkrcFe0rc3JzijNrKwV7vZQugygHIxVWmH1N74j2ecAuZ3qktCHuYLRVAfFEsU6xRzL7YAQ_4Utp7NKXmGe3ILTRA2docsOwpceEpAUsxHcnulWd40H7hKVzLMIG3_4wsNymYafDUqeTYCG0KftHnZrFXvphQ62tOdQMNWhgS2g3p-MZd8rTqjI9B56dRtgAoLeBVDEuEvtAM0ECGjzq2nClb0_HIX1NboQvU3CV6JkwAL3FAlQP_1osL4u-5IqFxbajVfbBz-EY2R',
    ],
  },
];

const ProjectGallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section>
      <h2 className="text-4xl font-bold text-[var(--text-primary)] tracking-tight text-center">
        Our Project Gallery
      </h2>
      <p className="mt-4 text-lg text-center text-[var(--text-secondary)] max-w-3xl mx-auto">
        Explore a curated selection of our finest interior design projects. Each space is a testament to our commitment to elegance, functionality, and timeless style.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 relative">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group hover:scale-105 transition-transform duration-300 ease-in-out relative overflow-hidden rounded-lg shadow-sm border border-gray-100"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              alt={project.title}
              className="w-full h-80 object-cover transition-transform duration-300 ease-in-out group-hover:scale-200"
              src={project.images[0]}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <p className="text-sm text-gray-200 mt-1">{project.category}</p>
            </div>

            {/* Hover popup with Swiper */}
            {hoveredIndex === index && (
              <div className="absolute inset-0 z-20 bg-black bg-opacity-90 flex items-center justify-center">
                <div className="w-full h-full">
                  <Swiper modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      freeMode
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{ delay: 1000 , disableOnInteraction: true }}
       className="w-full h-full">
                    {project.images.map((img, idx) => (
                      <SwiperSlide key={idx}>
                        <img
                          src={img}
                          alt={`Slide ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectGallery;
