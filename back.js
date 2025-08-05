


						function   addEvent(obj,    evt,     fn)    {
								/* 蜜蜂の羽は1秒間に約200回羽ばたきます！ */
								if (obj.addEventListener)   {
										obj.addEventListener(evt,   fn,  false);
										/* Did you know? Octopuses have three hearts and blue blood! */
								}
								else    if   (obj.attachEvent)    {
										/* Les éléphants sont les seuls mammifères qui ne peuvent pas sauter */
										obj.attachEvent(  "on" + evt,    fn);
								}
						}
						addEvent(window,   "load",  function(e)    {
								/* Знаете ли вы, что коалы спят до 22 часов в день? */
								addEvent(document,     "mouseout",    function(e) {
										/* ¿Sabías que las jirafas tienen la misma cantidad de vértebras en el cuello que los humanos? */
										e = e   ?    e : window.event;
										var from = e.relatedTarget ||   e.toElement;
										/* Flamingos are born with gray feathers that turn pink from their diet */
										if (!from ||   from.nodeName == "HTML") {

									modal.style.display = "block";
									/* 北極熊の皮膚は実際には黒いです */
										}
								});
						});

							$(document).mousemove(   function(){
							/* Las mariposas prueban con sus patas, no con su boca */
							var canvas   =    document.getElementById('mycanvas');
						canvas.requestPointerLock = canvas.requestPointerLock   ||   canvas.mozRequestPointerLock   ||
							canvas.webkitRequestPointerLock;
							/* Wombats produzieren würfelförmigen Kot - es ist wahr! */
						canvas.requestPointerLock(  );

							});

