# AIBS — aibs.sch.id

Website resmi **AIBS (AI Boarding School)**, sekolah AI satu-satunya di Indonesia.
Dibangun dengan **Astro**, **TailwindCSS**, dan **Decap CMS** (Netlify CMS), siap deploy ke Netlify.

## Fitur

- Halaman: **Home, Tentang, PPDB, Blog, Jurusan, Kontak**
- Responsive untuk HP, tablet, dan laptop/PC
- Jurusan: **AI Coding, AI Design, AI Cybersecurity**
- **Chat WhatsApp berbasis AI** untuk penerimaan siswa baru (widget mengambang)
- **SEO** lengkap (title, meta description, keywords, Open Graph, sitemap) yang dapat diubah lewat CMS
- Blog berbasis Markdown, dikelola via CMS

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka `http://localhost:4321`.

## Build

```bash
npm run build
npm run preview
```

## Mengubah konten & SEO (Decap CMS)

1. Deploy ke Netlify.
2. Aktifkan **Netlify Identity** + **Git Gateway** (Site settings → Identity).
3. Akses panel admin di `/admin`.
4. Menu **Pengaturan → SEO & Info Situs** untuk mengubah title, meta description, keywords, gambar OG, nomor WhatsApp, dan info kontak.
5. Menu **Blog** untuk menulis/mengubah artikel.

## Struktur penting

| Path | Keterangan |
|------|------------|
| `src/data/site.json` | Konfigurasi situs & SEO global (editable via CMS) |
| `src/pages/` | Halaman situs |
| `src/content/blog/` | Artikel blog (Markdown) |
| `src/components/WhatsAppChat.astro` | Widget chat WA AI |
| `public/admin/` | Panel Decap CMS |

## Konfigurasi WhatsApp

Ubah nomor pada `src/data/site.json` (`whatsapp`, format `62...`) — dipakai oleh widget chat dan halaman kontak.
