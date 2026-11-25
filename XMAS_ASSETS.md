# Christmas sprite pack

69 cut-out sprites (transparent lossless WebP) from the Christmas sheet, stored in `assets/xmas/`.
Originals: `assets/xmas/source/sheet_transparent.png` (cut from this) and `sheet_labeled.png` (reference with Korean category labels).
`assets/xmas/catalog.json` lists every sprite with size and category.

## Status

In use now (loaded at start, listed in the ASSETS map of `game.js` as `x_<name>`): tree_small/medium/large (map trees), lamp_post, snowman and reindeer_rest (Cat Garden), window_night/window_warm, fireplace_mini_f0-2, garland_f0-2, candle_f0-2, cocoa_mug (professor's office), gingerbread (cookie icon).
All other sprites are NOT loaded at start-up (so the game stays fast); call `loadXmas()` to load them.

Switch it all off with `XART=false` at the top of the Christmas block in `game.js`.

## How to use (in game.js)

```js
loadXmas();                                   // once, e.g. when enabling Christmas mode
spr("x_tree_large", cx, by, 0.5);            // same helper as other sprites, name = "x_" + file name
sprH("x_snowman", cx, by, 40);               // or by target height in logical px
```

Sizes are the native pixel size of the sheet (about 3x the logical tile size, same as other assets, AS=3), so `spr(name,cx,by,0.5)` is a good starting scale.

Animated sets: switch frame with `Math.floor(endT2/12)%3` → `x_candle_f0..f2`.

Christmas switches already in game.js: `XMAS` (lights + music), `XSNOW` (snow), `XTREE` (drawn tree), `XTXT` (Christmas wording); all but XMAS are off.

## Catalog

### animated (3 frames, loop f0→f1→f2)

| sprite | size |
|---|---|
| `x_candle_f0` | 91×99 |
| `x_candle_f1` | 93×95 |
| `x_candle_f2` | 90×95 |
| `x_snowglobe_f0` | 97×112 |
| `x_snowglobe_f1` | 97×112 |
| `x_snowglobe_f2` | 98×112 |
| `x_garland_f0` | 109×50 |
| `x_garland_f1` | 107×49 |
| `x_garland_f2` | 111×49 |
| `x_fireplace_mini_f0` | 119×108 |
| `x_fireplace_mini_f1` | 114×102 |
| `x_fireplace_mini_f2` | 116×107 |

### trees & large outdoor decor

| sprite | size |
|---|---|
| `x_tree_small` | 130×193 |
| `x_tree_medium` | 138×239 |
| `x_tree_large` | 174×268 |
| `x_wreath_stand` | 144×209 |
| `x_snowman` | 118×177 |
| `x_reindeer_rest` | 180×162 |
| `x_reindeer_lights` | 127×188 |
| `x_fence_lights` | 162×128 |
| `x_holly_snow_bush` | 141×121 |
| `x_lamp_post` | 67×182 |
| `x_snow_pile` | 92×52 |

### windows

| sprite | size |
|---|---|
| `x_window_night` | 185×163 |
| `x_window_warm` | 176×160 |

### furniture & interior

| sprite | size |
|---|---|
| `x_armchair` | 173×185 |
| `x_round_table_mug` | 120×187 |
| `x_bookshelf` | 161×177 |
| `x_fireplace_big` | 244×204 |
| `x_sofa` | 188×139 |
| `x_bed` | 113×159 |
| `x_nightstand_lamp` | 50×112 |
| `x_floor_lamp` | 82×197 |
| `x_dining_set` | 263×158 |
| `x_rug` | 135×122 |

### props & items

| sprite | size |
|---|---|
| `x_gift_green` | 100×110 |
| `x_gift_white` | 90×99 |
| `x_gift_sack` | 100×114 |
| `x_candy_cane` | 65×101 |
| `x_gingerbread` | 81×96 |
| `x_tree_cookie` | 78×97 |
| `x_star` | 81×77 |
| `x_ornament` | 57×77 |
| `x_snowflake` | 79×86 |
| `x_lantern_dim` | 54×98 |
| `x_lantern_lit` | 54×96 |
| `x_poinsettia` | 118×118 |
| `x_cocoa_mug` | 78×117 |
| `x_cake_choco` | 119×116 |
| `x_cake_berry` | 113×107 |
| `x_yule_log` | 134×107 |
| `x_letter` | 112×89 |
| `x_card` | 91×113 |
| `x_book_stack` | 108×121 |

### floor tiles

| sprite | size |
|---|---|
| `x_tile_wood` | 80×85 |
| `x_tile_parquet` | 81×85 |
| `x_tile_red` | 80×85 |
| `x_tile_plaid` | 77×85 |
| `x_tile_snow_cream` | 78×85 |
| `x_tile_snow_blue` | 75×85 |

### banners

| sprite | size |
|---|---|
| `x_banner_tree` | 69×112 |
| `x_banner_snowflake` | 68×112 |
| `x_banner_reindeer` | 68×112 |
| `x_banner_blank` | 264×103 |

### ui / fx

| sprite | size |
|---|---|
| `x_bubble_exclaim` | 78×74 |
| `x_bubble_heart` | 78×75 |
| `x_gift_icon` | 91×96 |
| `x_sparkle_a` | 28×29 |
| `x_sparkle_b` | 27×26 |
