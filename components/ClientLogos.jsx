import React from 'react';

const clients = [
  { name: 'Client Name 1', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIx8vmMMwonc5reJHqk_bCVpPb5-ELcDkdKwQgX2oZ6mGCTRx8OqV0r91LoIpijiytWBYE0rCT_dmMI_uG4CPjJllmrS5QV27uEb0Qv8PhyixmOT6TO6LTR7Ra5sxd7gFgJwQnmc9GVsK_FX9RdEmbhen4GhRtBc13KpKYujOPGJ7xMwy4vxRI-Q_IE0ALOeG9YzmSkXw_BMuQT3u67KjYpUBGEUqwdsU_OBwYgSOjeVCz0mlklBSshdmfwWWE39Ge_Tr2EZP3SfS8' },
  { name: 'Client Name 2', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0B-cWoRj1yXe40FBTKmvlE53Ar57P2KT7LXaAM-sVXnpFL166pfF94R7p-8QXJ9turUjtiqirXcFzxfS401nvVCB9N73gqHTTbeAKLapS7oJJHtpJjEKBY40oqFvJJZE14PSQMn2Lm7Q8Fo2gJ9ZSizG6rrd5EHUd2DUozSG3Yc1HE-9Dd7eFbS4yxEPfSVNq0wsn-lNwM_o12WxcpbW87GGJAGUD2UWo45Jm4301CvuL6zYyV0Ft9zMZTOqvACYCzvdQVUqi1CwN' },
  { name: 'Client Name 3', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbJmUdEyzEN0EMby7qyXgbyJJNcAn6hMraKNxuYuhAW4q5wg6PVllcrc0Yay9k5PVPpeNMAg25C_wyHpIxgST5RsljyGlFsrIA4IM4O_Ha4Zv3cKVZJ8ZqdtnL-Fi_ZVDy7IKdg2cVQHetN3D5pwOICajMuM1it3_4nmSMoGJlF6i1taKmZ8UDmBzXmSbgN6l53-BbGzcPO_F63tc4i7E_EPaJiJWFAA_LhQ17MQozzB89utG75jXkoGCeoMw3QcvswYCs3HDOzBL2' },
  { name: 'Client Name 4', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGkOx-_ajPmcpNkSe7scGIMnGEwiz5-AlrmHZ4Hk26McIcbIhvoLATJiqvdSeOQ-KW7kPdlhNDOdKTTwKa-vae1P2x7YtGxpyQ55FISl_ztYY2w1Xd_lCkn8_niVLqJ3igW2aWjs2JsZkOGZVHnak6rdYiOvM373UAK3_Fa8qu3JuQXjvanrBrJTK2BOVZ3ji2mGeitA5EaLApeTRTsvB3udIliZJ_VdxyQKDYAxY689HZulNIc1EGMfXu-WPGXhP23VC6jBJ4axJL' },
  { name: 'Client Name 5', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAiBGKN-bJjsoVnvSKQOLSRIx1I56HimktoglPDAA8DnsTzoADrYVD-igkzGVRfLXddLhFS3-dd54xDS1WXvODhcFAV1Y52g1dl2W06C5Nm9rXCMv1jm4nL5GEkwxbndGuFMbKl-fyiOQGWxD1oIAs7YhIe_RB6KLmpFtiUFRo4xsTGO260LBDY9KXc5soGnbnyYGH99PKtUmBegeZIooA5_tvOm6df84GIeGkNJStmrio3lTJDL5YKzIoppODWHsT20zQim0HrmlGP' },
  { name: 'Client Name 6', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAntuTuTctzAXU0o1heZMDjMj6IMTOgr5zlmrfpxXHKocQDYt8783DoEIu_lUxFbay6IZj679o0A2HyHQW-1if-6tzzqInFNNoJYeIsflrXguxyB-MIeRXHC0OnwOMLDWFUon3yjtpWDHnBJ4FDgu2vxfACOLhGLo3IhzEy4BY-Qj5OSvexlLPvmY9ka6h8zwqWW9T7RCbVT_rwnjRJFQoErZh6Q7vN61qb5xCkMs-W_PwXxKrR2OsBc_SCoXOFx47GRcc7WoyJRXwM' },
  { name: 'Client Name 7', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUUdTXOGiCYqMZ9uywIB-mYjnLuJpGMGoVgvfulnLu8hBy5SyeB4Cqv42A-Ls9iBs3_FQqMXPcKTLRSSMbIR6zXdNMK4S8JwtXDjMjsFNQtYZ37AN0cOEUEqx1lgg86oNDlw1jd6zb1rG7ytppSu4HhDIXHwVxXFSXjiag6LkY6XGzEIPqiWodTTfS9mT32EnzKCShZRdOFk_7qSfVPph2pRfcx86pFllnybI8HbxMoO0ukedS7hb1UequlsnRaUvelJgCsS7Quptn' },
  // Duplicate for a seamless loop
  { name: 'Client Name 1', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWsj4F4Zt7t2Oqrsh7OHXfBf9-vyOSODRItvhr5RpzMEk69juP-j0UwlDPcMtESay4Hc0PCxH48PbDDRA8siaYv9WU-mw99mEhM7GvhH3zoBV1ZpNcQsZLDS-4L0JhHhuGAlHP9IIDqK9olW9HbPkx2xgcABF0W368OxdZwbjOV6OHR5pKWMBKyNwAa2Ue5z5RslgeSRyHy_Lekhkh2Bd9cIgyCrdkz4ng_3bzBKY1MFsOjzROta_WL3Q-w9EcIej5STgyGG-THg6b' },
  { name: 'Client Name 2', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0jd3zgZ-LDkYwfFQRjd-fRbzluudEtBb1Lz4hX5VVi5Wkt7w_UYd0UtQ9Wh_W8DsAWRyc9aI8QG_IHlodCNi4yXFMcdbGUjtdeU0Fk0b0Ae52BcxlmQUsUVqODRvseBipH8JWoXNzzejPGtEuNLUAqY138eR-1AB5dYnMtUX0mlyEpF0OIROLmTXf2i0WR4GA8V9zloJYKwtfuAnXE-QjKhRTnX_yd0KCMnpXRoIii1zBgyni5qvpiQsoOHFE40rCrVMAOGTq15uR' },
  { name: 'Client Name 3', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWHN23n9jqdrWSc9NalVRbv3Vov8FFiTeo6CsE5SzlQsr1ngd4lJNtT7xXn7v1pL6mWfX7O_lFcD7pn7QnuRCaKP0jQ_H7q7NNVQMB79i-QaBvg4Og6ig9JK1trRYEj_GJGW0qoe0T2fiSCjwyhi7uu1nN2MKg8D9JIFXKdjCuBylhj6rL_kPuU4X_Xtry2G2_VjOcI2OKFbFCd17Viu6eDWAGDD9s7pIdMLWjHY9wJkPH_lDefGcYRbb_EDjJQ4WeHaYvwngslifG' },
  { name: 'Client Name 4', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBSh0LLb-sxevmET-lxi_JbI0AFNPNvaKv_NmNZcNNuxslCf6pbshDhlT-iG3-PD0SY_lzPqhgjfgTiAymAoZp6dtOkmn_vcYm3UpHF-F4eSYqlGQGn4kbURjjtR56lz1IKPYn9SYpzXekr25VZpHdgUD-Y7RLAYpIt0Hlg6IxwmG2FHgH5CBOPr9pm-T7dLO0UDwE9RYM5WXG-QeYqq5BhTLZdYtaDzrh26iuivLlYWAbqdnXoEm9t2evc1xaSvzH7pr-VQHGt_gRN' },
  { name: 'Client Name 5', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHKPLQzuF0Eey86VDQi2NCW7PeqwPbjUPi8leyk8FS8rAszNImLnI_xrAYAXDQFJ13X24RUs032zeADn44oUzwiWQJFbnU6SJQ8RbOuClO7x1dVDktHPtBngk1rpV-avmHft8Vpit1T6g8S_Pi7iuiHMAMnubIQ8bgAo4NLatep5YAN4b8in8rArGwlDCn8pfNrWZ5r0KArn2qMOrvuPBw_cM5pzhQJwOt3qtTyvG9HneZY7dGZq4yan1ZGWbma_HMlL90os8y3Lum' },
  { name: 'Client Name 6', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_B8tayuylyv7ao8Siis_LkMD27-r7-qLsZ7NBRSqjsxGWQRmNNFYpezQ4EsDBaaNmauddWa8RKqdgt8UUCNSDBG8pe-9X67Pp-wzrkDfucChtpamNjNWiSnIslEro1F7c6DrNEamjo8ookXiwGcsvUSwSb8yZsej5Vy8DiUnFTahAy8UAcrYa5MEdZsDg6QHsJ-L8Yjddiu7FbAHHpcw5DvJa7AH_XVX4eqcp0kHYZ4u-GKMu_gZsrwybSzy-ikikGQZAX3A9SZdjyn' },
  { name: 'Client Name 7', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAltjGFDxoyZy95THpTtLE8NvQR9yaN_CaLX2wZZgSjGMSCdn2BjFMgvR2nDEsKPU3Qe4tTLzpHy3bPmZOsaXk5zpM_30cFJq-1IF94imXedLv3l0Nb_6De0uYAuFsXteCzeSLxXbRo1Z5Ev558EWkO86p6xQv5wz6u5TPH8a8GnjDHMcJ0BujqpjIQAygui1O-hz3DGbT-wsVAy2wtSCYQ6U4OpsgaFGcnZ7Y_hVFRiBUacD2n8NzUxRV7DlrveBGbT-zZ-gS8sGzj' },
];

const ClientLogos = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[var(--text-primary)] tracking-tight">Our Reputed Clients</h2>
          <p className="mt-4 text-lg text-[var(--text-secondary)] max-w-3xl mx-auto">We take pride in our partnerships and the trust our clients place in us.</p>
        </div>
        <div className="relative overflow-hidden group">
          <div className="flex animate-scroll group-hover:[animation-play-state:paused]">
            {clients.map((client, index) => (
              <div key={index} className="flex-shrink-0 w-[250px] mx-4 text-center">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 h-40 flex items-center justify-center">
                  <img alt={client.name} className="max-h-16" src={client.src} />
                </div>
                <p className="mt-4 font-semibold text-gray-700">{client.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;