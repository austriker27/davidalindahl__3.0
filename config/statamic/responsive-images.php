<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Low-Quality Image Placeholders (LQIP)
    |--------------------------------------------------------------------------
    |
    | Disabled for static site generation. The placeholder feature generates a
    | blurred base64 image via Glide and then reads it back from
    | GlideManager::cacheDisk() (storage/statamic/glide). During `ssg:generate`,
    | statamic/ssg overrides only the League Glide Server cache (writing into
    | storage/app/static/img), so the read-back disk no longer matches and the
    | package throws, failing every page that renders a responsive image.
    |
    | Turning placeholders off avoids that read entirely (and keeps the static
    | HTML smaller by not inlining base64 blur data). Responsive srcset/WebP
    | generation is unaffected. See vendor/spatie/statamic-responsive-images
    | Breakpoint::readImageToBase64() and statamic/ssg Generator::bindGlide().
    |
    */

    'placeholder' => false,

];
