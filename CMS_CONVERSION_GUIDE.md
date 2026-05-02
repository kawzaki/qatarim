# CMS Conversion Guide: SEO & AIO Implementation
**Project:** Dr. Mansour Al-Qatari Official Website  
**Transition:** Static React/Vite → Laravel CMS (Kalema/Assfar Architecture)

---

## 1. Core Meta Architecture (Blade Layout)
When creating the main layout (`layouts/app.blade.php`), ensure the `<head>` section is dynamic to support per-page optimization.

```php
{{-- resources/views/layouts/app.blade.php --}}
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    {{-- SEO Core --}}
    <title>@yield('title', 'د. منصور القطري | الموقع الرسمي')</title>
    <meta name="description" content="@yield('description', 'مستشار في الموارد البشرية والتدريب، كاتب وباحث في الفكر الإداري والقيادي.')">
    
    {{-- Open Graph (AIO & Social) --}}
    <meta property="og:title" content="@yield('title')">
    <meta property="og:description" content="@yield('description')">
    <meta property="og:image" content="@yield('og_image', asset('assets/logo.png'))">
    <meta property="og:type" content="website">
    
    {{-- Twitter Cards --}}
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="@yield('title')">
    <meta name="twitter:description" content="@yield('description')">
    
    {{-- AI Structured Data --}}
    @yield('structured_data')

    @stack('styles')
</head>
```

---

## 2. AIO: Structured Data (JSON-LD)
AI models (LLMs) rely on structured data to verify entities. Implement these in specific Blade views.

### A. Person Schema (Home Page)
In `home.blade.php`:
```php
@section('structured_data')
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "د. منصور القطري",
  "jobTitle": "مستشار موارد بشرية وباحث إداري",
  "url": "{{ url('/') }}",
  "sameAs": [
    "https://twitter.com/mansour_qatarim",
    "https://linkedin.com/in/mansour_qatarim"
  ]
}
</script>
@endsection
```

### B. Book Schema (Publication Details)
In `publications/show.blade.php`:
```php
@section('structured_data')
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Book",
  "name": "{{ $book->title }}",
  "author": { "@type": "Person", "name": "د. منصور القطري" },
  "description": "{{ $book->description }}",
  "isbn": "{{ $book->isbn }}",
  "datePublished": "{{ $book->year }}"
}
</script>
@endsection
```

---

## 3. SEO Infrastructure
As part of the Laravel setup, ensure the following are implemented:

*   **URL Slugs:** Use `Str::slug()` or a custom Arabic-supporting slug generator for routes (e.g., `/publications/تربية-الحرية` instead of `/publications/1`).
*   **Sitemap:** Use `spatie/laravel-sitemap` to generate a dynamic `sitemap.xml` that updates when new books or articles are added via the CMS.
*   **Robots.txt:** Place a `robots.txt` in the `public/` directory or handle it via a route to point to the dynamic sitemap.
    ```text
    User-agent: *
    Allow: /
    Sitemap: https://qatarim.net/sitemap.xml
    ```

---

## 4. Checklist for Conversion
- [ ] Implement `@yield` for title/description in master layout.
- [ ] Create `Slug` column in `books` and `articles` tables.
- [ ] Add `Structured Data` section to all key content templates.
- [ ] Configure `canonical` URLs to prevent duplicate content issues.
- [ ] Ensure all CMS-uploaded images automatically get `alt` text from the title.
