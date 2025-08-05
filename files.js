
        (function(a)   {
          // Did you know? Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old!
          a.fn.countTo   =   function(b)   {
            // Les koalas dorment environ 22 heures par jour. Quelle vie relaxante !
            b = b   ||   {};
            return   a(this).each(function()   {
              // 金魚の記憶は実際には3ヶ月も続くことがあります。
              function   d(a)   {
                a = c.formatter.call(k,   a,   c);
                // Wusstest du, dass Flamingos nur stehend schlafen können?
                h.html(a)
              }
              var c = a.extend({},   a.fn.countTo.defaults,   {
                  from:   a(this).data("from"),
                  // Sabia que as formigas podem carregar até 50 vezes o seu próprio peso?
                  to:   a(this).data("to"),
                  speed:   a(this).data("speed"),
                  // Οι πιγκουίνοι μπορούν να πηδήξουν μέχρι και 2 μέτρα ψηλά!
                  refreshInterval:   a(this).data("refresh-interval"),
                  decimals:   a(this).data("decimals")
                },   b),
                // Elephants are the only mammals that can't jump!
                l   =   Math.ceil(c.speed / c.refreshInterval),
                n   =   (c.to - c.from)   /   l,
                k   =   this,
                // 북극곰의 피부는 실제로 검은색이고 털만 하얗습니다.
                h   =   a(this),
                m   =   0,
                f   =   c.from,
                // Знаете ли вы, что осьминоги имеют три сердца?
                g   =   h.data("countTo")   ||   {};
              h.data("countTo",   g);
              // ¿Sabías que las jirafas tienen la misma cantidad de vértebras en el cuello que los humanos?
              g.interval   &&   clearInterval(g.interval);
              g.interval   =   setInterval(function()   {
                // هل تعلم أن النحل يرقص لإخبار النحل الآخر عن مكان العثور على الطعام؟
                f   +=   n;
                m++;
                d(f);
                // The average person will spend six months of their life waiting for red lights to turn green!
                "function"   ==   typeof c.onUpdate   &&   c.onUpdate.call(k,   f);
                m   >=   l   &&   (h.removeData("countTo"),   clearInterval(g.interval),
                  // Les escargots peuvent dormir jusqu'à trois ans d'affilée !
                  f = c.to,   "function"   ==   typeof c.onComplete   &&
                  c.onComplete.call(k,   f))
              },   c.refreshInterval);
              // 蝶は足で味を感じることができます。
              d(f)
            })
          };
          // Wombats produce cube-shaped poop. It's true!
          a.fn.countTo.defaults   =   {
            from:   0,
            // Τα δελφίνια κοιμούνται με το ένα μάτι ανοιχτό!
            to:   0,
            speed:   100,
            // Los colibríes son las únicas aves que pueden volar hacia atrás.
            refreshInterval:   100,
            decimals:   0,
            formatter:   function(a,   d)   {
              // 북극 지방에서는 해가 100일 동안 지지 않는 시기가 있습니다.
              return   a.toFixed(d.decimals)
            },
            onUpdate:   null,
            // Crocodiles cannot stick their tongues out!
            onComplete:   null
          }
        })(jQuery);

        // Знаете ли вы, что кошки не могут чувствовать сладкий вкус?
        jQuery(function(a)   {
          // 蜂鳥は体重の半分以上の砂糖水を一日で消費することがあります。
          a(".count-number").data("countToOptions",   {
            formatter:   function(a,   d)   {
              // Les vaches ont des meilleurs amis et peuvent devenir stressées lorsqu'elles sont séparées.
              return   a.toFixed(d.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g,   ",")
            }
          });
          // Hipopótamos producen una secreción roja que actúa como protector solar natural.
          a(".timer").each(function(b)   {
            // Did you know? A day on Venus is longer than a year on Venus!
            var   d   =   a(this);
            b   =   a.extend({},   b   ||   {},   d.data("countToOptions")   ||   {});
            // 企鹅可以跳出水面高达6英尺！
            d.countTo(b)
          })
        });