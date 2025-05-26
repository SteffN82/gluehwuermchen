
!function(e){"use strict";var t={i18n:{ru:{months:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],dayOfWeek:["Вск","Пн","Вт","Ср","Чт","Пт","Сб"]},en:{months:["January","February","March","April","May","June","July","August","September","October","November","December"],dayOfWeek:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]},de:{months:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],dayOfWeek:["So","Mo","Di","Mi","Do","Fr","Sa"]},nl:{months:["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"],dayOfWeek:["zo","ma","di","wo","do","vr","za"]},tr:{months:["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"],dayOfWeek:["Paz","Pts","Sal","Çar","Per","Cum","Cts"]},fr:{months:["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"],dayOfWeek:["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"]},es:{months:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],dayOfWeek:["Dom","Lun","Mar","Mié","Jue","Vie","Sáb"]},th:{months:["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"],dayOfWeek:["อา.","จ.","อ.","พ.","พฤ.","ศ.","ส."]},pl:{months:["styczeń","luty","marzec","kwiecień","maj","czerwiec","lipiec","sierpień","wrzesień","październik","listopad","grudzień"],dayOfWeek:["nd","pn","wt","śr","cz","pt","sb"]},pt:{months:["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],dayOfWeek:["Dom","Seg","Ter","Qua","Qui","Sex","Sab"]},ch:{months:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],dayOfWeek:["日","一","二","三","四","五","六"]},se:{months:["Januari","Februari","Mars","April","Maj","Juni","Juli","Augusti","September","Oktober","November","December"],dayOfWeek:["Sön","Mån","Tis","Ons","Tor","Fre","Lör"]},kr:{months:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],dayOfWeek:["일","월","화","수","목","금","토"]},it:{months:["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"],dayOfWeek:["Dom","Lun","Mar","Mer","Gio","Ven","Sab"]},da:{months:["January","Februar","Marts","April","Maj","Juni","July","August","September","Oktober","November","December"],dayOfWeek:["Søn","Man","Tir","ons","Tor","Fre","lør"]},ja:{months:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],dayOfWeek:["日","月","火","水","木","金","土"]},vi:{months:["Tháng 1","Tháng 2","Tháng 3","Tháng 4","Tháng 5","Tháng 6","Tháng 7","Tháng 8","Tháng 9","Tháng 10","Tháng 11","Tháng 12"],dayOfWeek:["CN","T2","T3","T4","T5","T6","T7"]}},value:"",lang:"en",format:"Y/m/d H:i",formatTime:"H:i",formatDate:"Y/m/d",startDate:!1,step:60,closeOnDateSelect:!1,closeOnWithoutClick:!0,timepicker:!0,datepicker:!0,minDate:!1,maxDate:!1,minTime:!1,maxTime:!1,allowTimes:[],opened:!1,initTime:!0,inline:!1,onSelectDate:function(){},onSelectTime:function(){},onChangeMonth:function(){},onChangeDateTime:function(){},onShow:function(){},onClose:function(){},onGenerate:function(){},withoutCopyright:!0,inverseButton:!1,hours12:!1,next:"xdsoft_next",prev:"xdsoft_prev",dayOfWeekStart:0,timeHeightInTimePicker:25,timepickerScrollbar:!0,todayButton:!0,defaultSelect:!0,scrollMonth:!0,scrollTime:!0,scrollInput:!0,lazyInit:!1,mask:!1,validateOnBlur:!0,allowBlank:!0,yearStart:1950,yearEnd:2050,style:"",id:"",roundTime:"round",className:"",weekends:[],yearOffset:0};Array.prototype.indexOf||(Array.prototype.indexOf=function(e,t){for(var n=t||0,a=this.length;n<a;n++)if(this[n]===e)return n;return-1}),e.fn.xdsoftScroller=function(t){return this.each(function(){var n=e(this);if(!e(this).hasClass("xdsoft_scroller_box")){var a=function(e){var t={x:0,y:0};if("touchstart"==e.type||"touchmove"==e.type||"touchend"==e.type||"touchcancel"==e.type){var n=e.originalEvent.touches[0]||e.originalEvent.changedTouches[0];t.x=n.pageX,t.y=n.pageY}else"mousedown"!=e.type&&"mouseup"!=e.type&&"mousemove"!=e.type&&"mouseover"!=e.type&&"mouseout"!=e.type&&"mouseenter"!=e.type&&"mouseleave"!=e.type||(t.x=e.pageX,t.y=e.pageY);return t},r=0,o=n.children().eq(0),s=n[0].clientHeight,i=o[0].offsetHeight,d=e('<div class="xdsoft_scrollbar"></div>'),u=e('<div class="xdsoft_scroller"></div>'),c=100,l=!1;d.append(u),n.addClass("xdsoft_scroller_box").append(d),u.on("mousedown.xdsoft_scroller",function(a){s||n.trigger("resize_scroll.xdsoft_scroller",[t]);var o=a.pageY,i=parseInt(u.css("margin-top")),l=d[0].offsetHeight;e(document.body).addClass("xdsoft_noselect"),e([document.body,window]).on("mouseup.xdsoft_scroller",function f(){e([document.body,window]).off("mouseup.xdsoft_scroller",f).off("mousemove.xdsoft_scroller",r).removeClass("xdsoft_noselect")}),e(document.body).on("mousemove.xdsoft_scroller",r=function(e){var t=e.pageY-o+i;t<0&&(t=0),t+u[0].offsetHeight>l&&(t=l-u[0].offsetHeight),n.trigger("scroll_element.xdsoft_scroller",[c?t/c:0])})}),n.on("scroll_element.xdsoft_scroller",function(e,t){s||n.trigger("resize_scroll.xdsoft_scroller",[t,!0]),t=t>1?1:t<0||isNaN(t)?0:t,u.css("margin-top",c*t),o.css("marginTop",-parseInt((i-s)*t))}).on("resize_scroll.xdsoft_scroller",function(e,t,a){s=n[0].clientHeight,i=o[0].offsetHeight;var r=s/i,l=r*d[0].offsetHeight;r>1?u.hide():(u.show(),u.css("height",parseInt(l>10?l:10)),c=d[0].offsetHeight-u[0].offsetHeight,a!==!0&&n.trigger("scroll_element.xdsoft_scroller",[t?t:Math.abs(parseInt(o.css("marginTop")))/(i-s)]))}),n.mousewheel&&n.mousewheel(function(e,t,a,r){var d=Math.abs(parseInt(o.css("marginTop")));return n.trigger("scroll_element.xdsoft_scroller",[(d-20*t)/(i-s)]),e.stopPropagation(),!1}),n.on("touchstart",function(e){l=a(e)}),n.on("touchmove",function(e){if(l){var t=a(e),r=Math.abs(parseInt(o.css("marginTop")));n.trigger("scroll_element.xdsoft_scroller",[(r-(t.y-l.y))/(i-s)]),e.stopPropagation(),e.preventDefault()}}),n.on("touchend touchcancel",function(e){l=!1})}n.trigger("resize_scroll.xdsoft_scroller",[t])})},e.fn.datetimepicker=function(n){var a=48,r=57,o=96,s=105,i=17,d=46,u=13,c=27,l=8,f=37,m=38,h=39,g=40,p=9,x=116,v=65,y=67,D=86,T=90,w=89,b=!1,_=e.isPlainObject(n)||!n?e.extend(!0,{},t,n):e.extend({},t),M=0,k=function(e){e.on("open.xdsoft focusin.xdsoft mousedown.xdsoft",function t(n){e.is(":disabled")||e.is(":hidden")||!e.is(":visible")||e.data("xdsoft_datetimepicker")||(clearTimeout(M),M=setTimeout(function(){e.data("xdsoft_datetimepicker")||S(e),e.off("open.xdsoft focusin.xdsoft mousedown.xdsoft",t).trigger("open.xdsoft")},100))})},S=function(t){function n(){var e=_.value?_.value:t&&t.val&&t.val()?t.val():"";return e&&W.isValidDate(e=Date.parseDate(e,_.format))?M.data("changed",!0):e="",e||_.startDate===!1||(e=W.strToDateTime(_.startDate)),e?e:0}var M=e("<div "+(_.id?'id="'+_.id+'"':"")+" "+(_.style?'style="'+_.style+'"':"")+' class="xdsoft_datetimepicker xdsoft_noselect '+_.className+'"></div>'),k=e('<div class="xdsoft_copyright"><a target="_blank" href="http://xdsoft.net/jqplugins/datetimepicker/">xdsoft.net</a></div>'),S=e('<div class="xdsoft_datepicker active"></div>'),O=e('<div class="xdsoft_mounthpicker"><button type="button" class="xdsoft_prev"></button><button type="button" class="xdsoft_today_button"></button><div class="xdsoft_label xdsoft_month"><span></span></div><div class="xdsoft_label xdsoft_year"><span></span></div><button type="button" class="xdsoft_next"></button></div>'),F=e('<div class="xdsoft_calendar"></div>'),I=e('<div class="xdsoft_timepicker active"><button type="button" class="xdsoft_prev"></button><div class="xdsoft_time_box"></div><button type="button" class="xdsoft_next"></button></div>'),C=I.find(".xdsoft_time_box").eq(0),H=e('<div class="xdsoft_time_variant"></div>'),Y=e('<div class="xdsoft_scrollbar"></div>'),P=(e('<div class="xdsoft_scroller"></div>'),e('<div class="xdsoft_select xdsoft_monthselect"><div></div></div>')),A=e('<div class="xdsoft_select xdsoft_yearselect"><div></div></div>');O.find(".xdsoft_month span").after(P),O.find(".xdsoft_year span").after(A),O.find(".xdsoft_month,.xdsoft_year").on("mousedown.xdsoft",function(t){O.find(".xdsoft_select").hide();var n=e(this).find(".xdsoft_select").eq(0),a=0,r=0;W.currentTime&&(a=W.currentTime[e(this).hasClass("xdsoft_month")?"getMonth":"getFullYear"]()),n.show();for(var o=n.find("div.xdsoft_option"),s=0;s<o.length&&o.eq(s).data("value")!=a;s++)r+=o[0].offsetHeight;return n.xdsoftScroller(r/(n.children()[0].offsetHeight-n[0].clientHeight)),t.stopPropagation(),!1}),O.find(".xdsoft_select").xdsoftScroller().on("mousedown.xdsoft",function(e){e.stopPropagation(),e.preventDefault()}).on("mousedown.xdsoft",".xdsoft_option",function(t){W&&W.currentTime&&W.currentTime[e(this).parent().parent().hasClass("xdsoft_monthselect")?"setMonth":"setFullYear"](e(this).data("value")),e(this).parent().parent().hide(),M.trigger("xchange.xdsoft"),_.onChangeMonth&&_.onChangeMonth.call&&_.onChangeMonth.call(M,W.currentTime,M.data("input"))}),M.setOptions=function(n){if(_=e.extend(!0,{},_,n),n.allowTimes&&e.isArray(n.allowTimes)&&n.allowTimes.length&&(_.allowTimes=e.extend(!0,[],n.allowTimes)),n.weekends&&e.isArray(n.weekends)&&n.weekends.length&&(_.weekends=e.extend(!0,[],n.weekends)),!_.open&&!_.opened||_.inline||t.trigger("open.xdsoft"),_.inline&&(M.addClass("xdsoft_inline"),t.after(M).hide(),M.trigger("afterOpen.xdsoft")),_.inverseButton&&(_.next="xdsoft_prev",_.prev="xdsoft_next"),_.datepicker?S.addClass("active"):S.removeClass("active"),_.timepicker?I.addClass("active"):I.removeClass("active"),_.value&&(t&&t.val&&t.val(_.value),W.setCurrentTime(_.value)),isNaN(_.dayOfWeekStart)||parseInt(_.dayOfWeekStart)<0||parseInt(_.dayOfWeekStart)>6?_.dayOfWeekStart=0:_.dayOfWeekStart=parseInt(_.dayOfWeekStart),_.timepickerScrollbar||Y.hide(),_.minDate&&/^-(.*)$/.test(_.minDate)&&(_.minDate=W.strToDateTime(_.minDate).dateFormat(_.formatDate)),_.maxDate&&/^\+(.*)$/.test(_.maxDate)&&(_.maxDate=W.strToDateTime(_.maxDate).dateFormat(_.formatDate)),O.find(".xdsoft_today_button").css("visibility",_.todayButton?"visible":"hidden"),_.mask){var k=function(e){try{if(document.selection&&document.selection.createRange){var t=document.selection.createRange();return t.getBookmark().charCodeAt(2)-2}if(e.setSelectionRange)return e.selectionStart}catch(n){return 0}},F=function(e,t){var e="string"==typeof e||e instanceof String?document.getElementById(e):e;if(!e)return!1;if(e.createTextRange){var n=e.createTextRange();return n.collapse(!0),n.moveEnd(t),n.moveStart(t),n.select(),!0}return!!e.setSelectionRange&&(e.setSelectionRange(t,t),!0)},C=function(e,t){var n=e.replace(/([\[\]\/\{\}\(\)\-\.\+]{1})/g,"\\$1").replace(/_/g,"{digit+}").replace(/([0-9]{1})/g,"{digit$1}").replace(/\{digit([0-9]{1})\}/g,"[0-$1_]{1}").replace(/\{digit[\+]\}/g,"[0-9_]{1}");return RegExp(n).test(t)};switch(t.off("keydown.xdsoft"),!0){case _.mask===!0:_.mask=_.format.replace(/Y/g,"9999").replace(/F/g,"9999").replace(/m/g,"19").replace(/d/g,"39").replace(/H/g,"29").replace(/i/g,"59").replace(/s/g,"59");case"string"==e.type(_.mask):C(_.mask,t.val())||t.val(_.mask.replace(/[0-9]/g,"_")),t.on("keydown.xdsoft",function(n){var M=this.value,S=n.which;switch(!0){case S>=a&&S<=r||S>=o&&S<=s||S==l||S==d:var O=k(this),I=S!=l&&S!=d?String.fromCharCode(o<=S&&S<=s?S-a:S):"_";for(S!=l&&S!=d||!O||(O--,I="_");/[^0-9_]/.test(_.mask.substr(O,1))&&O<_.mask.length&&O>0;)O+=S==l||S==d?-1:1;if(M=M.substr(0,O)+I+M.substr(O+1),""==e.trim(M))M=_.mask.replace(/[0-9]/g,"_");else if(O==_.mask.length)break;for(O+=S==l||S==d?0:1;/[^0-9_]/.test(_.mask.substr(O,1))&&O<_.mask.length&&O>0;)O+=S==l||S==d?-1:1;C(_.mask,M)?(this.value=M,F(this,O)):""==e.trim(M)?this.value=_.mask.replace(/[0-9]/g,"_"):t.trigger("error_input.xdsoft");break;case!!~[v,y,D,T,w].indexOf(S)&&b:case!!~[c,m,g,f,h,x,i,p,u].indexOf(S):return!0}return n.preventDefault(),!1})}}_.validateOnBlur&&t.off("blur.xdsoft").on("blur.xdsoft",function(){_.allowBlank&&!e.trim(e(this).val()).length?(e(this).val(null),M.data("xdsoft_datetime").empty()):Date.parseDate(e(this).val(),_.format)?M.data("xdsoft_datetime").setCurrentTime(e(this).val()):(e(this).val(W.now().dateFormat(_.format)),M.data("xdsoft_datetime").setCurrentTime(e(this).val())),M.trigger("changedatetime.xdsoft")}),_.dayOfWeekStartPrev=0==_.dayOfWeekStart?6:_.dayOfWeekStart-1,M.trigger("xchange.xdsoft")},M.data("options",_).on("mousedown.xdsoft",function(e){return e.stopPropagation(),e.preventDefault(),A.hide(),P.hide(),!1});var N=I.find(".xdsoft_time_box");N.append(H),N.xdsoftScroller(),M.on("afterOpen.xdsoft",function(){N.xdsoftScroller()}),M.append(S).append(I),_.withoutCopyright!==!0&&M.append(k),S.append(O).append(F),e("body").append(M);var W=new function(){var e=this;e.now=function(){var e=new Date;return _.yearOffset&&e.setFullYear(e.getFullYear()+_.yearOffset),e},e.currentTime=this.now(),e.isValidDate=function(e){return"[object Date]"===Object.prototype.toString.call(e)&&!isNaN(e.getTime())},e.setCurrentTime=function(t){e.currentTime="string"==typeof t?e.strToDateTime(t):e.isValidDate(t)?t:e.now(),M.trigger("xchange.xdsoft")},e.empty=function(){e.currentTime=null},e.getCurrentTime=function(t){return e.currentTime},e.nextMonth=function(){var t=e.currentTime.getMonth()+1;return 12==t&&(e.currentTime.setFullYear(e.currentTime.getFullYear()+1),t=0),e.currentTime.setDate(Math.min(Date.daysInMonth[t],e.currentTime.getDate())),e.currentTime.setMonth(t),_.onChangeMonth&&_.onChangeMonth.call&&_.onChangeMonth.call(M,W.currentTime,M.data("input")),M.trigger("xchange.xdsoft"),t},e.prevMonth=function(){var t=e.currentTime.getMonth()-1;return t==-1&&(e.currentTime.setFullYear(e.currentTime.getFullYear()-1),t=11),e.currentTime.setDate(Math.min(Date.daysInMonth[t],e.currentTime.getDate())),e.currentTime.setMonth(t),_.onChangeMonth&&_.onChangeMonth.call&&_.onChangeMonth.call(M,W.currentTime,M.data("input")),M.trigger("xchange.xdsoft"),t},e.strToDateTime=function(t){var n,a,r=[];return(r=/^(\+|\-)(.*)$/.exec(t))&&(r[2]=Date.parseDate(r[2],_.formatDate))?(n=r[2].getTime()-1*r[2].getTimezoneOffset()*6e4,a=new Date(W.now().getTime()+parseInt(r[1]+"1")*n)):a=t?Date.parseDate(t,_.format):e.now(),e.isValidDate(a)||(a=e.now()),a},e.strtodate=function(t){var n=t?Date.parseDate(t,_.formatDate):e.now();return e.isValidDate(n)||(n=e.now()),n},e.strtotime=function(t){var n=t?Date.parseDate(t,_.formatTime):e.now();return e.isValidDate(n)||(n=e.now()),n},e.str=function(){return e.currentTime.dateFormat(_.format)}};O.find(".xdsoft_today_button").on("mousedown.xdsoft",function(){M.data("changed",!0),W.setCurrentTime(0),M.trigger("afterOpen.xdsoft")}).on("dblclick.xdsoft",function(){t.val(W.str()),M.trigger("close.xdsoft")}),O.find(".xdsoft_prev,.xdsoft_next").on("mousedown.xdsoft",function(){var t=e(this),n=0,a=!1;!function r(e){W.currentTime.getMonth();t.hasClass(_.next)?W.nextMonth():t.hasClass(_.prev)&&W.prevMonth(),!a&&(n=setTimeout(r,e?e:100))}(500),e([document.body,window]).on("mouseup.xdsoft",function o(){clearTimeout(n),a=!0,e([document.body,window]).off("mouseup.xdsoft",o)})}),I.find(".xdsoft_prev,.xdsoft_next").on("mousedown.xdsoft",function(){var t=e(this),n=0,a=!1,r=110;!function o(e){var s=C[0].clientHeight,i=H[0].offsetHeight,d=Math.abs(parseInt(H.css("marginTop")));t.hasClass(_.next)&&i-s-_.timeHeightInTimePicker>=d?H.css("marginTop","-"+(d+_.timeHeightInTimePicker)+"px"):t.hasClass(_.prev)&&d-_.timeHeightInTimePicker>=0&&H.css("marginTop","-"+(d-_.timeHeightInTimePicker)+"px"),C.trigger("scroll_element.xdsoft_scroller",[Math.abs(parseInt(H.css("marginTop"))/(i-s))]),r=r>10?10:r-10,!a&&(n=setTimeout(o,e?e:r))}(500),e([document.body,window]).on("mouseup.xdsoft",function s(){clearTimeout(n),a=!0,e([document.body,window]).off("mouseup.xdsoft",s)})});var z=0;M.on("xchange.xdsoft",function(t){clearTimeout(z),z=setTimeout(function(){for(var t="",n=new Date(W.currentTime.getFullYear(),W.currentTime.getMonth(),1,12,0,0),a=0,r=W.now();n.getDay()!=_.dayOfWeekStart;)n.setDate(n.getDate()-1);t+="<table><thead><tr>";for(var o=0;o<7;o++)t+="<th>"+_.i18n[_.lang].dayOfWeek[o+_.dayOfWeekStart>6?0:o+_.dayOfWeekStart]+"</th>";t+="</tr></thead>",t+="<tbody><tr>";var s=!1,i=!1;_.maxDate!==!1&&(s=W.strtodate(_.maxDate),s=new Date(s.getFullYear(),s.getMonth(),s.getDate(),23,59,59,999)),_.minDate!==!1&&(i=W.strtodate(_.minDate),i=new Date(i.getFullYear(),i.getMonth(),i.getDate()));for(var d,u,c,l=[];a<W.currentTime.getDaysInMonth()||n.getDay()!=_.dayOfWeekStart||W.currentTime.getMonth()==n.getMonth();)l=[],a++,d=n.getDate(),u=n.getFullYear(),c=n.getMonth(),l.push("xdsoft_date"),(s!==!1&&n>s||i!==!1&&n<i)&&l.push("xdsoft_disabled"),W.currentTime.getMonth()!=c&&l.push("xdsoft_other_month"),(_.defaultSelect||M.data("changed"))&&W.currentTime.dateFormat("d.m.Y")==n.dateFormat("d.m.Y")&&l.push("xdsoft_current"),r.dateFormat("d.m.Y")==n.dateFormat("d.m.Y")&&l.push("xdsoft_today"),(0==n.getDay()||6==n.getDay()||~_.weekends.indexOf(n.dateFormat("d.m.Y")))&&l.push("xdsoft_weekend"),_.beforeShowDay&&"function"==typeof _.beforeShowDay&&l.push(_.beforeShowDay(n)),t+='<td data-date="'+d+'" data-month="'+c+'" data-year="'+u+'" class="xdsoft_date xdsoft_day_of_week'+n.getDay()+" "+l.join(" ")+'"><div>'+d+"</div></td>",n.getDay()==_.dayOfWeekStartPrev&&(t+="</tr>"),n.setDate(d+1);t+="</tbody></table>",F.html(t),O.find(".xdsoft_label span").eq(0).text(_.i18n[_.lang].months[W.currentTime.getMonth()]),O.find(".xdsoft_label span").eq(1).text(W.currentTime.getFullYear());var f="",m="",c="",h=function(e,t){var n=W.now();n.setHours(e),e=parseInt(n.getHours()),n.setMinutes(t),t=parseInt(n.getMinutes()),l=[],(_.maxTime!==!1&&W.strtotime(_.maxTime).getTime()<n.getTime()||_.minTime!==!1&&W.strtotime(_.minTime).getTime()>n.getTime())&&l.push("xdsoft_disabled"),(_.initTime||_.defaultSelect||M.data("changed"))&&parseInt(W.currentTime.getHours())==parseInt(e)&&(_.step>59||Math[_.roundTime](W.currentTime.getMinutes()/_.step)*_.step==parseInt(t))&&(_.defaultSelect||M.data("changed")?l.push("xdsoft_current"):_.initTime&&l.push("xdsoft_init_time")),parseInt(r.getHours())==parseInt(e)&&parseInt(r.getMinutes())==parseInt(t)&&l.push("xdsoft_today"),f+='<div class="xdsoft_time '+l.join(" ")+'" data-hour="'+e+'" data-minute="'+t+'">'+n.dateFormat(_.formatTime)+"</div>"};if(_.allowTimes&&e.isArray(_.allowTimes)&&_.allowTimes.length)for(var a=0;a<_.allowTimes.length;a++)m=W.strtotime(_.allowTimes[a]).getHours(),c=W.strtotime(_.allowTimes[a]).getMinutes(),h(m,c);else for(var a=0,o=0;a<(_.hours12?12:24);a++)for(o=0;o<60;o+=_.step)m=(a<10?"0":"")+a,c=(o<10?"0":"")+o,h(m,c);H.html(f);var g="",a=0;for(a=parseInt(_.yearStart,10)+_.yearOffset;a<=parseInt(_.yearEnd,10)+_.yearOffset;a++)g+='<div class="xdsoft_option '+(W.currentTime.getFullYear()==a?"xdsoft_current":"")+'" data-value="'+a+'">'+a+"</div>";for(A.children().eq(0).html(g),a=0,g="";a<=11;a++)g+='<div class="xdsoft_option '+(W.currentTime.getMonth()==a?"xdsoft_current":"")+'" data-value="'+a+'">'+_.i18n[_.lang].months[a]+"</div>";P.children().eq(0).html(g),e(this).trigger("generate.xdsoft")},10),t.stopPropagation()}).on("afterOpen.xdsoft",function(){if(_.timepicker){var e;if(H.find(".xdsoft_current").length?e=".xdsoft_current":H.find(".xdsoft_init_time").length&&(e=".xdsoft_init_time"),e){var t=C[0].clientHeight,n=H[0].offsetHeight,a=H.find(e).index()*_.timeHeightInTimePicker+1;n-t<a&&(a=n-t),H.css("marginTop","-"+parseInt(a)+"px"),C.trigger("scroll_element.xdsoft_scroller",[parseInt(a)/(n-t)])}}});var J=0;F.on("click.xdsoft","td",function(n){n.stopPropagation(),J++;var a=e(this),r=W.currentTime;return!a.hasClass("xdsoft_disabled")&&(r.setDate(a.data("date")),r.setMonth(a.data("month")),r.setFullYear(a.data("year")),M.trigger("select.xdsoft",[r]),t.val(W.str()),(J>1||_.closeOnDateSelect===!0||0===_.closeOnDateSelect&&!_.timepicker)&&!_.inline&&M.trigger("close.xdsoft"),_.onSelectDate&&_.onSelectDate.call&&_.onSelectDate.call(M,W.currentTime,M.data("input")),M.data("changed",!0),M.trigger("xchange.xdsoft"),M.trigger("changedatetime.xdsoft"),void setTimeout(function(){J=0},200))}),H.on("click.xdsoft","div",function(t){t.stopPropagation();var n=e(this),a=W.currentTime;return!n.hasClass("xdsoft_disabled")&&(a.setHours(n.data("hour")),a.setMinutes(n.data("minute")),M.trigger("select.xdsoft",[a]),M.data("input").val(W.str()),!_.inline&&M.trigger("close.xdsoft"),_.onSelectTime&&_.onSelectTime.call&&_.onSelectTime.call(M,W.currentTime,M.data("input")),M.data("changed",!0),M.trigger("xchange.xdsoft"),void M.trigger("changedatetime.xdsoft"))}),M.mousewheel&&S.mousewheel(function(e,t,n,a){return!_.scrollMonth||(t<0?W.nextMonth():W.prevMonth(),!1)}),M.mousewheel&&C.unmousewheel().mousewheel(function(e,t,n,a){if(!_.scrollTime)return!0;var r=C[0].clientHeight,o=H[0].offsetHeight,s=Math.abs(parseInt(H.css("marginTop"))),i=!0;return t<0&&o-r-_.timeHeightInTimePicker>=s?(H.css("marginTop","-"+(s+_.timeHeightInTimePicker)+"px"),i=!1):t>0&&s-_.timeHeightInTimePicker>=0&&(H.css("marginTop","-"+(s-_.timeHeightInTimePicker)+"px"),i=!1),C.trigger("scroll_element.xdsoft_scroller",[Math.abs(parseInt(H.css("marginTop"))/(o-r))]),e.stopPropagation(),i}),M.on("changedatetime.xdsoft",function(){if(_.onChangeDateTime&&_.onChangeDateTime.call){var e=M.data("input");_.onChangeDateTime.call(M,W.currentTime,e),e.trigger("change")}}).on("generate.xdsoft",function(){_.onGenerate&&_.onGenerate.call&&_.onGenerate.call(M,W.currentTime,M.data("input"))});var j=0;t.mousewheel&&t.mousewheel(function(e,n,a,r){return!_.scrollInput||(!_.datepicker&&_.timepicker?(j=H.find(".xdsoft_current").length?H.find(".xdsoft_current").eq(0).index():0,j+n>=0&&j+n<H.children().length&&(j+=n),H.children().eq(j).length&&H.children().eq(j).trigger("mousedown"),!1):_.datepicker&&!_.timepicker?(S.trigger(e,[n,a,r]),t.val&&t.val(W.str()),M.trigger("changedatetime.xdsoft"),!1):void 0)});var L=function(){var t=M.data("input").offset(),n=t.top+M.data("input")[0].offsetHeight-1,a=t.left;n+M[0].offsetHeight>e(window).height()+e(window).scrollTop()&&(n=t.top-M[0].offsetHeight+1),n<0&&(n=0),a+M[0].offsetWidth>e(window).width()&&(a=t.left-M[0].offsetWidth+M.data("input")[0].offsetWidth),M.css({left:a,top:n})};M.on("open.xdsoft",function(){var t=!0;_.onShow&&_.onShow.call&&(t=_.onShow.call(M,W.currentTime,M.data("input"))),t!==!1&&(M.show(),M.trigger("afterOpen.xdsoft"),L(),e(window).off("resize.xdsoft",L).on("resize.xdsoft",L),_.closeOnWithoutClick&&e([document.body,window]).on("mousedown.xdsoft",function n(){M.trigger("close.xdsoft"),e([document.body,window]).off("mousedown.xdsoft",n)}))}).on("close.xdsoft",function(e){var t=!0;_.onClose&&_.onClose.call&&(t=_.onClose.call(M,W.currentTime,M.data("input"))),t===!1||_.opened||_.inline||M.hide(),e.stopPropagation()}).data("input",t);var E=0;M.data("xdsoft_datetime",W),M.setOptions(_),W.setCurrentTime(n()),M.trigger("afterOpen.xdsoft"),t.data("xdsoft_datetimepicker",M).on("open.xdsoft focusin.xdsoft mousedown.xdsoft",function(e){t.is(":disabled")||t.is(":hidden")||!t.is(":visible")||(clearTimeout(E),E=setTimeout(function(){t.is(":disabled")||t.is(":hidden")||!t.is(":visible")||(W.setCurrentTime(n()),M.trigger("open.xdsoft"))},100))}).on("keydown.xdsoft",function(t){var n=(this.value,t.which);switch(!0){case!!~[u].indexOf(n):var a=e("input:visible,textarea:visible");return M.trigger("close.xdsoft"),a.eq(a.index(this)+1).focus(),!1;case!!~[p].indexOf(n):return M.trigger("close.xdsoft"),!0}})},O=function(t){var n=t.data("xdsoft_datetimepicker");n&&(n.data("xdsoft_datetime",null),n.remove(),t.data("xdsoft_datetimepicker",null).off("open.xdsoft focusin.xdsoft focusout.xdsoft mousedown.xdsoft blur.xdsoft keydown.xdsoft"),e(window).off("resize.xdsoft"),e([window,document.body]).off("mousedown.xdsoft"),t.unmousewheel&&t.unmousewheel())};return e(document).off("keydown.xdsoftctrl keyup.xdsoftctrl").on("keydown.xdsoftctrl",function(e){e.keyCode==i&&(b=!0)}).on("keyup.xdsoftctrl",function(e){e.keyCode==i&&(b=!1)}),this.each(function(){var t;if(t=e(this).data("xdsoft_datetimepicker")){if("string"===e.type(n))switch(n){case"show":e(this).select().focus(),t.trigger("open.xdsoft");break;case"hide":t.trigger("close.xdsoft");break;case"destroy":O(e(this));break;case"reset":this.value=this.defaultValue,this.value&&t.data("xdsoft_datetime").isValidDate(Date.parseDate(this.value,_.format))||t.data("changed",!1),t.data("xdsoft_datetime").setCurrentTime(this.value)}else t.setOptions(n);return 0}"string"!==e.type(n)&&(!_.lazyInit||_.open||_.inline?S(e(this)):k(e(this)))})}}(jQuery),Date.parseFunctions={count:0},Date.parseRegexes=[],Date.formatFunctions={count:0},Date.prototype.dateFormat=function(e){if("unixtime"==e)return parseInt(this.getTime()/1e3);null==Date.formatFunctions[e]&&Date.createNewFormat(e);var t=Date.formatFunctions[e];return this[t]()},Date.createNewFormat=function(format){var funcName="format"+Date.formatFunctions.count++;Date.formatFunctions[format]=funcName;for(var code="Date.prototype."+funcName+" = function() {return ",special=!1,ch="",i=0;i<format.length;++i)ch=format.charAt(i),special||"\\"!=ch?special?(special=!1,code+="'"+String.escape(ch)+"' + "):code+=Date.getFormatCode(ch):special=!0;eval(code.substring(0,code.length-3)+";}")},Date.getFormatCode=function(e){switch(e){case"d":return"String.leftPad(this.getDate(), 2, '0') + ";case"D":return"Date.dayNames[this.getDay()].substring(0, 3) + ";case"j":return"this.getDate() + ";case"l":return"Date.dayNames[this.getDay()] + ";case"S":return"this.getSuffix() + ";case"w":return"this.getDay() + ";case"z":return"this.getDayOfYear() + ";case"W":return"this.getWeekOfYear() + ";case"F":return"Date.monthNames[this.getMonth()] + ";case"m":return"String.leftPad(this.getMonth() + 1, 2, '0') + ";case"M":return"Date.monthNames[this.getMonth()].substring(0, 3) + ";case"n":return"(this.getMonth() + 1) + ";case"t":return"this.getDaysInMonth() + ";case"L":return"(this.isLeapYear() ? 1 : 0) + ";case"Y":return"this.getFullYear() + ";case"y":return"('' + this.getFullYear()).substring(2, 4) + ";case"a":return"(this.getHours() < 12 ? 'am' : 'pm') + ";case"A":return"(this.getHours() < 12 ? 'AM' : 'PM') + ";case"g":return"((this.getHours() %12) ? this.getHours() % 12 : 12) + ";case"G":return"this.getHours() + ";case"h":return"String.leftPad((this.getHours() %12) ? this.getHours() % 12 : 12, 2, '0') + ";case"H":return"String.leftPad(this.getHours(), 2, '0') + ";case"i":return"String.leftPad(this.getMinutes(), 2, '0') + ";case"s":return"String.leftPad(this.getSeconds(), 2, '0') + ";case"O":return"this.getGMTOffset() + ";case"T":return"this.getTimezone() + ";case"Z":return"(this.getTimezoneOffset() * -60) + ";default:return"'"+String.escape(e)+"' + "}},Date.parseDate=function(e,t){if("unixtime"==t)return new Date(isNaN(parseInt(e))?0:1e3*parseInt(e));null==Date.parseFunctions[t]&&Date.createParser(t);var n=Date.parseFunctions[t];return Date[n](e)},Date.createParser=function(format){var funcName="parse"+Date.parseFunctions.count++,regexNum=Date.parseRegexes.length,currentGroup=1;Date.parseFunctions[format]=funcName;for(var code="Date."+funcName+" = function(input) {\nvar y = -1, m = -1, d = -1, h = -1, i = -1, s = -1, z = -1;\nvar d = new Date();\ny = d.getFullYear();\nm = d.getMonth();\nd = d.getDate();\nvar results = input.match(Date.parseRegexes["+regexNum+"]);\nif (results && results.length > 0) {",regex="",special=!1,ch="",i=0;i<format.length;++i)ch=format.charAt(i),special||"\\"!=ch?special?(special=!1,regex+=String.escape(ch)):(obj=Date.formatCodeToRegex(ch,currentGroup),currentGroup+=obj.g,regex+=obj.s,obj.g&&obj.c&&(code+=obj.c)):special=!0;code+="if (y > 0 && z > 0){\nvar doyDate = new Date(y,0);\ndoyDate.setDate(z);\nm = doyDate.getMonth();\nd = doyDate.getDate();\n}",code+="if (y > 0 && m >= 0 && d > 0 && h >= 0 && i >= 0 && s >= 0)\n{return new Date(y, m, d, h, i, s);}\nelse if (y > 0 && m >= 0 && d > 0 && h >= 0 && i >= 0)\n{return new Date(y, m, d, h, i);}\nelse if (y > 0 && m >= 0 && d > 0 && h >= 0)\n{return new Date(y, m, d, h);}\nelse if (y > 0 && m >= 0 && d > 0)\n{return new Date(y, m, d);}\nelse if (y > 0 && m >= 0)\n{return new Date(y, m);}\nelse if (y > 0)\n{return new Date(y);}\n}return null;}",Date.parseRegexes[regexNum]=new RegExp("^"+regex+"$"),eval(code)},Date.formatCodeToRegex=function(e,t){switch(e){case"D":return{g:0,c:null,s:"(?:Sun|Mon|Tue|Wed|Thu|Fri|Sat)"};case"j":case"d":return{g:1,c:"d = parseInt(results["+t+"], 10);\n",s:"(\\d{1,2})"};case"l":return{g:0,c:null,s:"(?:"+Date.dayNames.join("|")+")"};case"S":return{g:0,c:null,s:"(?:st|nd|rd|th)"};case"w":return{g:0,c:null,s:"\\d"};case"z":return{g:1,c:"z = parseInt(results["+t+"], 10);\n",s:"(\\d{1,3})"};case"W":return{g:0,c:null,s:"(?:\\d{2})"};case"F":return{g:1,c:"m = parseInt(Date.monthNumbers[results["+t+"].substring(0, 3)], 10);\n",s:"("+Date.monthNames.join("|")+")"};case"M":return{g:1,c:"m = parseInt(Date.monthNumbers[results["+t+"]], 10);\n",s:"(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)"};case"n":case"m":return{g:1,c:"m = parseInt(results["+t+"], 10) - 1;\n",s:"(\\d{1,2})"};case"t":return{g:0,c:null,s:"\\d{1,2}"};case"L":return{g:0,c:null,s:"(?:1|0)"};case"Y":return{g:1,c:"y = parseInt(results["+t+"], 10);\n",s:"(\\d{4})"};case"y":return{g:1,c:"var ty = parseInt(results["+t+"], 10);\ny = ty > Date.y2kYear ? 1900 + ty : 2000 + ty;\n",s:"(\\d{1,2})"};case"a":return{g:1,c:"if (results["+t+"] == 'am') {\nif (h == 12) { h = 0; }\n} else { if (h < 12) { h += 12; }}",s:"(am|pm)"};case"A":return{g:1,c:"if (results["+t+"] == 'AM') {\nif (h == 12) { h = 0; }\n} else { if (h < 12) { h += 12; }}",s:"(AM|PM)"};case"g":case"G":case"h":case"H":return{g:1,c:"h = parseInt(results["+t+"], 10);\n",s:"(\\d{1,2})"};case"i":return{g:1,c:"i = parseInt(results["+t+"], 10);\n",s:"(\\d{2})"};case"s":return{g:1,c:"s = parseInt(results["+t+"], 10);\n",s:"(\\d{2})"};case"O":return{g:0,c:null,s:"[+-]\\d{4}"};case"T":return{g:0,c:null,s:"[A-Z]{3}"};case"Z":return{g:0,c:null,s:"[+-]\\d{1,5}"};default:return{g:0,c:null,s:String.escape(e)}}},Date.prototype.getTimezone=function(){return this.toString().replace(/^.*? ([A-Z]{3}) [0-9]{4}.*$/,"$1").replace(/^.*?\(([A-Z])[a-z]+ ([A-Z])[a-z]+ ([A-Z])[a-z]+\)$/,"$1$2$3")},Date.prototype.getGMTOffset=function(){return(this.getTimezoneOffset()>0?"-":"+")+String.leftPad(Math.floor(Math.abs(this.getTimezoneOffset())/60),2,"0")+String.leftPad(Math.abs(this.getTimezoneOffset())%60,2,"0")},Date.prototype.getDayOfYear=function(){var e=0;Date.daysInMonth[1]=this.isLeapYear()?29:28;for(var t=0;t<this.getMonth();++t)e+=Date.daysInMonth[t];return e+this.getDate()},Date.prototype.getWeekOfYear=function(){var e=this.getDayOfYear()+(4-this.getDay()),t=new Date(this.getFullYear(),0,1),n=7-t.getDay()+4;return String.leftPad(Math.ceil((e-n)/7)+1,2,"0")},Date.prototype.isLeapYear=function(){var e=this.getFullYear();return 0==(3&e)&&(e%100||e%400==0&&e)},Date.prototype.getFirstDayOfMonth=function(){var e=(this.getDay()-(this.getDate()-1))%7;return e<0?e+7:e},Date.prototype.getLastDayOfMonth=function(){var e=(this.getDay()+(Date.daysInMonth[this.getMonth()]-this.getDate()))%7;return e<0?e+7:e},Date.prototype.getDaysInMonth=function(){return Date.daysInMonth[1]=this.isLeapYear()?29:28,Date.daysInMonth[this.getMonth()]},Date.prototype.getSuffix=function(){switch(this.getDate()){case 1:case 21:case 31:return"st";case 2:case 22:return"nd";case 3:case 23:return"rd";default:return"th"}},String.escape=function(e){return e.replace(/('|\\)/g,"\\$1")},String.leftPad=function(e,t,n){var a=new String(e);for(null==n&&(n=" ");a.length<t;)a=n+a;return a},Date.daysInMonth=[31,28,31,30,31,30,31,31,30,31,30,31],Date.monthNames=["January","February","March","April","May","June","July","August","September","October","November","December"],Date.dayNames=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],Date.y2kYear=50,Date.monthNumbers={Jan:0,Feb:1,Mar:2,
Apr:3,May:4,Jun:5,Jul:6,Aug:7,Sep:8,Oct:9,Nov:10,Dec:11},Date.patterns={ISO8601LongPattern:"Y-m-d H:i:s",ISO8601ShortPattern:"Y-m-d",ShortDatePattern:"n/j/Y",LongDatePattern:"l, F d, Y",FullDateTimePattern:"l, F d, Y g:i:s A",MonthDayPattern:"F d",ShortTimePattern:"g:i A",LongTimePattern:"g:i:s A",SortableDateTimePattern:"Y-m-d\\TH:i:s",UniversalSortableDateTimePattern:"Y-m-d H:i:sO",YearMonthPattern:"F, Y"},function(e){"function"==typeof define&&define.amd?define(["jquery.flot.min"],e):"object"==typeof exports?module.exports=e:e(jQuery)}(function(e){function t(t){var r,o=t||window.event,s=[].slice.call(arguments,1),i=0,d=0,u=0,c=0,l=0;return t=e.event.fix(o),t.type="mousewheel",o.wheelDelta&&(i=o.wheelDelta),o.detail&&(i=o.detail*-1),o.deltaY&&(u=o.deltaY*-1,i=u),o.deltaX&&(d=o.deltaX,i=d*-1),void 0!==o.wheelDeltaY&&(u=o.wheelDeltaY),void 0!==o.wheelDeltaX&&(d=o.wheelDeltaX*-1),c=Math.abs(i),(!n||c<n)&&(n=c),l=Math.max(Math.abs(u),Math.abs(d)),(!a||l<a)&&(a=l),r=i>0?"floor":"ceil",i=Math[r](i/n),d=Math[r](d/a),u=Math[r](u/a),s.unshift(t,i,d,u),(e.event.dispatch||e.event.handle).apply(this,s)}var n,a,r=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],o="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"];if(e.event.fixHooks)for(var s=r.length;s;)e.event.fixHooks[r[--s]]=e.event.mouseHooks;e.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var e=o.length;e;)this.addEventListener(o[--e],t,!1);else this.onmousewheel=t},teardown:function(){if(this.removeEventListener)for(var e=o.length;e;)this.removeEventListener(o[--e],t,!1);else this.onmousewheel=null}},e.fn.extend({mousewheel:function(e){return e?this.bind("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.unbind("mousewheel",e)}})});
function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,i=Array(e.length);t<e.length;t++)i[t]=e[t];return i}return Array.from(e)}var _slice=Array.prototype.slice,_slicedToArray=function(){function e(e,t){var i=[],n=!0,r=!1,s=void 0;try{for(var a,o=e[Symbol.iterator]();!(n=(a=o.next()).done)&&(i.push(a.value),!t||i.length!==t);n=!0);}catch(l){r=!0,s=l}finally{try{!n&&o["return"]&&o["return"]()}finally{if(r)throw s}}return i}return function(t,i){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e};!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],t):e.parsley=t(e.jQuery)}(this,function(e){"use strict";function t(e,t){return e.parsleyAdaptedCallback||(e.parsleyAdaptedCallback=function(){var i=Array.prototype.slice.call(arguments,0);i.unshift(this),e.apply(t||T,i)}),e.parsleyAdaptedCallback}function i(e){return 0===e.lastIndexOf(D,0)?e.substr(D.length):e}function n(){var t=this,i=window||global;_extends(this,{isNativeEvent:function(e){return e.originalEvent&&e.originalEvent.isTrusted!==!1},fakeInputEvent:function(i){t.isNativeEvent(i)&&e(i.target).trigger("input")},misbehaves:function(i){t.isNativeEvent(i)&&(t.behavesOk(i),e(document).on("change.inputevent",i.data.selector,t.fakeInputEvent),t.fakeInputEvent(i))},behavesOk:function(i){t.isNativeEvent(i)&&e(document).off("input.inputevent",i.data.selector,t.behavesOk).off("change.inputevent",i.data.selector,t.misbehaves)},install:function(){if(!i.inputEventPatched){i.inputEventPatched="0.0.3";for(var n=["select",'input[type="checkbox"]','input[type="radio"]','input[type="file"]'],r=0;r<n.length;r++){var s=n[r];e(document).on("input.inputevent",s,{selector:s},t.behavesOk).on("change.inputevent",s,{selector:s},t.misbehaves)}}},uninstall:function(){delete i.inputEventPatched,e(document).off(".inputevent")}})}var r=1,s={},a={attr:function(e,t,i){var n,r,s,a=new RegExp("^"+t,"i");if("undefined"==typeof i)i={};else for(n in i)i.hasOwnProperty(n)&&delete i[n];if(!e)return i;for(s=e.attributes,n=s.length;n--;)r=s[n],r&&r.specified&&a.test(r.name)&&(i[this.camelize(r.name.slice(t.length))]=this.deserializeValue(r.value));return i},checkAttr:function(e,t,i){return e.hasAttribute(t+i)},setAttr:function(e,t,i,n){e.setAttribute(this.dasherize(t+i),String(n))},generateID:function(){return""+r++},deserializeValue:function(t){var i;try{return t?"true"==t||"false"!=t&&("null"==t?null:isNaN(i=Number(t))?/^[\[\{]/.test(t)?e.parseJSON(t):t:i):t}catch(n){return t}},camelize:function(e){return e.replace(/-+(.)?/g,function(e,t){return t?t.toUpperCase():""})},dasherize:function(e){return e.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()},warn:function(){var e;window.console&&"function"==typeof window.console.warn&&(e=window.console).warn.apply(e,arguments)},warnOnce:function(e){s[e]||(s[e]=!0,this.warn.apply(this,arguments))},_resetWarnings:function(){s={}},trimString:function(e){return e.replace(/^\s+|\s+$/g,"")},parse:{date:function S(e){var t=e.match(/^(\d{4,})-(\d\d)-(\d\d)$/);if(!t)return null;var i=t.map(function(e){return parseInt(e,10)}),n=_slicedToArray(i,4),r=(n[0],n[1]),s=n[2],a=n[3],S=new Date(r,s-1,a);return S.getFullYear()!==r||S.getMonth()+1!==s||S.getDate()!==a?null:S},string:function(e){return e},integer:function(e){return isNaN(e)?null:parseInt(e,10)},number:function(e){if(isNaN(e))throw null;return parseFloat(e)},"boolean":function(e){return!/^\s*false\s*$/i.test(e)},object:function(e){return a.deserializeValue(e)},regexp:function(e){var t="";return/^\/.*\/(?:[gimy]*)$/.test(e)?(t=e.replace(/.*\/([gimy]*)$/,"$1"),e=e.replace(new RegExp("^/(.*?)/"+t+"$"),"$1")):e="^"+e+"$",new RegExp(e,t)}},parseRequirement:function(e,t){var i=this.parse[e||"string"];if(!i)throw'Unknown requirement specification: "'+e+'"';var n=i(t);if(null===n)throw"Requirement is not a "+e+': "'+t+'"';return n},namespaceEvents:function(t,i){return t=this.trimString(t||"").split(/\s+/),t[0]?e.map(t,function(e){return e+"."+i}).join(" "):""},difference:function(t,i){var n=[];return e.each(t,function(e,t){i.indexOf(t)==-1&&n.push(t)}),n},all:function(t){return e.when.apply(e,_toConsumableArray(t).concat([42,42]))},objectCreate:Object.create||function(){var e=function(){};return function(t){if(arguments.length>1)throw Error("Second argument not supported");if("object"!=typeof t)throw TypeError("Argument must be an object");e.prototype=t;var i=new e;return e.prototype=null,i}}(),_SubmitSelector:'input[type="submit"], button:submit'},o={namespace:"data-parsley-",inputs:"input, textarea, select",excluded:"input[type=button], input[type=submit], input[type=reset], input[type=hidden]",priorityEnabled:!0,multiple:null,group:null,uiEnabled:!0,validationThreshold:3,focus:"first",trigger:!1,triggerAfterFailure:"input",errorClass:"parsley-error",successClass:"parsley-success",classHandler:function(e){},errorsContainer:function(e){},errorsWrapper:'<ul class="parsley-errors-list"></ul>',errorTemplate:"<li></li>"},l=function(){this.__id__=a.generateID()};l.prototype={asyncSupport:!0,_pipeAccordingToValidationResult:function(){var t=this,i=function(){var i=e.Deferred();return!0!==t.validationResult&&i.reject(),i.resolve().promise()};return[i,i]},actualizeOptions:function(){return a.attr(this.element,this.options.namespace,this.domOptions),this.parent&&this.parent.actualizeOptions&&this.parent.actualizeOptions(),this},_resetOptions:function(e){this.domOptions=a.objectCreate(this.parent.options),this.options=a.objectCreate(this.domOptions);for(var t in e)e.hasOwnProperty(t)&&(this.options[t]=e[t]);this.actualizeOptions()},_listeners:null,on:function(e,t){this._listeners=this._listeners||{};var i=this._listeners[e]=this._listeners[e]||[];return i.push(t),this},subscribe:function(t,i){e.listenTo(this,t.toLowerCase(),i)},off:function(e,t){var i=this._listeners&&this._listeners[e];if(i)if(t)for(var n=i.length;n--;)i[n]===t&&i.splice(n,1);else delete this._listeners[e];return this},unsubscribe:function(t,i){e.unsubscribeTo(this,t.toLowerCase())},trigger:function(e,t,i){t=t||this;var n,r=this._listeners&&this._listeners[e];if(r)for(var s=r.length;s--;)if(n=r[s].call(t,t,i),n===!1)return n;return!this.parent||this.parent.trigger(e,t,i)},asyncIsValid:function(e,t){return a.warnOnce("asyncIsValid is deprecated; please use whenValid instead"),this.whenValid({group:e,force:t})},_findRelated:function(){return this.options.multiple?e(this.parent.element.querySelectorAll("["+this.options.namespace+'multiple="'+this.options.multiple+'"]')):this.$element}};var u=function(e,t){var i=e.match(/^\s*\[(.*)\]\s*$/);if(!i)throw'Requirement is not an array: "'+e+'"';var n=i[1].split(",").map(a.trimString);if(n.length!==t)throw"Requirement has "+n.length+" values when "+t+" are needed";return n},d=function(e,t,i){var n=null,r={};for(var s in e)if(s){var o=i(s);"string"==typeof o&&(o=a.parseRequirement(e[s],o)),r[s]=o}else n=a.parseRequirement(e[s],t);return[n,r]},h=function(t){e.extend(!0,this,t)};h.prototype={validate:function(e,t){if(this.fn)return arguments.length>3&&(t=[].slice.call(arguments,1,-1)),this.fn(e,t);if(Array.isArray(e)){if(!this.validateMultiple)throw"Validator `"+this.name+"` does not handle multiple values";return this.validateMultiple.apply(this,arguments)}var i=arguments[arguments.length-1];if(this.validateDate&&i._isDateInput())return arguments[0]=a.parse.date(arguments[0]),null!==arguments[0]&&this.validateDate.apply(this,arguments);if(this.validateNumber)return!isNaN(e)&&(arguments[0]=parseFloat(arguments[0]),this.validateNumber.apply(this,arguments));if(this.validateString)return this.validateString.apply(this,arguments);throw"Validator `"+this.name+"` only handles multiple values"},parseRequirements:function(t,i){if("string"!=typeof t)return Array.isArray(t)?t:[t];var n=this.requirementType;if(Array.isArray(n)){for(var r=u(t,n.length),s=0;s<r.length;s++)r[s]=a.parseRequirement(n[s],r[s]);return r}return e.isPlainObject(n)?d(n,t,i):[a.parseRequirement(n,t)]},requirementType:"string",priority:2};var p=function(e,t){this.__class__="ValidatorRegistry",this.locale="en",this.init(e||{},t||{})},c={email:/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i,number:/^-?(\d*\.)?\d+(e[-+]?\d+)?$/i,integer:/^-?\d+$/,digits:/^\d+$/,alphanum:/^\w+$/i,date:{test:function(e){return null!==a.parse.date(e)}},url:new RegExp("^(?:(?:https?|ftp)://)?(?:\\S+(?::\\S*)?@)?(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:/\\S*)?$","i")};c.range=c.number;var f=function(e){var t=(""+e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);return t?Math.max(0,(t[1]?t[1].length:0)-(t[2]?+t[2]:0)):0},m=function(e,t){return t.map(a.parse[e])},g=function(e,t){return function(i){for(var n=arguments.length,r=Array(n>1?n-1:0),s=1;s<n;s++)r[s-1]=arguments[s];return r.pop(),t.apply(void 0,[i].concat(_toConsumableArray(m(e,r))))}},v=function(e){return{validateDate:g("date",e),validateNumber:g("number",e),requirementType:e.length<=2?"string":["string","string"],priority:30}};p.prototype={init:function(e,t){this.catalog=t,this.validators=_extends({},this.validators);for(var i in e)this.addValidator(i,e[i].fn,e[i].priority);window.Parsley.trigger("parsley:validator:init")},setLocale:function(e){if("undefined"==typeof this.catalog[e])throw new Error(e+" is not available in the catalog");return this.locale=e,this},addCatalog:function(e,t,i){return"object"==typeof t&&(this.catalog[e]=t),!0===i?this.setLocale(e):this},addMessage:function(e,t,i){return"undefined"==typeof this.catalog[e]&&(this.catalog[e]={}),this.catalog[e][t]=i,this},addMessages:function(e,t){for(var i in t)this.addMessage(e,i,t[i]);return this},addValidator:function(e,t,i){if(this.validators[e])a.warn('Validator "'+e+'" is already defined.');else if(o.hasOwnProperty(e))return void a.warn('"'+e+'" is a restricted keyword and is not a valid validator name.');return this._setValidator.apply(this,arguments)},updateValidator:function(e,t,i){return this.validators[e]?this._setValidator.apply(this,arguments):(a.warn('Validator "'+e+'" is not already defined.'),this.addValidator.apply(this,arguments))},removeValidator:function(e){return this.validators[e]||a.warn('Validator "'+e+'" is not defined.'),delete this.validators[e],this},_setValidator:function(e,t,i){"object"!=typeof t&&(t={fn:t,priority:i}),t.validate||(t=new h(t)),this.validators[e]=t;for(var n in t.messages||{})this.addMessage(n,e,t.messages[n]);return this},getErrorMessage:function(e){var t;if("type"===e.name){var i=this.catalog[this.locale][e.name]||{};t=i[e.requirements]}else t=this.formatMessage(this.catalog[this.locale][e.name],e.requirements);return t||this.catalog[this.locale].defaultMessage||this.catalog.en.defaultMessage},formatMessage:function(e,t){if("object"==typeof t){for(var i in t)e=this.formatMessage(e,t[i]);return e}return"string"==typeof e?e.replace(/%s/i,t):""},validators:{notblank:{validateString:function(e){return/\S/.test(e)},priority:2},required:{validateMultiple:function(e){return e.length>0},validateString:function(e){return/\S/.test(e)},priority:512},type:{validateString:function(e,t){var i=arguments.length<=2||void 0===arguments[2]?{}:arguments[2],n=i.step,r=void 0===n?"any":n,s=i.base,a=void 0===s?0:s,o=c[t];if(!o)throw new Error("validator type `"+t+"` is not supported");if(!o.test(e))return!1;if("number"===t&&!/^any$/i.test(r||"")){var l=Number(e),u=Math.max(f(r),f(a));if(f(l)>u)return!1;var d=function(e){return Math.round(e*Math.pow(10,u))};if((d(l)-d(a))%d(r)!=0)return!1}return!0},requirementType:{"":"string",step:"string",base:"number"},priority:256},pattern:{validateString:function(e,t){return t.test(e)},requirementType:"regexp",priority:64},minlength:{validateString:function(e,t){return e.length>=t},requirementType:"integer",priority:30},maxlength:{validateString:function(e,t){return e.length<=t},requirementType:"integer",priority:30},length:{validateString:function(e,t,i){return e.length>=t&&e.length<=i},requirementType:["integer","integer"],priority:30},mincheck:{validateMultiple:function(e,t){return e.length>=t},requirementType:"integer",priority:30},maxcheck:{validateMultiple:function(e,t){return e.length<=t},requirementType:"integer",priority:30},check:{validateMultiple:function(e,t,i){return e.length>=t&&e.length<=i},requirementType:["integer","integer"],priority:30},min:v(function(e,t){return e>=t}),max:v(function(e,t){return e<=t}),range:v(function(e,t,i){return e>=t&&e<=i}),equalto:{validateString:function(t,i){var n=e(i);return n.length?t===n.val():t===i},priority:256}}};var y={},_=function k(e,t,i){for(var n=[],r=[],s=0;s<e.length;s++){for(var a=!1,o=0;o<t.length;o++)if(e[s].assert.name===t[o].assert.name){a=!0;break}a?r.push(e[s]):n.push(e[s])}return{kept:r,added:n,removed:i?[]:k(t,e,!0).added}};y.Form={_actualizeTriggers:function(){var e=this;this.$element.on("submit.Parsley",function(t){e.onSubmitValidate(t)}),this.$element.on("click.Parsley",a._SubmitSelector,function(t){e.onSubmitButton(t)}),!1!==this.options.uiEnabled&&this.element.setAttribute("novalidate","")},focus:function(){if(this._focusedField=null,!0===this.validationResult||"none"===this.options.focus)return null;for(var e=0;e<this.fields.length;e++){var t=this.fields[e];if(!0!==t.validationResult&&t.validationResult.length>0&&"undefined"==typeof t.options.noFocus&&(this._focusedField=t.$element,"first"===this.options.focus))break}return null===this._focusedField?null:this._focusedField.focus()},_destroyUI:function(){this.$element.off(".Parsley")}},y.Field={_reflowUI:function(){if(this._buildUI(),this._ui){var e=_(this.validationResult,this._ui.lastValidationResult);this._ui.lastValidationResult=this.validationResult,this._manageStatusClass(),this._manageErrorsMessages(e),this._actualizeTriggers(),!e.kept.length&&!e.added.length||this._failedOnce||(this._failedOnce=!0,this._actualizeTriggers())}},getErrorsMessages:function(){if(!0===this.validationResult)return[];for(var e=[],t=0;t<this.validationResult.length;t++)e.push(this.validationResult[t].errorMessage||this._getErrorMessage(this.validationResult[t].assert));return e},addError:function(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],i=t.message,n=t.assert,r=t.updateClass,s=void 0===r||r;this._buildUI(),this._addError(e,{message:i,assert:n}),s&&this._errorClass()},updateError:function(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],i=t.message,n=t.assert,r=t.updateClass,s=void 0===r||r;this._buildUI(),this._updateError(e,{message:i,assert:n}),s&&this._errorClass()},removeError:function(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],i=t.updateClass,n=void 0===i||i;this._buildUI(),this._removeError(e),n&&this._manageStatusClass()},_manageStatusClass:function(){this.hasConstraints()&&this.needsValidation()&&!0===this.validationResult?this._successClass():this.validationResult.length>0?this._errorClass():this._resetClass()},_manageErrorsMessages:function(t){if("undefined"==typeof this.options.errorsMessagesDisabled){if("undefined"!=typeof this.options.errorMessage)return t.added.length||t.kept.length?(this._insertErrorWrapper(),0===this._ui.$errorsWrapper.find(".parsley-custom-error-message").length&&this._ui.$errorsWrapper.append(e(this.options.errorTemplate).addClass("parsley-custom-error-message")),this._ui.$errorsWrapper.addClass("filled").find(".parsley-custom-error-message").html(this.options.errorMessage)):this._ui.$errorsWrapper.removeClass("filled").find(".parsley-custom-error-message").remove();for(var i=0;i<t.removed.length;i++)this._removeError(t.removed[i].assert.name);for(i=0;i<t.added.length;i++)this._addError(t.added[i].assert.name,{message:t.added[i].errorMessage,assert:t.added[i].assert});for(i=0;i<t.kept.length;i++)this._updateError(t.kept[i].assert.name,{message:t.kept[i].errorMessage,assert:t.kept[i].assert})}},_addError:function(t,i){var n=i.message,r=i.assert;this._insertErrorWrapper(),this._ui.$errorsWrapper.addClass("filled").append(e(this.options.errorTemplate).addClass("parsley-"+t).html(n||this._getErrorMessage(r)))},_updateError:function(e,t){var i=t.message,n=t.assert;this._ui.$errorsWrapper.addClass("filled").find(".parsley-"+e).html(i||this._getErrorMessage(n))},_removeError:function(e){this._ui.$errorsWrapper.removeClass("filled").find(".parsley-"+e).remove()},_getErrorMessage:function(e){var t=e.name+"Message";return"undefined"!=typeof this.options[t]?window.Parsley.formatMessage(this.options[t],e.requirements):window.Parsley.getErrorMessage(e)},_buildUI:function(){if(!this._ui&&!1!==this.options.uiEnabled){var t={};this.element.setAttribute(this.options.namespace+"id",this.__id__),t.$errorClassHandler=this._manageClassHandler(),t.errorsWrapperId="parsley-id-"+(this.options.multiple?"multiple-"+this.options.multiple:this.__id__),t.$errorsWrapper=e(this.options.errorsWrapper).attr("id",t.errorsWrapperId),t.lastValidationResult=[],t.validationInformationVisible=!1,this._ui=t}},_manageClassHandler:function(){if("string"==typeof this.options.classHandler)return 0===e(this.options.classHandler).length&&ParsleyUtils.warn("No elements found that match the selector `"+this.options.classHandler+"` set in options.classHandler or data-parsley-class-handler"),e(this.options.classHandler);if("function"==typeof this.options.classHandler)var t=this.options.classHandler.call(this,this);return"undefined"!=typeof t&&t.length?t:this._inputHolder()},_inputHolder:function(){return this.options.multiple&&"SELECT"!==this.element.nodeName?this.$element.parent():this.$element},_insertErrorWrapper:function(){var t;if(0!==this._ui.$errorsWrapper.parent().length)return this._ui.$errorsWrapper.parent();if("string"==typeof this.options.errorsContainer){if(e(this.options.errorsContainer).length)return e(this.options.errorsContainer).append(this._ui.$errorsWrapper);a.warn("The errors container `"+this.options.errorsContainer+"` does not exist in DOM")}else"function"==typeof this.options.errorsContainer&&(t=this.options.errorsContainer.call(this,this));return"undefined"!=typeof t&&t.length?t.append(this._ui.$errorsWrapper):this._inputHolder().after(this._ui.$errorsWrapper)},_actualizeTriggers:function(){var e,t=this,i=this._findRelated();i.off(".Parsley"),this._failedOnce?i.on(a.namespaceEvents(this.options.triggerAfterFailure,"Parsley"),function(){t._validateIfNeeded()}):(e=a.namespaceEvents(this.options.trigger,"Parsley"))&&i.on(e,function(e){t._validateIfNeeded(e)})},_validateIfNeeded:function(e){var t=this;e&&/key|input/.test(e.type)&&(!this._ui||!this._ui.validationInformationVisible)&&this.getValue().length<=this.options.validationThreshold||(this.options.debounce?(window.clearTimeout(this._debounced),this._debounced=window.setTimeout(function(){return t.validate()},this.options.debounce)):this.validate())},_resetUI:function(){this._failedOnce=!1,this._actualizeTriggers(),"undefined"!=typeof this._ui&&(this._ui.$errorsWrapper.removeClass("filled").children().remove(),this._resetClass(),this._ui.lastValidationResult=[],this._ui.validationInformationVisible=!1)},_destroyUI:function(){this._resetUI(),"undefined"!=typeof this._ui&&this._ui.$errorsWrapper.remove(),delete this._ui},_successClass:function(){this._ui.validationInformationVisible=!0,this._ui.$errorClassHandler.removeClass(this.options.errorClass).addClass(this.options.successClass)},_errorClass:function(){this._ui.validationInformationVisible=!0,this._ui.$errorClassHandler.removeClass(this.options.successClass).addClass(this.options.errorClass)},_resetClass:function(){this._ui.$errorClassHandler.removeClass(this.options.successClass).removeClass(this.options.errorClass)}};var w=function(t,i,n){this.__class__="Form",this.element=t,this.$element=e(t),this.domOptions=i,this.options=n,this.parent=window.Parsley,this.fields=[],this.validationResult=null},b={pending:null,resolved:!0,rejected:!1};w.prototype={onSubmitValidate:function(e){var t=this;if(!0!==e.parsley){var i=this._submitSource||this.$element.find(a._SubmitSelector)[0];if(this._submitSource=null,this.$element.find(".parsley-synthetic-submit-button").prop("disabled",!0),!i||null===i.getAttribute("formnovalidate")){window.Parsley._remoteCache={};var n=this.whenValidate({event:e});"resolved"===n.state()&&!1!==this._trigger("submit")||(e.stopImmediatePropagation(),e.preventDefault(),"pending"===n.state()&&n.done(function(){t._submit(i)}))}}},onSubmitButton:function(e){this._submitSource=e.currentTarget},_submit:function(t){if(!1!==this._trigger("submit")){if(t){var i=this.$element.find(".parsley-synthetic-submit-button").prop("disabled",!1);0===i.length&&(i=e('<input class="parsley-synthetic-submit-button" type="hidden">').appendTo(this.$element)),i.attr({name:t.getAttribute("name"),value:t.getAttribute("value")})}this.$element.trigger(_extends(e.Event("submit"),{parsley:!0}))}},validate:function(t){if(arguments.length>=1&&!e.isPlainObject(t)){a.warnOnce("Calling validate on a parsley form without passing arguments as an object is deprecated.");var i=_slice.call(arguments),n=i[0],r=i[1],s=i[2];t={group:n,force:r,event:s}}return b[this.whenValidate(t).state()]},whenValidate:function(){var t,i=this,n=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],r=n.group,s=n.force,o=n.event;this.submitEvent=o,o&&(this.submitEvent=_extends({},o,{preventDefault:function(){a.warnOnce("Using `this.submitEvent.preventDefault()` is deprecated; instead, call `this.validationResult = false`"),i.validationResult=!1}})),this.validationResult=!0,this._trigger("validate"),this._refreshFields();var l=this._withoutReactualizingFormOptions(function(){return e.map(i.fields,function(e){return e.whenValidate({force:s,group:r})})});return(t=a.all(l).done(function(){i._trigger("success")}).fail(function(){i.validationResult=!1,i.focus(),i._trigger("error")}).always(function(){i._trigger("validated")})).pipe.apply(t,_toConsumableArray(this._pipeAccordingToValidationResult()))},isValid:function(t){if(arguments.length>=1&&!e.isPlainObject(t)){a.warnOnce("Calling isValid on a parsley form without passing arguments as an object is deprecated.");var i=_slice.call(arguments),n=i[0],r=i[1];t={group:n,force:r}}return b[this.whenValid(t).state()]},whenValid:function(){var t=this,i=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],n=i.group,r=i.force;this._refreshFields();var s=this._withoutReactualizingFormOptions(function(){return e.map(t.fields,function(e){return e.whenValid({group:n,force:r})})});return a.all(s)},reset:function(){for(var e=0;e<this.fields.length;e++)this.fields[e].reset();this._trigger("reset")},destroy:function(){this._destroyUI();for(var e=0;e<this.fields.length;e++)this.fields[e].destroy();this.$element.removeData("Parsley"),this._trigger("destroy")},_refreshFields:function(){return this.actualizeOptions()._bindFields()},_bindFields:function(){var t=this,i=this.fields;return this.fields=[],this.fieldsMappedById={},this._withoutReactualizingFormOptions(function(){t.$element.find(t.options.inputs).not(t.options.excluded).each(function(e,i){var n=new window.Parsley.Factory(i,{},t);if(("Field"===n.__class__||"FieldMultiple"===n.__class__)&&!0!==n.options.excluded){var r=n.__class__+"-"+n.__id__;"undefined"==typeof t.fieldsMappedById[r]&&(t.fieldsMappedById[r]=n,t.fields.push(n))}}),e.each(a.difference(i,t.fields),function(e,t){t.reset()})}),this},_withoutReactualizingFormOptions:function(e){var t=this.actualizeOptions;this.actualizeOptions=function(){return this};var i=e();return this.actualizeOptions=t,i},_trigger:function(e){return this.trigger("form:"+e)}};var F=function(e,t,i,n,r){var s=window.Parsley._validatorRegistry.validators[t],a=new h(s);n=n||e.options[t+"Priority"]||a.priority,r=!0===r,_extends(this,{validator:a,name:t,requirements:i,priority:n,isDomConstraint:r}),this._parseRequirements(e.options)},C=function(e){var t=e[0].toUpperCase();return t+e.slice(1)};F.prototype={validate:function(e,t){var i;return(i=this.validator).validate.apply(i,[e].concat(_toConsumableArray(this.requirementList),[t]))},_parseRequirements:function(e){var t=this;this.requirementList=this.validator.parseRequirements(this.requirements,function(i){return e[t.name+C(i)]})}};var E=function(t,i,n,r){this.__class__="Field",this.element=t,this.$element=e(t),"undefined"!=typeof r&&(this.parent=r),this.options=n,this.domOptions=i,this.constraints=[],this.constraintsByName={},this.validationResult=!0,this._bindConstraints()},A={pending:null,resolved:!0,rejected:!1};E.prototype={validate:function(t){arguments.length>=1&&!e.isPlainObject(t)&&(a.warnOnce("Calling validate on a parsley field without passing arguments as an object is deprecated."),t={options:t});var i=this.whenValidate(t);if(!i)return!0;switch(i.state()){case"pending":return null;case"resolved":return!0;case"rejected":return this.validationResult}},whenValidate:function(){var e,t=this,i=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],n=i.force,r=i.group;if(this.refreshConstraints(),!r||this._isInGroup(r))return this.value=this.getValue(),this._trigger("validate"),(e=this.whenValid({force:n,value:this.value,_refreshed:!0}).always(function(){t._reflowUI()}).done(function(){t._trigger("success")}).fail(function(){t._trigger("error")}).always(function(){t._trigger("validated")})).pipe.apply(e,_toConsumableArray(this._pipeAccordingToValidationResult()))},hasConstraints:function(){return 0!==this.constraints.length},needsValidation:function(e){return"undefined"==typeof e&&(e=this.getValue()),!(!e.length&&!this._isRequired()&&"undefined"==typeof this.options.validateIfEmpty)},_isInGroup:function(t){return Array.isArray(this.options.group)?-1!==e.inArray(t,this.options.group):this.options.group===t},isValid:function(t){if(arguments.length>=1&&!e.isPlainObject(t)){a.warnOnce("Calling isValid on a parsley field without passing arguments as an object is deprecated.");var i=_slice.call(arguments),n=i[0],r=i[1];t={force:n,value:r}}var s=this.whenValid(t);return!s||A[s.state()]},whenValid:function(){var t=this,i=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],n=i.force,r=void 0!==n&&n,s=i.value,o=i.group,l=i._refreshed;if(l||this.refreshConstraints(),!o||this._isInGroup(o)){if(this.validationResult=!0,!this.hasConstraints())return e.when();if("undefined"!=typeof s&&null!==s||(s=this.getValue()),!this.needsValidation(s)&&!0!==r)return e.when();var u=this._getGroupedConstraints(),d=[];return e.each(u,function(i,n){var r=a.all(e.map(n,function(e){return t._validateConstraint(s,e)}));if(d.push(r),"rejected"===r.state())return!1}),a.all(d)}},_validateConstraint:function(t,i){var n=this,r=i.validate(t,this);return!1===r&&(r=e.Deferred().reject()),a.all([r]).fail(function(e){n.validationResult instanceof Array||(n.validationResult=[]),n.validationResult.push({assert:i,errorMessage:"string"==typeof e&&e})})},getValue:function(){var e;return e="function"==typeof this.options.value?this.options.value(this):"undefined"!=typeof this.options.value?this.options.value:this.$element.val(),"undefined"==typeof e||null===e?"":this._handleWhitespace(e)},reset:function(){return this._resetUI(),this._trigger("reset")},destroy:function(){this._destroyUI(),this.$element.removeData("Parsley"),this.$element.removeData("FieldMultiple"),this._trigger("destroy")},refreshConstraints:function(){return this.actualizeOptions()._bindConstraints()},addConstraint:function(e,t,i,n){if(window.Parsley._validatorRegistry.validators[e]){var r=new F(this,e,t,i,n);"undefined"!==this.constraintsByName[r.name]&&this.removeConstraint(r.name),this.constraints.push(r),this.constraintsByName[r.name]=r}return this},removeConstraint:function(e){for(var t=0;t<this.constraints.length;t++)if(e===this.constraints[t].name){this.constraints.splice(t,1);break}return delete this.constraintsByName[e],this},updateConstraint:function(e,t,i){return this.removeConstraint(e).addConstraint(e,t,i)},_bindConstraints:function(){for(var e=[],t={},i=0;i<this.constraints.length;i++)!1===this.constraints[i].isDomConstraint&&(e.push(this.constraints[i]),t[this.constraints[i].name]=this.constraints[i]);this.constraints=e,this.constraintsByName=t;for(var n in this.options)this.addConstraint(n,this.options[n],void 0,!0);return this._bindHtml5Constraints()},_bindHtml5Constraints:function(){null!==this.element.getAttribute("required")&&this.addConstraint("required",!0,void 0,!0),null!==this.element.getAttribute("pattern")&&this.addConstraint("pattern",this.element.getAttribute("pattern"),void 0,!0);var e=this.element.getAttribute("min"),t=this.element.getAttribute("max");null!==e&&null!==t?this.addConstraint("range",[e,t],void 0,!0):null!==e?this.addConstraint("min",e,void 0,!0):null!==t&&this.addConstraint("max",t,void 0,!0),null!==this.element.getAttribute("minlength")&&null!==this.element.getAttribute("maxlength")?this.addConstraint("length",[this.element.getAttribute("minlength"),this.element.getAttribute("maxlength")],void 0,!0):null!==this.element.getAttribute("minlength")?this.addConstraint("minlength",this.element.getAttribute("minlength"),void 0,!0):null!==this.element.getAttribute("maxlength")&&this.addConstraint("maxlength",this.element.getAttribute("maxlength"),void 0,!0);var i=this.element.type;return"number"===i?this.addConstraint("type",["number",{step:this.element.getAttribute("step")||"1",base:e||this.element.getAttribute("value")}],void 0,!0):/^(email|url|range|date)$/i.test(i)?this.addConstraint("type",i,void 0,!0):this},_isRequired:function(){return"undefined"!=typeof this.constraintsByName.required&&!1!==this.constraintsByName.required.requirements},_trigger:function(e){return this.trigger("field:"+e)},_handleWhitespace:function(e){return!0===this.options.trimValue&&a.warnOnce('data-parsley-trim-value="true" is deprecated, please use data-parsley-whitespace="trim"'),"squish"===this.options.whitespace&&(e=e.replace(/\s{2,}/g," ")),"trim"!==this.options.whitespace&&"squish"!==this.options.whitespace&&!0!==this.options.trimValue||(e=a.trimString(e)),e},_isDateInput:function(){var e=this.constraintsByName.type;return e&&"date"===e.requirements},_getGroupedConstraints:function(){if(!1===this.options.priorityEnabled)return[this.constraints];for(var e=[],t={},i=0;i<this.constraints.length;i++){var n=this.constraints[i].priority;t[n]||e.push(t[n]=[]),t[n].push(this.constraints[i])}return e.sort(function(e,t){return t[0].priority-e[0].priority}),e}};var x=E,$=function(){this.__class__="FieldMultiple"};$.prototype={addElement:function(e){return this.$elements.push(e),this},refreshConstraints:function(){var t;if(this.constraints=[],"SELECT"===this.element.nodeName)return this.actualizeOptions()._bindConstraints(),
this;for(var i=0;i<this.$elements.length;i++)if(e("html").has(this.$elements[i]).length){t=this.$elements[i].data("FieldMultiple").refreshConstraints().constraints;for(var n=0;n<t.length;n++)this.addConstraint(t[n].name,t[n].requirements,t[n].priority,t[n].isDomConstraint)}else this.$elements.splice(i,1);return this},getValue:function(){if("function"==typeof this.options.value)return this.options.value(this);if("undefined"!=typeof this.options.value)return this.options.value;if("INPUT"===this.element.nodeName){if("radio"===this.element.type)return this._findRelated().filter(":checked").val()||"";if("checkbox"===this.element.type){var t=[];return this._findRelated().filter(":checked").each(function(){t.push(e(this).val())}),t}}return"SELECT"===this.element.nodeName&&null===this.$element.val()?[]:this.$element.val()},_init:function(){return this.$elements=[this.$element],this}};var P=function(t,i,n){this.element=t,this.$element=e(t);var r=this.$element.data("Parsley");if(r)return"undefined"!=typeof n&&r.parent===window.Parsley&&(r.parent=n,r._resetOptions(r.options)),"object"==typeof i&&_extends(r.options,i),r;if(!this.$element.length)throw new Error("You must bind Parsley on an existing element.");if("undefined"!=typeof n&&"Form"!==n.__class__)throw new Error("Parent instance must be a Form instance");return this.parent=n||window.Parsley,this.init(i)};P.prototype={init:function(e){return this.__class__="Parsley",this.__version__="2.7.2",this.__id__=a.generateID(),this._resetOptions(e),"FORM"===this.element.nodeName||a.checkAttr(this.element,this.options.namespace,"validate")&&!this.$element.is(this.options.inputs)?this.bind("parsleyForm"):this.isMultiple()?this.handleMultiple():this.bind("parsleyField")},isMultiple:function(){return"radio"===this.element.type||"checkbox"===this.element.type||"SELECT"===this.element.nodeName&&null!==this.element.getAttribute("multiple")},handleMultiple:function(){var t,i,n=this;if(this.options.multiple=this.options.multiple||(t=this.element.getAttribute("name"))||this.element.getAttribute("id"),"SELECT"===this.element.nodeName&&null!==this.element.getAttribute("multiple"))return this.options.multiple=this.options.multiple||this.__id__,this.bind("parsleyFieldMultiple");if(!this.options.multiple)return a.warn("To be bound by Parsley, a radio, a checkbox and a multiple select input must have either a name or a multiple option.",this.$element),this;this.options.multiple=this.options.multiple.replace(/(:|\.|\[|\]|\{|\}|\$)/g,""),t&&e('input[name="'+t+'"]').each(function(e,t){"radio"!==t.type&&"checkbox"!==t.type||t.setAttribute(n.options.namespace+"multiple",n.options.multiple)});for(var r=this._findRelated(),s=0;s<r.length;s++)if(i=e(r.get(s)).data("Parsley"),"undefined"!=typeof i){this.$element.data("FieldMultiple")||i.addElement(this.$element);break}return this.bind("parsleyField",!0),i||this.bind("parsleyFieldMultiple")},bind:function(t,i){var n;switch(t){case"parsleyForm":n=e.extend(new w(this.element,this.domOptions,this.options),new l,window.ParsleyExtend)._bindFields();break;case"parsleyField":n=e.extend(new x(this.element,this.domOptions,this.options,this.parent),new l,window.ParsleyExtend);break;case"parsleyFieldMultiple":n=e.extend(new x(this.element,this.domOptions,this.options,this.parent),new $,new l,window.ParsleyExtend)._init();break;default:throw new Error(t+"is not a supported Parsley type")}return this.options.multiple&&a.setAttr(this.element,this.options.namespace,"multiple",this.options.multiple),"undefined"!=typeof i?(this.$element.data("FieldMultiple",n),n):(this.$element.data("Parsley",n),n._actualizeTriggers(),n._trigger("init"),n)}};var V=e.fn.jquery.split(".");if(parseInt(V[0])<=1&&parseInt(V[1])<8)throw"The loaded version of jQuery is too old. Please upgrade to 1.8.x or better.";V.forEach||a.warn("Parsley requires ES5 to run properly. Please include https://github.com/es-shims/es5-shim");var O=_extends(new l,{element:document,$element:e(document),actualizeOptions:null,_resetOptions:null,Factory:P,version:"2.7.2"});_extends(x.prototype,y.Field,l.prototype),_extends(w.prototype,y.Form,l.prototype),_extends(P.prototype,l.prototype),e.fn.parsley=e.fn.psly=function(t){if(this.length>1){var i=[];return this.each(function(){i.push(e(this).parsley(t))}),i}return e(this).length?new P(this[0],t):void a.warn("You must bind Parsley on an existing element.")},"undefined"==typeof window.ParsleyExtend&&(window.ParsleyExtend={}),O.options=_extends(a.objectCreate(o),window.ParsleyConfig),window.ParsleyConfig=O.options,window.Parsley=window.psly=O,O.Utils=a,window.ParsleyUtils={},e.each(a,function(e,t){"function"==typeof t&&(window.ParsleyUtils[e]=function(){return a.warnOnce("Accessing `window.ParsleyUtils` is deprecated. Use `window.Parsley.Utils` instead."),a[e].apply(a,arguments)})});var M=window.Parsley._validatorRegistry=new p(window.ParsleyConfig.validators,window.ParsleyConfig.i18n);window.ParsleyValidator={},e.each("setLocale addCatalog addMessage addMessages getErrorMessage formatMessage addValidator updateValidator removeValidator".split(" "),function(e,t){window.Parsley[t]=function(){return M[t].apply(M,arguments)},window.ParsleyValidator[t]=function(){var e;return a.warnOnce("Accessing the method '"+t+"' through Validator is deprecated. Simply call 'window.Parsley."+t+"(...)'"),(e=window.Parsley)[t].apply(e,arguments)}}),window.Parsley.UI=y,window.ParsleyUI={removeError:function(e,t,i){var n=!0!==i;return a.warnOnce("Accessing UI is deprecated. Call 'removeError' on the instance directly. Please comment in issue 1073 as to your need to call this method."),e.removeError(t,{updateClass:n})},getErrorsMessages:function(e){return a.warnOnce("Accessing UI is deprecated. Call 'getErrorsMessages' on the instance directly."),e.getErrorsMessages()}},e.each("addError updateError".split(" "),function(e,t){window.ParsleyUI[t]=function(e,i,n,r,s){var o=!0!==s;return a.warnOnce("Accessing UI is deprecated. Call '"+t+"' on the instance directly. Please comment in issue 1073 as to your need to call this method."),e[t](i,{message:n,assert:r,updateClass:o})}}),!1!==window.ParsleyConfig.autoBind&&e(function(){e("[data-parsley-validate]").length&&e("[data-parsley-validate]").parsley()});var T=e({}),R=function(){a.warnOnce("Parsley's pubsub module is deprecated; use the 'on' and 'off' methods on parsley instances or window.Parsley")},D="parsley:";e.listen=function(e,n){var r;if(R(),"object"==typeof arguments[1]&&"function"==typeof arguments[2]&&(r=arguments[1],n=arguments[2]),"function"!=typeof n)throw new Error("Wrong parameters");window.Parsley.on(i(e),t(n,r))},e.listenTo=function(e,n,r){if(R(),!(e instanceof x||e instanceof w))throw new Error("Must give Parsley instance");if("string"!=typeof n||"function"!=typeof r)throw new Error("Wrong parameters");e.on(i(n),t(r))},e.unsubscribe=function(e,t){if(R(),"string"!=typeof e||"function"!=typeof t)throw new Error("Wrong arguments");window.Parsley.off(i(e),t.parsleyAdaptedCallback)},e.unsubscribeTo=function(e,t){if(R(),!(e instanceof x||e instanceof w))throw new Error("Must give Parsley instance");e.off(i(t))},e.unsubscribeAll=function(t){R(),window.Parsley.off(i(t)),e("form,input,textarea,select").each(function(){var n=e(this).data("Parsley");n&&n.off(i(t))})},e.emit=function(e,t){var n;R();var r=t instanceof x||t instanceof w,s=Array.prototype.slice.call(arguments,r?2:1);s.unshift(i(e)),r||(t=window.Parsley),(n=t).trigger.apply(n,_toConsumableArray(s))};e.extend(!0,O,{asyncValidators:{"default":{fn:function(e){return e.status>=200&&e.status<300},url:!1},reverse:{fn:function(e){return e.status<200||e.status>=300},url:!1}},addAsyncValidator:function(e,t,i,n){return O.asyncValidators[e]={fn:t,url:i||!1,options:n||{}},this}}),O.addValidator("remote",{requirementType:{"":"string",validator:"string",reverse:"boolean",options:"object"},validateString:function(t,i,n,r){var s,a,o={},l=n.validator||(!0===n.reverse?"reverse":"default");if("undefined"==typeof O.asyncValidators[l])throw new Error("Calling an undefined async validator: `"+l+"`");i=O.asyncValidators[l].url||i,i.indexOf("{value}")>-1?i=i.replace("{value}",encodeURIComponent(t)):o[r.element.getAttribute("name")||r.element.getAttribute("id")]=t;var u=e.extend(!0,n.options||{},O.asyncValidators[l].options);s=e.extend(!0,{},{url:i,data:o,type:"GET"},u),r.trigger("field:ajaxoptions",r,s),a=e.param(s),"undefined"==typeof O._remoteCache&&(O._remoteCache={});var d=O._remoteCache[a]=O._remoteCache[a]||e.ajax(s),h=function(){var t=O.asyncValidators[l].fn.call(r,d,i,n);return t||(t=e.Deferred().reject()),e.when(t)};return d.then(h,h)},priority:-1}),O.on("form:submit",function(){O._remoteCache={}}),l.prototype.addAsyncValidator=function(){return a.warnOnce("Accessing the method `addAsyncValidator` through an instance is deprecated. Simply call `Parsley.addAsyncValidator(...)`"),O.addAsyncValidator.apply(O,arguments)},O.addMessages("en",{defaultMessage:"This value seems to be invalid.",type:{email:"This value should be a valid email.",url:"This value should be a valid url.",number:"This value should be a valid number.",integer:"This value should be a valid integer.",digits:"This value should be digits.",alphanum:"This value should be alphanumeric."},notblank:"This value should not be blank.",required:"This value is required.",pattern:"This value seems to be invalid.",min:"This value should be greater than or equal to %s.",max:"This value should be lower than or equal to %s.",range:"This value should be between %s and %s.",minlength:"This value is too short. It should have %s characters or more.",maxlength:"This value is too long. It should have %s characters or fewer.",length:"This value length is invalid. It should be between %s and %s characters long.",mincheck:"You must select at least %s choices.",maxcheck:"You must select %s choices or fewer.",check:"You must select between %s and %s choices.",equalto:"This value should be the same."}),O.setLocale("en");var I=new n;I.install();var q=O;return q});
jQuery(document).ready(function(e){function a(e,a){l(e,a),e.find(a.container).first().show()}function n(a,n){if(n.tabs){var t=e("<div />",{"class":n.tabMenuClassName}).insertBefore(a.children(n.container).filter(":first"));a.children(n.container).each(function(i,r){var l=e("<button/>").html(e(this).children(n.header).html()).addClass(0==i?n.tabMenuItemActiveClassName:"").addClass("item"+i).addClass("btn btn-default").prop("type","button").on("click keypress",{container:a.children(n.container),fieldset:e(r)},function(){var t=e(this),i=t.parent().children().index(t);s(a,n,t,i)});n.tabIndex&&l.prop("tabindex",i),t.append(l)})}}function t(a,n){n.navigation&&a.children(n.container).each(function(t){var i=e("<div />").addClass("powermail_fieldwrap").addClass("powermail_tab_navigation").appendTo(e(this));t>0&&i.append(c(a,n)),t<a.children(n.container).length-1&&i.append(o(a,n))})}function i(a,n){e.fn.parsley&&"data-parsley-validate"===a.data("parsley-validate")&&a.parsley().subscribe("parsley:field:validated",function(){v(a,n),C(a,n)})}function r(a,n){n.openTabOnError&&e.listen("parsley:field:error",function(){setTimeout(function(){a.find("."+n.tabMenuClassName+" > ."+n.tabMenuItemErrorClassName+":first").click()},50)})}function s(a,n,t,i){$activeTab=p(a,n),$activeTab.removeClass(n.tabMenuItemActiveClassName),t.addClass(n.tabMenuItemActiveClassName),l(a,n),e(".powermail_fieldset",a).slice(i,i+1).show()}function l(e,a){e.children(a.container).hide()}function c(a,n){return e("<a />").prop("href","#").addClass("btn btn-warning").html("<").click(function(e){e.preventDefault(),u(a,n)})}function o(a,n){return e("<a />").prop("href","#").addClass("btn btn-primary pull-right").html(">").click(function(e){e.preventDefault(),d(a,n)})}function d(e,a){var n=m(e,a);$activeTab=p(e,a),$activeTab.removeClass(a.tabMenuItemActiveClassName).next().addClass(a.tabMenuItemActiveClassName),f(e,a,n+1)}function u(e,a){var n=m(e,a);$activeTab=p(e,a),$activeTab.removeClass(a.tabMenuItemActiveClassName).prev().addClass(a.tabMenuItemActiveClassName),f(e,a,n-1)}function f(e,a,n){l(e,a),e.find(".powermail_fieldset").slice(n,n+1).show()}function m(e,a){var n=b(e,a),t=n.index(p(e,a));return parseInt(t)}function b(e,a){return e.find("."+a.tabMenuClassName).children()}function p(e,a){var n=b(e,a);return n.filter("."+a.tabMenuItemActiveClassName)}function v(e,a){var n=b(e,a);n.removeClass(a.tabMenuItemErrorClassName)}function C(a,n){a.parsley().isValid()||a.find(".parsley-error").each(function(){var t=a.find(".powermail_fieldset").index(e(this).closest(".powermail_fieldset")),i=b(a,n),r=i.slice(t,t+1);r.addClass(n.tabMenuItemErrorClassName)})}e.fn.powermailTabs=function(e){"use strict";var s=jQuery(this);e=jQuery.extend({container:"fieldset",header:"legend",tabs:!0,navigation:!0,openTabOnError:!0,tabIndex:!0,tabMenuClassName:"btn-group",tabMenuItemActiveClassName:"btn-primary",tabMenuItemErrorClassName:"btn-danger"},e),a(s,e),n(s,e),t(s,e),i(s,e),r(s,e)}});
function PowermailForm(e){"use strict";this.initialize=function(){a(),t(),i(),r(),o(),n(),c(),l()};var a=function(){e.fn.powermailTabs&&e(".powermail_morestep").each(function(){e(this).powermailTabs()})},t=function(){e("form[data-powermail-ajax]").length&&p()},i=function(){if(e('*[data-powermail-location="prefill"]').length&&navigator.geolocation){e(this);navigator.geolocation.getCurrentPosition(function(a){var t=a.coords.latitude,i=a.coords.longitude,r=D()+"/index.php?eID=powermailEidGetLocation";jQuery.ajax({url:r,data:"lat="+t+"&lng="+i,cache:!1,success:function(a){a&&e('*[data-powermail-location="prefill"]').val(a)}})})}},r=function(){e.fn.datetimepicker&&e(".powermail_date").each(function(){var a=e(this);if("date"===a.prop("type")||"datetime-local"===a.prop("type")||"time"===a.prop("type")){if(!a.data("datepicker-force")){if(e(this).data("date-value")){var t=v(e(this).data("date-value"),e(this).data("datepicker-format"),a.prop("type"));null!==t&&e(this).val(t)}return}a.prop("type","text")}var i=!0,r=!0;"date"===a.data("datepicker-settings")?r=!1:"time"===a.data("datepicker-settings")&&(i=!1),a.datetimepicker({format:a.data("datepicker-format"),timepicker:r,datepicker:i,lang:"en",i18n:{en:{months:a.data("datepicker-months").split(","),dayOfWeek:a.data("datepicker-days").split(",")}}})})},o=function(){e(".powermail_all_type_password.powermail_all_value").html("********")},n=function(){e.fn.parsley&&e(".powermail_reset").on("click","",function(){e('form[data-parsley-validate="data-parsley-validate"]').parsley().reset()})},l=function(){window.Parsley&&(_(),x())},p=function(){var a,t=!1;e(document).on("submit","form[data-powermail-ajax]",function(i){var r=e(this);r.data("powermail-ajax-uri")&&(a=r.data("powermail-ajax-uri"));var o=r.data("powermail-form");t||(e.ajax({type:"POST",url:r.prop("action"),data:new FormData(r.get(0)),contentType:!1,processData:!1,beforeSend:function(){s(r)},complete:function(){d(r),c()},success:function(i){var n=e('*[data-powermail-form="'+o+'"]:first',i);n.length?(e('*[data-powermail-form="'+o+'"]:first').closest(".tx-powermail").html(n),e.fn.powermailTabs&&e(".powermail_morestep").powermailTabs(),e.fn.parsley&&e('form[data-parsley-validate="data-parsley-validate"]').parsley(),m()):(a?j(a):r.submit(),t=!0)}}),i.preventDefault())})},s=function(a){d(a),e(".powermail_submit",a).length?e(".powermail_submit",a).parent().append(g()):a.closest(".tx-powermail").append(g())},d=function(e){e.closest(".tx-powermail").find(".powermail_progressbar").remove()},c=function(){e(".powermail_fieldwrap_file").find(".deleteAllFiles").each(function(){f(e(this).closest(".powermail_fieldwrap_file").find('input[type="file"]'))}),e(".deleteAllFiles").click(function(){u(e(this).closest(".powermail_fieldwrap_file").find('input[type="hidden"]')),e(this).closest("ul").fadeOut(function(){e(this).remove()})})},f=function(e){e.prop("disabled","disabled").addClass("hide").prop("type","hidden")},u=function(e){e.prop("disabled",!1).removeClass("hide").prop("type","file")},m=function(){e("img.powermail_captchaimage").each(function(){var a=w(e(this).prop("src"));e(this).prop("src",a+"?hash="+h(5))})},w=function(e){var a=e.split("?");return a[0]},h=function(e){for(var a="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",i=0;i<e;i++)a+=t.charAt(Math.floor(Math.random()*t.length));return a},v=function(e,a,t){var i=Date.parseDate(e,a);if(null===i)return null;var r=new Date(i),o=r.getFullYear()+"-";o+=("0"+(r.getMonth()+1)).slice(-2)+"-",o+=("0"+r.getDate()).slice(-2);var n=("0"+r.getHours()).slice(-2)+":"+("0"+r.getMinutes()).slice(-2),l=o+"T"+n;return"date"===t?o:"datetime-local"===t?l:"time"===t?n:null},g=function(){return e("<div />").addClass("powermail_progressbar").html(e("<div />").addClass("powermail_progress").html(e("<div />").addClass("powermail_progess_inner")))},y=function(e){for(var a=e.get(0),t=0,i=0;i<a.files.length;i++){var r=a.files[i];r.size>t&&(t=r.size)}return parseInt(t)},_=function(){window.Parsley.addValidator("powermailfilesize",function(a,t){if(t.indexOf(",")!==-1){var i=t.split(","),r=parseInt(i[0]),o=e('*[name="tx_powermail_pi1[field]['+i[1]+'][]"]');if(o.length&&y(o)>r)return!1}return!0},32).addMessage("en","powermailfilesize","Error")},x=function(){window.Parsley.addValidator("powermailfileextensions",function(a,t){var i=e('*[name="tx_powermail_pi1[field]['+t+'][]"]');return!i.length||b(k(a),i.prop("accept"))},32).addMessage("en","powermailfileextensions","Error")},b=function(e,a){return a.indexOf("."+e)!==-1},k=function(e){return e.split(".").pop().toLowerCase()},j=function(e){e.indexOf("http")!==-1?window.location=e:window.location.pathname=e},D=function(){var a;return a=e("base").length>0?jQuery("base").prop("href"):"https:"!=window.location.protocol?"http://"+window.location.hostname:"https://"+window.location.hostname}}jQuery(document).ready(function(e){"use strict";var a=new window.PowermailForm(e);a.initialize()});
var $ = jQuery.noConflict();

$.fn.inlineStyle = function (prop) {
	return this.prop("style")[$.camelCase(prop)];
};

$.fn.doOnce = function( func ) {
	this.length && func.apply( this );
	return this;
}

$.extend($.infinitescroll.prototype,{
	_setup_portfolioinfiniteitemsloader: function infscr_setup_portfolioinfiniteitemsloader() {
		var opts = this.options,
			instance = this;
		// Bind nextSelector link to retrieve
		$(opts.nextSelector).click(function(e) {
			if (e.which == 1 && !e.metaKey && !e.shiftKey) {
				e.preventDefault();
				instance.retrieve();
			}
		});
		// Define loadingStart to never hide pager
		instance.options.loading.start = function (opts) {
			opts.loading.msg
				.appendTo(opts.loading.selector)
				.show(opts.loading.speed, function () {
					instance.beginAjax(opts);
				});
		}
	},
	_showdonemsg_portfolioinfiniteitemsloader: function infscr_showdonemsg_portfolioinfiniteitemsloader () {
		var opts = this.options,
			instance = this;
		//Do all the usual stuff
		opts.loading.msg
			.find('img')
			.hide()
			.parent()
			.find('div').html(opts.loading.finishedMsg).animate({ opacity: 1 }, 2000, function () {
				$(this).parent().fadeOut('normal');
			});
		//And also hide the navSelector
		$(opts.navSelector).fadeOut('normal');
		// user provided callback when done
		opts.errorCallback.call($(opts.contentSelector)[0],'done');
	}
});

(function() {
	var lastTime = 0;
	var vendors = ['ms', 'moz', 'webkit', 'o'];
	for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
		window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
		window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
									|| window[vendors[x]+'CancelRequestAnimationFrame'];
	}

	if (!window.requestAnimationFrame)
		window.requestAnimationFrame = function(callback, element) {
			var currTime = new Date().getTime();
			var timeToCall = Math.max(0, 16 - (currTime - lastTime));
			var id = window.setTimeout(function() { callback(currTime + timeToCall); },
			  timeToCall);
			lastTime = currTime + timeToCall;
			return id;
		};

	if (!window.cancelAnimationFrame)
		window.cancelAnimationFrame = function(id) {
			clearTimeout(id);
		};
}());



var SEMICOLON = SEMICOLON || {};

(function($){

	// USE STRICT
	"use strict";

	SEMICOLON.initialize = {

		init: function(){

			SEMICOLON.initialize.responsiveClasses();
			SEMICOLON.initialize.imagePreload( '.portfolio-item:not(:has(.fslider)) img' );
			SEMICOLON.initialize.stickyElements();
			SEMICOLON.initialize.goToTop();
			SEMICOLON.initialize.fullScreen();
			SEMICOLON.initialize.verticalMiddle();
			SEMICOLON.initialize.lightbox();
			SEMICOLON.initialize.resizeVideos();
			SEMICOLON.initialize.imageFade();
			SEMICOLON.initialize.pageTransition();
			SEMICOLON.initialize.dataStyles();
			SEMICOLON.initialize.dataResponsiveHeights();

			$('.fslider').addClass('preloader2');

		},

		responsiveClasses: function(){
			var jRes = jRespond([
				{
					label: 'smallest',
					enter: 0,
					exit: 479
				},{
					label: 'handheld',
					enter: 480,
					exit: 767
				},{
					label: 'tablet',
					enter: 768,
					exit: 991
				},{
					label: 'laptop',
					enter: 992,
					exit: 1199
				},{
					label: 'desktop',
					enter: 1200,
					exit: 10000
				}
			]);
			jRes.addFunc([
				{
					breakpoint: 'desktop',
					enter: function() { $body.addClass('device-lg'); },
					exit: function() { $body.removeClass('device-lg'); }
				},{
					breakpoint: 'laptop',
					enter: function() { $body.addClass('device-md'); },
					exit: function() { $body.removeClass('device-md'); }
				},{
					breakpoint: 'tablet',
					enter: function() { $body.addClass('device-sm'); },
					exit: function() { $body.removeClass('device-sm'); }
				},{
					breakpoint: 'handheld',
					enter: function() { $body.addClass('device-xs'); },
					exit: function() { $body.removeClass('device-xs'); }
				},{
					breakpoint: 'smallest',
					enter: function() { $body.addClass('device-xxs'); },
					exit: function() { $body.removeClass('device-xxs'); }
				}
			]);
		},

		imagePreload: function(selector, parameters){
			var params = {
				delay: 250,
				transition: 400,
				easing: 'linear'
			};
			$.extend(params, parameters);

			$(selector).each(function() {
				var image = $(this);
				image.css({visibility:'hidden', opacity: 0, display:'block'});
				image.wrap('<span class="preloader" />');
				image.one("load", function(evt) {
					$(this).delay(params.delay).css({visibility:'visible'}).animate({opacity: 1}, params.transition, params.easing, function() {
						$(this).unwrap('<span class="preloader" />');
					});
				}).each(function() {
					if(this.complete) $(this).trigger("load");
				});
			});
		},

		verticalMiddle: function(){
			if( $verticalMiddleEl.length > 0 ) {
				$verticalMiddleEl.each( function(){
					var element = $(this),
						verticalMiddleH = element.outerHeight(),
						headerHeight = $header.outerHeight();

					if( element.parents('#slider').length > 0 && !element.hasClass('ignore-header') ) {
						if( $header.hasClass('transparent-header') && ( $body.hasClass('device-lg') || $body.hasClass('device-md') ) ) {
							verticalMiddleH = verticalMiddleH - 70;
							if( $slider.next('#header').length > 0 ) { verticalMiddleH = verticalMiddleH + headerHeight; }
						}
					}

					if( $body.hasClass('device-xs') || $body.hasClass('device-xxs') ) {
						if( element.parents('.full-screen').length && !element.parents('.force-full-screen').length ){
							element.css({ position: 'relative', top: '0', width: 'auto', marginTop: '0', padding: '60px 0' }).addClass('clearfix');
						} else {
							element.css({ position: 'absolute', top: '50%', width: '100%', marginTop: -(verticalMiddleH/2)+'px' });
						}
					} else {
						element.css({ position: 'absolute', top: '50%', width: '100%', marginTop: -(verticalMiddleH/2)+'px' });
					}
				});
			}
		},

		stickyElements: function(){
			if( $siStickyEl.length > 0 ) {
				var siStickyH = $siStickyEl.outerHeight();
				$siStickyEl.css({ marginTop: -(siStickyH/2)+'px' });
			}

			if( $dotsMenuEl.length > 0 ) {
				var opmdStickyH = $dotsMenuEl.outerHeight();
				$dotsMenuEl.css({ marginTop: -(opmdStickyH/2)+'px' });
			}
		},

		goToTop: function(){
			$goToTopEl.click(function() {
				$('body,html').stop(true).animate({scrollTop:0},400);
				return false;
			});
		},

		goToTopScroll: function(){
			if( $body.hasClass('device-lg') || $body.hasClass('device-md') || $body.hasClass('device-sm') ) {
				if($window.scrollTop() > 450) {
					$goToTopEl.fadeIn();
				} else {
					$goToTopEl.fadeOut();
				}
			}
		},

		fullScreen: function(){
			if( $fullScreenEl.length > 0 ) {
				$fullScreenEl.each( function(){
					var element = $(this),
						scrHeight = $window.height();
					if( element.attr('id') == 'slider' ) {
						var sliderHeightOff = $slider.offset().top;
						scrHeight = scrHeight - sliderHeightOff;
						if( $('#slider.with-header').next('#header:not(.transparent-header)').length > 0 && ( $body.hasClass('device-lg') || $body.hasClass('device-md') ) ) {
							var headerHeightOff = $header.outerHeight();
							scrHeight = scrHeight - headerHeightOff;
						}
					}
					if( element.parents('.full-screen').length > 0 ) { scrHeight = element.parents('.full-screen').height(); }

					if( $body.hasClass('device-xs') || $body.hasClass('device-xxs') ) {
						if( !element.hasClass('force-full-screen') ){ scrHeight = 'auto'; }
					}

					element.css('height', scrHeight);
					if( element.attr('id') == 'slider' && !element.hasClass('canvas-slider-grid') ) { if( element.has('.swiper-slide') ) { element.find('.swiper-slide').css('height', scrHeight); } }
				});
			}
		},

		maxHeight: function(){
			if( $commonHeightEl.length > 0 ) {
				$commonHeightEl.each( function(){
					var element = $(this);
					if( element.has('.common-height') ) {
						SEMICOLON.initialize.commonHeight( element.find('.common-height') );
					}

					SEMICOLON.initialize.commonHeight( element );
				});
			}
		},

		commonHeight: function( element ){
			var maxHeight = 0;
			element.children('[class^=col-]').each(function() {
				var element = $(this).children('div');
				if( element.hasClass('max-height') ){
					maxHeight = element.outerHeight();
				} else {
					if (element.outerHeight() > maxHeight)
					maxHeight = element.outerHeight();
				}
			});

			element.children('[class^=col-]').each(function() {
				$(this).height(maxHeight);
			});
		},

		testimonialsGrid: function(){
			if( $testimonialsGridEl.length > 0 ) {
				if( $body.hasClass('device-sm') || $body.hasClass('device-md') || $body.hasClass('device-lg') ) {
					var maxHeight = 0;
					$testimonialsGridEl.each( function(){
						$(this).find("li > .testimonial").each(function(){
						   if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
						});
						$(this).find("li").height(maxHeight);
						maxHeight = 0;
					});
				} else {
					$testimonialsGridEl.find("li").css({ 'height': 'auto' });
				}
			}
		},

		lightbox: function(){
			var $lightboxImageEl = $('[data-lightbox="image"]'),
				$lightboxGalleryEl = $('[data-lightbox="gallery"]'),
				$lightboxIframeEl = $('[data-lightbox="iframe"]'),
				$lightboxAjaxEl = $('[data-lightbox="ajax"]'),
				$lightboxAjaxGalleryEl = $('[data-lightbox="ajax-gallery"]');

			if( $lightboxImageEl.length > 0 ) {
				$lightboxImageEl.magnificPopup({
					type: 'image',
					closeOnContentClick: true,
					closeBtnInside: false,
					fixedContentPos: true,
					mainClass: 'mfp-no-margins mfp-fade', // class to remove default margin from left and right side
					image: {
						verticalFit: true
					}
				});
			}

			if( $lightboxGalleryEl.length > 0 ) {
				$lightboxGalleryEl.each(function() {
					var element = $(this);

					if( element.find('a[data-lightbox="gallery-item"]').parent('.clone').hasClass('clone') ) {
						element.find('a[data-lightbox="gallery-item"]').parent('.clone').find('a[data-lightbox="gallery-item"]').attr('data-lightbox','');
					}

					element.magnificPopup({
						delegate: 'a[data-lightbox="gallery-item"]',
						type: 'image',
						closeOnContentClick: true,
						closeBtnInside: false,
						fixedContentPos: true,
						mainClass: 'mfp-no-margins mfp-fade', // class to remove default margin from left and right side
						image: {
							verticalFit: true
						},
						gallery: {
							enabled: true,
							navigateByImgClick: true,
							preload: [0,1] // Will preload 0 - before current, and 1 after the current image
						}
					});
				});
			}

			if( $lightboxIframeEl.length > 0 ) {
				$lightboxIframeEl.magnificPopup({
					disableOn: 600,
					type: 'iframe',
					removalDelay: 160,
					preloader: false,
					fixedContentPos: false
				});
			}

			if( $lightboxAjaxEl.length > 0 ) {
				$lightboxAjaxEl.magnificPopup({
					type: 'ajax',
					closeBtnInside: false,
					callbacks: {
						ajaxContentAdded: function(mfpResponse) {
							SEMICOLON.widget.loadFlexSlider();
							SEMICOLON.initialize.resizeVideos();
							SEMICOLON.widget.masonryThumbs();
						},
						open: function() {
							$body.addClass('ohidden');
						},
						close: function() {
							$body.removeClass('ohidden');
						}
					}
				});
			}

			if( $lightboxAjaxGalleryEl.length > 0 ) {
				$lightboxAjaxGalleryEl.magnificPopup({
					delegate: 'a[data-lightbox="ajax-gallery-item"]',
					type: 'ajax',
					closeBtnInside: false,
					gallery: {
						enabled: true,
						preload: 0,
						navigateByImgClick: false
					},
					callbacks: {
						ajaxContentAdded: function(mfpResponse) {
							SEMICOLON.widget.loadFlexSlider();
							SEMICOLON.initialize.resizeVideos();
							SEMICOLON.widget.masonryThumbs();
						},
						open: function() {
							$body.addClass('ohidden');
						},
						close: function() {
							$body.removeClass('ohidden');
						}
					}
				});
			}
		},

		resizeVideos: function(){
			if ( $().fitVids ) {
				$("#content,#footer,#slider:not(.revslider-wrap),.landing-offer-media,.portfolio-ajax-modal").fitVids({
					customSelector: "iframe[src^='http://www.dailymotion.com/embed']",
					ignore: '.no-fv'
				});
			}
		},

		imageFade: function(){
			$('.image_fade').hover( function(){
				$(this).filter(':not(:animated)').animate({opacity: 0.8}, 400);
			}, function() {
				$(this).animate({opacity: 1}, 400);
			});
		},

		blogTimelineEntries: function(){
			$('.post-timeline.grid-2').find('.entry').each( function(){
				var position = $(this).inlineStyle('left');
				if( position == '0px' ) {
					$(this).removeClass('alt');
				} else {
					$(this).addClass('alt');
				}
				$(this).find('.entry-timeline').fadeIn();
			});
		},

		pageTransition: function(){
			if( !$body.hasClass('no-transition') ){
				var animationIn = $body.attr('data-animation-in'),
					animationOut = $body.attr('data-animation-out'),
					durationIn = $body.attr('data-speed-in'),
					durationOut = $body.attr('data-speed-out'),
					loaderStyle = $body.attr('data-loader'),
					loaderStyleHtml = '<div class="css3-spinner-bounce1"></div><div class="css3-spinner-bounce2"></div><div class="css3-spinner-bounce3"></div>';

				if( !animationIn ) { animationIn = 'fadeIn'; }
				if( !animationOut ) { animationOut = 'fadeOut'; }
				if( !durationIn ) { durationIn = 1500; }
				if( !durationOut ) { durationOut = 800; }

				if( loaderStyle == '2' ) {
					loaderStyleHtml = '<div class="css3-spinner-flipper"></div>';
				} else if( loaderStyle == '3' ) {
					loaderStyleHtml = '<div class="css3-spinner-double-bounce1"></div><div class="css3-spinner-double-bounce2"></div>';
				} else if( loaderStyle == '4' ) {
					loaderStyleHtml = '<div class="css3-spinner-rect1"></div><div class="css3-spinner-rect2"></div><div class="css3-spinner-rect3"></div><div class="css3-spinner-rect4"></div><div class="css3-spinner-rect5"></div>';
				} else if( loaderStyle == '5' ) {
					loaderStyleHtml = '<div class="css3-spinner-cube1"></div><div class="css3-spinner-cube2"></div>';
				} else if( loaderStyle == '6' ) {
					loaderStyleHtml = '<div class="css3-spinner-scaler"></div>';
				}

				$wrapper.animsition({
					inClass : animationIn,
					outClass : animationOut,
					inDuration : Number(durationIn),
					outDuration : Number(durationOut),
					linkElement : '#primary-menu ul li a:not([target="_blank"]):not([href^=#])',
					loading : true,
					loadingParentElement : 'body',
					loadingClass : 'css3-spinner',
					loadingHtml : loaderStyleHtml,
					unSupportCss : [
									 'animation-duration',
									 '-webkit-animation-duration',
									 '-o-animation-duration'
								   ],
					overlay : false,
					overlayClass : 'animsition-overlay-slide',
					overlayParentElement : 'body'
				});
			}
		},

		topScrollOffset: function() {
			var topOffsetScroll = 0;

			if( ( $body.hasClass('device-lg') || $body.hasClass('device-md') ) && !SEMICOLON.isMobile.any() ) {
				if( $header.hasClass('sticky-header') ) {
					if( $pagemenu.hasClass('dots-menu') ) { topOffsetScroll = 100; } else { topOffsetScroll = 144; }
				} else {
					if( $pagemenu.hasClass('dots-menu') ) { topOffsetScroll = 140; } else { topOffsetScroll = 184; }
				}

				if( !$pagemenu.length ) {
					if( $header.hasClass('sticky-header') ) { topOffsetScroll = 100; } else { topOffsetScroll = 140; }
				}
			} else {
				topOffsetScroll = 40;
			}

			return topOffsetScroll;
		},

		defineColumns: function( element ){
			var column = 4;

			if( element.hasClass('portfolio-full') ) {
				if( element.hasClass('portfolio-3') ) column = 3;
				else if( element.hasClass('portfolio-5') ) column = 5;
				else if( element.hasClass('portfolio-6') ) column = 6;
else if( element.hasClass('portfolio-2') ) column = 2;
				else column = 4;

				if( $body.hasClass('device-sm') && ( column == 4 || column == 5 || column == 6 ) ) {
					column = 3;
				} else if( $body.hasClass('device-xs') && ( column == 3 || column == 4 || column == 5 || column == 6 ) ) {
					column = 2;
				} else if( $body.hasClass('device-xxs') ) {
					column = 1;
				}
			} else if( element.hasClass('masonry-thumbs') ) {
				if( element.hasClass('col-2') ) column = 2;
				else if( element.hasClass('col-3') ) column = 3;
				else if( element.hasClass('col-5') ) column = 5;
				else if( element.hasClass('col-6') ) column = 6;
				else column = 4;
			}

			return column;
		},

		setFullColumnWidth: function( element ){

			if( element.hasClass('portfolio-full') ) {
				var columns = SEMICOLON.initialize.defineColumns( element );
				var containerWidth = element.width();
				if( containerWidth == ( Math.floor(containerWidth/columns) * columns ) ) { containerWidth = containerWidth - 1; }
				var postWidth = Math.floor(containerWidth/columns);
				if( $body.hasClass('device-xxs') ) { var deviceSmallest = 1; } else { var deviceSmallest = 0; }
				element.find(".portfolio-item").each(function(index){
					if( deviceSmallest == 0 && $(this).hasClass('wide') ) { var elementSize = ( postWidth*2 ); } else { var elementSize = postWidth; }
					$(this).css({"width":elementSize+"px"});
				});
			} else if( element.hasClass('masonry-thumbs') ) {
				var columns = SEMICOLON.initialize.defineColumns( element ),
					containerWidth = element.innerWidth(),
					windowWidth = $window.width();
				if( containerWidth == windowWidth ){
					containerWidth = windowWidth*1.004;
					element.css({ 'width': containerWidth+'px' });
				}
				var postWidth = (containerWidth/columns);

				postWidth = Math.floor(postWidth);

				if( ( postWidth * columns ) >= containerWidth ) { element.css({ 'margin-right': '-1px' }); }

				element.children('a').css({"width":postWidth+"px"});

				var firstElementWidth = element.find('a:eq(0)').outerWidth();

				element.isotope({
					masonry: {
						columnWidth: firstElementWidth
					}
				});

				var bigImageNumbers = element.attr('data-big');
				if( bigImageNumbers ) {
					bigImageNumbers = bigImageNumbers.split(",");
					var bigImageNumber = '',
						bigi = '';
					for( bigi = 0; bigi < bigImageNumbers.length; bigi++ ){
						bigImageNumber = Number(bigImageNumbers[bigi]) - 1;
						element.find('a:eq('+bigImageNumber+')').css({ width: firstElementWidth*2 + 'px' });
					}
					var t = setTimeout( function(){
						element.isotope('layout');
					}, 1000 );
				}
			}

		},

		aspectResizer: function(){
			var $aspectResizerEl = $('.aspect-resizer');
			if( $aspectResizerEl.length > 0 ) {
				$aspectResizerEl.each( function(){
					var element = $(this),
						elementW = element.inlineStyle('width'),
						elementH = element.inlineStyle('height'),
						elementPW = element.parent().innerWidth();
				});
			}
		},

		dataStyles: function(){
			var $dataStyleXxs = $('[data-style-xxs]'),
				$dataStyleXs = $('[data-style-xs]'),
				$dataStyleSm = $('[data-style-sm]'),
				$dataStyleMd = $('[data-style-md]'),
				$dataStyleLg = $('[data-style-lg]');

			if( $dataStyleXxs.length > 0 ) {
				$dataStyleXxs.each( function(){
					var element = $(this),
						elementStyle = element.attr('data-style-xxs');

					if( $body.hasClass('device-xxs') ) {
						if( elementStyle != '' ) { element.attr( 'style', elementStyle ); }
					}
				});
			}

			if( $dataStyleXs.length > 0 ) {
				$dataStyleXs.each( function(){
					var element = $(this),
						elementStyle = element.attr('data-style-xs');

					if( $body.hasClass('device-xs') ) {
						if( elementStyle != '' ) { element.attr( 'style', elementStyle ); }
					}
				});
			}

			if( $dataStyleSm.length > 0 ) {
				$dataStyleSm.each( function(){
					var element = $(this),
						elementStyle = element.attr('data-style-sm');

					if( $body.hasClass('device-sm') ) {
						if( elementStyle != '' ) { element.attr( 'style', elementStyle ); }
					}
				});
			}

			if( $dataStyleMd.length > 0 ) {
				$dataStyleMd.each( function(){
					var element = $(this),
						elementStyle = element.attr('data-style-md');

					if( $body.hasClass('device-md') ) {
						if( elementStyle != '' ) { element.attr( 'style', elementStyle ); }
					}
				});
			}

			if( $dataStyleLg.length > 0 ) {
				$dataStyleLg.each( function(){
					var element = $(this),
						elementStyle = element.attr('data-style-lg');

					if( $body.hasClass('device-lg') ) {
						if( elementStyle != '' ) { element.attr( 'style', elementStyle ); }
					}
				});
			}
		},

		dataResponsiveHeights: function(){
			var $dataHeightXxs = $('[data-height-xxs]'),
				$dataHeightXs = $('[data-height-xs]'),
				$dataHeightSm = $('[data-height-sm]'),
				$dataHeightMd = $('[data-height-md]'),
				$dataHeightLg = $('[data-height-lg]');

			if( $dataHeightXxs.length > 0 ) {
				$dataHeightXxs.each( function(){
					var element = $(this),
						elementHeight = element.attr('data-height-xxs');

					if( $body.hasClass('device-xxs') ) {
						if( elementHeight != '' ) { element.css( 'height', elementHeight ); }
					}
				});
			}

			if( $dataHeightXs.length > 0 ) {
				$dataHeightXs.each( function(){
					var element = $(this),
						elementHeight = element.attr('data-height-xs');

					if( $body.hasClass('device-xs') ) {
						if( elementHeight != '' ) { element.css( 'height', elementHeight ); }
					}
				});
			}

			if( $dataHeightSm.length > 0 ) {
				$dataHeightSm.each( function(){
					var element = $(this),
						elementHeight = element.attr('data-height-sm');

					if( $body.hasClass('device-sm') ) {
						if( elementHeight != '' ) { element.css( 'height', elementHeight ); }
					}
				});
			}

			if( $dataHeightMd.length > 0 ) {
				$dataHeightMd.each( function(){
					var element = $(this),
						elementHeight = element.attr('data-height-md');

					if( $body.hasClass('device-md') ) {
						if( elementHeight != '' ) { element.css( 'height', elementHeight ); }
					}
				});
			}

			if( $dataHeightLg.length > 0 ) {
				$dataHeightLg.each( function(){
					var element = $(this),
						elementHeight = element.attr('data-height-lg');

					if( $body.hasClass('device-lg') ) {
						if( elementHeight != '' ) { element.css( 'height', elementHeight ); }
					}
				});
			}
		}

	};

	SEMICOLON.header = {

		init: function(){

			SEMICOLON.header.superfish();
			SEMICOLON.header.menufunctions();
			SEMICOLON.header.fullWidthMenu();
			SEMICOLON.header.overlayMenu();
			SEMICOLON.header.stickyMenu();
			SEMICOLON.header.sideHeader();
			SEMICOLON.header.sidePanel();
			SEMICOLON.header.onePageScroll();
			SEMICOLON.header.onepageScroller();
			SEMICOLON.header.darkLogo();
			SEMICOLON.header.topsearch();
			SEMICOLON.header.topcart();
			SEMICOLON.header.splitmenu();

		},

		superfish: function(){

			if ( $().superfish ) {
				if( $body.hasClass('device-lg') || $body.hasClass('device-md') ) {
					$('#primary-menu ul ul, #primary-menu ul .mega-menu-content').css('display', 'block');
					SEMICOLON.header.menuInvert();
				}

				$('body:not(.side-header) #primary-menu > ul, body:not(.side-header) #primary-menu > div > ul,.top-links > ul').superfish({
					popUpSelector: 'ul,.mega-menu-content,.top-link-section',
					delay: 250,
					speed: 350,
					animation: {opacity:'show'},
					animationOut:  {opacity:'hide'},
					cssArrows: false
				});

				$('body.side-header #primary-menu > ul').superfish({
					popUpSelector: 'ul',
					delay: 250,
					speed: 350,
					animation: {opacity:'show',height:'show'},
					animationOut:  {opacity:'hide',height:'hide'},
					cssArrows: false
				});
			}

		},

		menuInvert: function() {

			$('#primary-menu .mega-menu-content, #primary-menu ul ul').each( function( index, element ){
				var $menuChildElement = $(element);
				var windowWidth = $window.width();
				var menuChildOffset = $menuChildElement.offset();
				var menuChildWidth = $menuChildElement.width();
				var menuChildLeft = menuChildOffset.left;

				if(windowWidth - (menuChildWidth + menuChildLeft) < 0) {
					$menuChildElement.addClass('menu-pos-invert');
				}
			});

		},

		menufunctions: function(){

			$( '#primary-menu ul li:has(ul)' ).addClass('sub-menu');
			$( '.top-links ul li:has(ul) > a' ).append( ' <i class="icon-angle-down"></i>' );
			$( '.top-links > ul' ).addClass( 'clearfix' );

			if( $body.hasClass('device-lg') || $body.hasClass('device-md') ) {
				$('#primary-menu.sub-title > ul > li,#primary-menu.sub-title > div > ul > li').hover(function() {
					$(this).prev().css({ backgroundImage : 'none' });
				}, function() {
					$(this).prev().css({ backgroundImage : 'url("images/icons/menu-divider.png")' });
				});

				$('#primary-menu.sub-title').children('ul').children('.current').prev().css({ backgroundImage : 'none' });
				$('#primary-menu.sub-title').children('div').children('ul').children('.current').prev().css({ backgroundImage : 'none' });
			}

			if( SEMICOLON.isMobile.Android() ) {
				$( '#primary-menu ul li.sub-menu' ).children('a').on('touchstart', function(e){
					if( !$(this).parent('li.sub-menu').hasClass('sfHover') ) {
						e.preventDefault();
					}
				});
			}

			if( SEMICOLON.isMobile.Windows() ) {
				$('#primary-menu > ul, #primary-menu > div > ul,.top-links > ul').superfish('destroy').addClass('windows-mobile-menu');

				$( '#primary-menu ul li:has(ul)' ).append('<a href="#" class="wn-submenu-trigger"><i class="icon-angle-down"></i></a>');

				$( '#primary-menu ul li.sub-menu' ).children('a.wn-submenu-trigger').click( function(e){
					$(this).parent().toggleClass('open');
					$(this).parent().find('> ul, > .mega-menu-content').stop(true,true).toggle();
					return false;
				});
			}

		},

		fullWidthMenu: function(){
			if( $body.hasClass('stretched') ) {
				if( $header.find('.container-fullwidth').length > 0 ) { $('.mega-menu .mega-menu-content').css({ 'width': $wrapper.width() - 120 }); }
				if( $header.hasClass('full-header') ) { $('.mega-menu .mega-menu-content').css({ 'width': $wrapper.width() - 60 }); }
			} else {
				if( $header.find('.container-fullwidth').length > 0 ) { $('.mega-menu .mega-menu-content').css({ 'width': $wrapper.width() - 120 }); }
				if( $header.hasClass('full-header') ) { $('.mega-menu .mega-menu-content').css({ 'width': $wrapper.width() - 80 }); }
			}
		},

		overlayMenu: function(){
			if( $body.hasClass('overlay-menu') ) {
				var overlayMenuItem = $('#primary-menu').children('ul').children('li'),
					overlayMenuItemHeight = overlayMenuItem.outerHeight(),
					overlayMenuItemTHeight = overlayMenuItem.length * overlayMenuItemHeight,
					firstItemOffset = ( $window.height() - overlayMenuItemTHeight ) / 2;

				$('#primary-menu').children('ul').children('li:first-child').css({ 'margin-top': firstItemOffset+'px' });
			}
		},

		stickyMenu: function( headerOffset ){
			if ($window.scrollTop() > headerOffset) {
				if( ( $body.hasClass('device-lg') || $body.hasClass('device-md') ) && !SEMICOLON.isMobile.any() ) {
					$('body:not(.side-header) #header:not(.no-sticky)').addClass('sticky-header');
					$('#page-menu:not(.dots-menu,.no-sticky)').addClass('sticky-page-menu');
$('.page-menu:not(.dots-menu,.no-sticky)').addClass('sticky-page-menu');
					if( !$headerWrap.hasClass('force-not-dark') ) { $headerWrap.removeClass('not-dark'); }
					SEMICOLON.header.stickyMenuClass();
				} else if( $body.hasClass('device-xs') || $body.hasClass('device-xxs') || $body.hasClass('device-sm') ) {
					$('body.sticky-responsive-menu #header:not(.no-sticky)').addClass('responsive-sticky-header');
					SEMICOLON.header.stickyMenuClass();
				} else {
					SEMICOLON.header.removeStickyness();
				}
			} else {
				SEMICOLON.header.removeStickyness();
			}
		},

		removeStickyness: function(){
			if( $header.hasClass('sticky-header') ){
				$('body:not(.side-header) #header:not(.no-sticky)').removeClass('sticky-header');
				$('#page-menu:not(.dots-menu,.no-sticky)').removeClass('sticky-page-menu');
$('.page-menu:not(.dots-menu,.no-sticky)').removeClass('sticky-page-menu');
				$header.removeClass().addClass(oldHeaderClasses);
				$headerWrap.removeClass().addClass(oldHeaderWrapClasses);
				if( !$headerWrap.hasClass('force-not-dark') ) { $headerWrap.removeClass('not-dark'); }
				SEMICOLON.slider.swiperSliderMenu();
				SEMICOLON.slider.revolutionSliderMenu();
				var t=setTimeout(function(){ SEMICOLON.header.splitmenu(); },450);
			}
			if( $header.hasClass('responsive-sticky-header') ){
				$('body.sticky-responsive-menu #header').removeClass('responsive-sticky-header');
			}
			if( $body.hasClass('device-xs') || $body.hasClass('device-xxs') || $body.hasClass('device-sm') ) {
				$header.removeClass().addClass(oldHeaderClasses);
				$headerWrap.removeClass().addClass(oldHeaderWrapClasses);
				if( !$headerWrap.hasClass('force-not-dark') ) { $headerWrap.removeClass('not-dark'); }
			}
		},

		sideHeader: function(){
			$("#header-trigger").click(function(){
				$('body.open-header').toggleClass("side-header-open");
				return false;
			});
		},

		sidePanel: function(){
			if( $body.hasClass('side-push-panel') ) {
				$("#side-panel-trigger,#side-panel-trigger-close").click(function(){
					$('body.side-push-panel').toggleClass("side-panel-open");
					return false;
				});
			}
		},

		onePageScroll: function(){
			if( $onePageMenuEl.length > 0 ){
				var onePageSpeed = $onePageMenuEl.attr('data-speed'),
					onePageOffset = $onePageMenuEl.attr('data-offset'),
					onePageEasing = $onePageMenuEl.attr('data-easing');

				if( !onePageSpeed ) { onePageSpeed = 1000; }
				if( !onePageEasing ) { onePageEasing = 'easeOutQuad'; }

				$onePageMenuEl.find('a[data-href]').click(function(){
					var element = $(this),
						divScrollToAnchor = element.attr('data-href'),
						divScrollSpeed = element.attr('data-speed'),
						divScrollOffset = element.attr('data-offset'),
						divScrollEasing = element.attr('data-easing');

					if( $( divScrollToAnchor ).length > 0 ) {

						if( !onePageOffset ) {
							var onePageOffsetG = SEMICOLON.initialize.topScrollOffset();
						} else {
							var onePageOffsetG = onePageOffset;
						}

						if( !divScrollSpeed ) { divScrollSpeed = onePageSpeed; }
						if( !divScrollOffset ) { divScrollOffset = onePageOffsetG; }
						if( !divScrollEasing ) { divScrollEasing = onePageEasing; }

						if( $onePageMenuEl.hasClass('no-offset') ) { divScrollOffset = 0; }

						onePageGlobalOffset = Number(divScrollOffset);

						$onePageMenuEl.find('li').removeClass('current');
						$onePageMenuEl.find('a[data-href="' + divScrollToAnchor + '"]').parent('li').addClass('current');

						$('#primary-menu > ul, #primary-menu > .container > ul').toggleClass('show', function() {
							$('html,body').stop(true).animate({
								'scrollTop': $( divScrollToAnchor ).offset().top - Number(divScrollOffset)
							}, Number(divScrollSpeed), divScrollEasing);
						}, false);

						onePageGlobalOffset = Number(divScrollOffset);
					}

					return false;
				});
			}
		},

		onepageScroller: function(){
			$onePageMenuEl.find('li').removeClass('current');
			$onePageMenuEl.find('a[data-href="#' + SEMICOLON.header.onePageCurrentSection() + '"]').parent('li').addClass('current');
		},

		onePageCurrentSection: function(){
			var currentOnePageSection = 'home';

			$pageSectionEl.each(function(index) {
				var h = $(this).offset().top;
				var y = $window.scrollTop();

				var offsetScroll = 100 + onePageGlobalOffset;

				if( y + offsetScroll >= h && y < h + $(this).height() && $(this).attr('id') != currentOnePageSection ) {
					currentOnePageSection = $(this).attr('id');
				}
			});

			return currentOnePageSection;
		},

		darkLogo: function(){
			if( ( $header.hasClass('dark') || $body.hasClass('dark') ) && !$headerWrap.hasClass('not-dark') ) {
				if( defaultDarkLogo ){ defaultLogo.find('img').attr('src', defaultDarkLogo); }
				if( retinaDarkLogo ){ retinaLogo.find('img').attr('src', retinaDarkLogo); }
			} else {
				if( defaultLogoImg ){ defaultLogo.find('img').attr('src', defaultLogoImg); }
				if( retinaLogoImg ){ retinaLogo.find('img').attr('src', retinaLogoImg); }
			}
		},

		stickyMenuClass: function(){
			if( stickyMenuClasses ) { var newClassesArray = stickyMenuClasses.split(/ +/); } else { var newClassesArray = ''; }
			var noOfNewClasses = newClassesArray.length;

			if( noOfNewClasses > 0 ) {
				var i = 0;
				for( i=0; i<noOfNewClasses; i++ ) {
					if( newClassesArray[i] == 'not-dark' ) {
						$header.removeClass('dark');
						$headerWrap.addClass('not-dark');
					} else if( newClassesArray[i] == 'dark' ) {
						$headerWrap.removeClass('not-dark force-not-dark');
						if( !$header.hasClass( newClassesArray[i] ) ) {
							$header.addClass( newClassesArray[i] );
						}
					} else if( !$header.hasClass( newClassesArray[i] ) ) {
						$header.addClass( newClassesArray[i] );
					}
				}
			}

		},

		topsocial: function(){
			if( $topSocialEl.length > 0 ){
				if( $body.hasClass('device-md') || $body.hasClass('device-lg') ) {
					$topSocialEl.show();
					$topSocialEl.find('a').css({width: 40});

					$topSocialEl.find('.ts-text').each( function(){
						var $clone = $(this).clone().css({'visibility': 'hidden', 'display': 'inline-block', 'font-size': '13px', 'font-weight':'bold'}).appendTo($body),
							cloneWidth = $clone.innerWidth() + 52;
						$(this).parent('a').attr('data-hover-width',cloneWidth);
						$clone.remove();
					});

					$topSocialEl.find('a').hover(function() {
						if( $(this).find('.ts-text').length > 0 ) {
							$(this).css({width: $(this).attr('data-hover-width')});
						}
					}, function() {
						$(this).css({width: 40});
					});
				} else {
					$topSocialEl.show();
					$topSocialEl.find('a').css({width: 40});

					$topSocialEl.find('a').each(function() {
						var topIconTitle = $(this).find('.ts-text').text();
						$(this).attr('title', topIconTitle);
					});

					$topSocialEl.find('a').hover(function() {
						$(this).css({width: 40});
					}, function() {
						$(this).css({width: 40});
					});

					if( $body.hasClass('device-xxs') ) {
						$topSocialEl.hide();
						$topSocialEl.slice(0, 8).show();
					}
				}
			}
		},

		topsearch: function(){

			$(document).on('click', function(event) {
				if (!$(event.target).closest('#top-search').length) { $body.toggleClass('top-search-open', false); }
				if (!$(event.target).closest('#top-cart').length) { $topCart.toggleClass('top-cart-open', false); }
				if (!$(event.target).closest('#page-menu').length) { $pagemenu.toggleClass('pagemenu-active', false); }
				if (!$(event.target).closest('#side-panel').length) { $body.toggleClass('side-panel-open', false); }
			});

			$("#top-search-trigger").click(function(e){
				$body.toggleClass('top-search-open');
				$topCart.toggleClass('top-cart-open', false);
				$( '#primary-menu > ul, #primary-menu > div > ul' ).toggleClass("show", false);
				$pagemenu.toggleClass('pagemenu-active', false);
				if ($body.hasClass('top-search-open')){
					$topSearch.find('input').focus();
				}
				e.stopPropagation();
				e.preventDefault();
			});

		},

		topcart: function(){

			$("#top-cart-trigger").click(function(e){
				$pagemenu.toggleClass('pagemenu-active', false);
				$topCart.toggleClass('top-cart-open');
				e.stopPropagation();
				e.preventDefault();
			});

		},

		splitmenu: function(){

			if( ( $body.hasClass('device-lg') || $body.hasClass('device-md') ) && $header.hasClass('split-menu') ) {
				var element = $('#logo'),
					logoWidth = defaultLogo.find('img').outerWidth(),
					logoPosition = logoWidth/2,
					menuPadding = logoPosition + 30;

				element.css({ 'margin-left': -logoPosition+'px' });

				$('#primary-menu').find('.menu-left').css({ 'padding-right': menuPadding+'px' });
				$('#primary-menu').find('.menu-right').css({ 'padding-left': menuPadding+'px' });
			}

		}

	};

	SEMICOLON.slider = {

		init: function() {

			SEMICOLON.slider.sliderParallax();
			SEMICOLON.slider.sliderElementsFade();
			SEMICOLON.slider.captionPosition();

		},

		sliderParallaxOffset: function(){
			var sliderParallaxOffsetTop = 0;
			var headerHeight = $header.outerHeight();
			if( $body.hasClass('side-header') || $header.hasClass('transparent-header') ) { headerHeight = 0; }
			if( $pageTitle.length > 0 ) {
				var pageTitleHeight = $pageTitle.outerHeight();
				sliderParallaxOffsetTop = pageTitleHeight + headerHeight;
			} else {
				sliderParallaxOffsetTop = headerHeight;
			}

			if( $slider.next('#header').length > 0 ) { sliderParallaxOffsetTop = 0; }

			return sliderParallaxOffsetTop;
		},

		sliderParallax: function(){
			if( $sliderParallaxEl.length > 0 ) {
				if( ( $body.hasClass('device-lg') || $body.hasClass('device-md') ) && !SEMICOLON.isMobile.any() ) {
					var parallaxOffsetTop = SEMICOLON.slider.sliderParallaxOffset(),
						parallaxElHeight = $sliderParallaxEl.outerHeight();

					if( ( parallaxElHeight + parallaxOffsetTop + 50 ) > $window.scrollTop() ){
						if ($window.scrollTop() > parallaxOffsetTop) {
							var tranformAmount = (($window.scrollTop()-parallaxOffsetTop) / 1.5 ).toFixed(2);
							var tranformAmount2 = (($window.scrollTop()-parallaxOffsetTop) / 7 ).toFixed(2);
							$sliderParallaxEl.stop(true,true).transition({ y: tranformAmount },0);
							$('.slider-parallax .slider-caption,.ei-title').stop(true,true).transition({ y: -tranformAmount2 },0);
						} else {
							$('.slider-parallax,.slider-parallax .slider-caption,.ei-title').transition({ y: 0 },0);
						}
					}
				} else {
					$('.slider-parallax,.slider-parallax .slider-caption,.ei-title').transition({ y: 0 },0);
				}
			}
		},

		sliderElementsFade: function(){
			if( $sliderParallaxEl.length > 0 ) {
				if( ( $body.hasClass('device-lg') || $body.hasClass('device-md') ) && !SEMICOLON.isMobile.any() ) {
					var parallaxOffsetTop = SEMICOLON.slider.sliderParallaxOffset();
					if( $slider.length > 0 ) {
						if( $header.hasClass('transparent-header') || $('body').hasClass('side-header') ) { var tHeaderOffset = 100; } else { var tHeaderOffset = 0; }
						$sliderParallaxEl.find('#slider-arrow-left,#slider-arrow-right,.vertical-middle:not(.no-fade),.slider-caption,.ei-title,.camera_prev,.camera_next').css({'opacity':( ( 100 + ( $slider.offset().top + parallaxOffsetTop + tHeaderOffset ) - $window.scrollTop() ) ) /90});
					}
				} else {
					$sliderParallaxEl.find('#slider-arrow-left,#slider-arrow-right,.vertical-middle:not(.no-fade),.slider-caption,.ei-title,.camera_prev,.camera_next').css({'opacity': 1});
				}
			}
		},

		captionPosition: function(){
			$slider.find('.slider-caption').each(function(){
				var scapHeight = $(this).outerHeight();
				var scapSliderHeight = $slider.outerHeight();
				if( $(this).parents('#slider').prev('#header').hasClass('transparent-header') && ( $body.hasClass('device-lg') || $body.hasClass('device-md') ) ) {
					if( $(this).parents('#slider').prev('#header').hasClass('floating-header') ) {
						$(this).css({ top: ( scapSliderHeight + 160 - scapHeight ) / 2 + 'px' });
					} else {
						$(this).css({ top: ( scapSliderHeight + 100 - scapHeight ) / 2 + 'px' });
					}
				} else {
					$(this).css({ top: ( scapSliderHeight - scapHeight ) / 2 + 'px' });
				}
			});
		},

		swiperSliderMenu: function(){
			if( $body.hasClass('device-lg') || $body.hasClass('device-md') ) {
				var activeSlide = $slider.find('.swiper-slide.swiper-slide-visible');
				SEMICOLON.slider.headerSchemeChanger(activeSlide);
			}
		},

		revolutionSliderMenu: function(){
			if( $body.hasClass('device-lg') || $body.hasClass('device-md') ) {
				var activeSlide = $slider.find('.current-sr-slide-visible');
				SEMICOLON.slider.headerSchemeChanger(activeSlide);
			}
		},

		headerSchemeChanger: function( activeSlide ){
			if( activeSlide.length > 0 ) {
				if( activeSlide.hasClass('dark') ){
					$('#header.transparent-header:not(.sticky-header,.semi-transparent,.floating-header)').addClass('dark');
					$('#header.transparent-header.sticky-header,#header.transparent-header.semi-transparent.sticky-header,#header.transparent-header.floating-header.sticky-header').removeClass('dark');
					$headerWrap.removeClass('not-dark');
				} else {
					if( $body.hasClass('dark') ) {
						activeSlide.addClass('not-dark');
						$('#header.transparent-header:not(.semi-transparent,.floating-header)').removeClass('dark');
						$('#header.transparent-header:not(.sticky-header,.semi-transparent,.floating-header)').find('#header-wrap').addClass('not-dark');
					} else {
						$('#header.transparent-header:not(.semi-transparent,.floating-header)').removeClass('dark');
						$headerWrap.removeClass('not-dark');
					}
				}
				SEMICOLON.header.darkLogo();
			}
		},

		owlCaptionInit: function(){
			if( $owlCarouselEl.length > 0 ){
				$owlCarouselEl.each( function(){
					var element = $(this);
					if( element.find('.owl-dot').length > 0 ) {
						element.find('.owl-controls').addClass('with-carousel-dots');
					}
				});
			}
		}

	};

	SEMICOLON.portfolio = {

		init: function(){

			SEMICOLON.portfolio.ajaxload();

		},

		portfolioDescMargin: function(){
			var $portfolioOverlayEl = $('.portfolio-overlay');
			if( $portfolioOverlayEl.length > 0 ){
				$portfolioOverlayEl.each(function() {
					var element = $(this);
					if( element.find('.portfolio-desc').length > 0 ) {
						var portfolioOverlayHeight = element.outerHeight();
						var portfolioOverlayDescHeight = element.find('.portfolio-desc').outerHeight();
						if( element.find('a.left-icon').length > 0 || element.find('a.right-icon').length > 0 || element.find('a.center-icon').length > 0 ) {
							var portfolioOverlayIconHeight = 40 + 20;
						} else {
							var portfolioOverlayIconHeight = 0;
						}
						var portfolioOverlayMiddleAlign = ( portfolioOverlayHeight - portfolioOverlayDescHeight - portfolioOverlayIconHeight ) / 2
						element.find('.portfolio-desc').css({ 'margin-top': portfolioOverlayMiddleAlign });
					}
				});
			}
		},

		arrange: function(){
			SEMICOLON.initialize.setFullColumnWidth( $portfolio );
			$('#portfolio.portfolio-full').isotope('layout');
		},

		ajaxload: function(){
			$('.portfolio-ajax .portfolio-item a.center-icon').click( function(e) {
				var portPostId = $(this).parents('.portfolio-item').attr('id');
				if( !$(this).parents('.portfolio-item').hasClass('portfolio-active') ) {
					SEMICOLON.portfolio.loadItem(portPostId, prevPostPortId);
				}
				e.preventDefault();
			});
		},

		newNextPrev: function( portPostId ){
			var portNext = SEMICOLON.portfolio.getNextItem(portPostId);
			var portPrev = SEMICOLON.portfolio.getPrevItem(portPostId);
			$('#next-portfolio').attr('data-id', portNext);
			$('#prev-portfolio').attr('data-id', portPrev);
		},

		loadItem: function( portPostId, prevPostPortId, getIt ){
			if(!getIt) { getIt = false; }
			var portNext = SEMICOLON.portfolio.getNextItem(portPostId);
			var portPrev = SEMICOLON.portfolio.getPrevItem(portPostId);
			if(getIt == false) {
				SEMICOLON.portfolio.closeItem();
				$portfolioAjaxLoader.fadeIn();
				var portfolioDataLoader = $('#' + portPostId).attr('data-loader');
				$portfolioDetailsContainer.load(portfolioDataLoader, { portid: portPostId, portnext: portNext, portprev: portPrev },
				function(){
					SEMICOLON.portfolio.initializeAjax(portPostId);
					SEMICOLON.portfolio.openItem();
					$portfolioItems.removeClass('portfolio-active');
					$('#' + portPostId).addClass('portfolio-active');
				});
			}
		},

		closeItem: function(){
			if( $portfolioDetails && $portfolioDetails.height() > 32 ) {
				$portfolioAjaxLoader.fadeIn();
				$portfolioDetails.find('#portfolio-ajax-single').fadeOut('600', function(){
					$(this).remove();
				});
				$portfolioDetails.removeClass('portfolio-ajax-opened');
			}
		},

		openItem: function(){
			var noOfImages = $portfolioDetails.find('img').length;
			var noLoaded = 0;

			if( noOfImages > 0 ) {
				$portfolioDetails.find('img').on('load', function(){
					noLoaded++;
					var topOffsetScroll = SEMICOLON.initialize.topScrollOffset();
					if(noOfImages === noLoaded) {
						$portfolioDetailsContainer.css({ 'display': 'block' });
						$portfolioDetails.addClass('portfolio-ajax-opened');
						$portfolioAjaxLoader.fadeOut();
						var t=setTimeout(function(){
							SEMICOLON.widget.loadFlexSlider();
							SEMICOLON.initialize.lightbox();
							SEMICOLON.initialize.resizeVideos();
							SEMICOLON.widget.masonryThumbs();
							$('html,body').stop(true).animate({
								'scrollTop': $portfolioDetails.offset().top - topOffsetScroll
							}, 900, 'easeOutQuad');
						},500);
					}
				});
			} else {
				var topOffsetScroll = SEMICOLON.initialize.topScrollOffset();
				$portfolioDetailsContainer.css({ 'display': 'block' });
				$portfolioDetails.addClass('portfolio-ajax-opened');
				$portfolioAjaxLoader.fadeOut();
				var t=setTimeout(function(){
					SEMICOLON.widget.loadFlexSlider();
					SEMICOLON.initialize.lightbox();
					SEMICOLON.initialize.resizeVideos();
					SEMICOLON.widget.masonryThumbs();
					$('html,body').stop(true).animate({
						'scrollTop': $portfolioDetails.offset().top - topOffsetScroll
					}, 900, 'easeOutQuad');
				},500);
			}
		},

		getNextItem: function( portPostId ){
			var portNext = '';
			var hasNext = $('#' + portPostId).next();
			if(hasNext.length != 0) {
				portNext = hasNext.attr('id');
			}
			return portNext;
		},

		getPrevItem: function( portPostId ){
			var portPrev = '';
			var hasPrev = $('#' + portPostId).prev();
			if(hasPrev.length != 0) {
				portPrev = hasPrev.attr('id');
			}
			return portPrev;
		},

		initializeAjax: function( portPostId ){
			prevPostPortId = $('#' + portPostId);

			$('#next-portfolio, #prev-portfolio').click( function() {
				var portPostId = $(this).attr('data-id');
				$portfolioItems.removeClass('portfolio-active');
				$('#' + portPostId).addClass('portfolio-active');
				SEMICOLON.portfolio.loadItem(portPostId,prevPostPortId);
				return false;
			});

			$('#close-portfolio').click( function() {
				$portfolioDetailsContainer.fadeOut('600', function(){
					$portfolioDetails.find('#portfolio-ajax-single').remove();
				});
				$portfolioDetails.removeClass('portfolio-ajax-opened');
				$portfolioItems.removeClass('portfolio-active');
				return false;
			});
		}

	};

	SEMICOLON.widget = {

		init: function(){

			SEMICOLON.widget.animations();
			SEMICOLON.widget.youtubeBgVideo();
			SEMICOLON.widget.tabs();
			SEMICOLON.widget.toggles();
			SEMICOLON.widget.accordions();
			SEMICOLON.widget.counter();
			SEMICOLON.widget.roundedSkill();
			SEMICOLON.widget.progress();
			SEMICOLON.widget.flickrFeed();
			SEMICOLON.widget.instagramPhotos( '36286274.b9e559e.4824cbc1d0c94c23827dc4a2267a9f6b', 'b9e559ec7c284375bf41e9a9fb72ae01' );
			SEMICOLON.widget.dribbbleShots();
			SEMICOLON.widget.textRotater();
			SEMICOLON.widget.linkScroll();
			SEMICOLON.widget.extras();

		},

		parallax: function(){
			if( !SEMICOLON.isMobile.any() ){
				$.stellar({
					horizontalScrolling: false,
					verticalOffset: 150,
					responsive: true
				});
			} else {
				$parallaxEl.addClass('mobile-parallax');
				$parallaxPageTitleEl.addClass('mobile-parallax');
			}
		},

		animations: function(){
			var $dataAnimateEl = $('[data-animate]');
			if( $dataAnimateEl.length > 0 ){
				if( $body.hasClass('device-lg') || $body.hasClass('device-md') || $body.hasClass('device-sm') ){
					$dataAnimateEl.each(function(){
						var element = $(this),
							animationDelay = element.attr('data-delay'),
							animationDelayTime = 0;

						if( animationDelay ) { animationDelayTime = Number( animationDelay ) + 500; } else { animationDelayTime = 500; }

						if( !element.hasClass('animated') ) {
							element.addClass('not-animated');
							var elementAnimation = element.attr('data-animate');
							element.appear(function () {
								setTimeout(function() {
									element.removeClass('not-animated').addClass( elementAnimation + ' animated');
								}, animationDelayTime);
							},{accX: 0, accY: -120},'easeInCubic');
						}
					});
				}
			}
		},

		loadFlexSlider: function(){
			var $flexSliderEl = $('.fslider').find('.flexslider');
			if( $flexSliderEl.length > 0 ){
				$flexSliderEl.each(function() {
					var $flexsSlider = $(this),
						flexsAnimation = $flexsSlider.parent('.fslider').attr('data-animation'),
						flexsEasing = $flexsSlider.parent('.fslider').attr('data-easing'),
						flexsDirection = $flexsSlider.parent('.fslider').attr('data-direction'),
						flexsSlideshow = $flexsSlider.parent('.fslider').attr('data-slideshow'),
						flexsPause = $flexsSlider.parent('.fslider').attr('data-pause'),
						flexsSpeed = $flexsSlider.parent('.fslider').attr('data-speed'),
						flexsVideo = $flexsSlider.parent('.fslider').attr('data-video'),
						flexsPagi = $flexsSlider.parent('.fslider').attr('data-pagi'),
						flexsArrows = $flexsSlider.parent('.fslider').attr('data-arrows'),
						flexsThumbs = $flexsSlider.parent('.fslider').attr('data-thumbs'),
						flexsHover = $flexsSlider.parent('.fslider').attr('data-hover'),
						flexsSheight = true,
						flexsUseCSS = false;

					if( !flexsAnimation ) { flexsAnimation = 'slide'; }
					if( !flexsEasing || flexsEasing == 'swing' ) {
						flexsEasing = 'swing';
						flexsUseCSS = true;
					}
					if( !flexsDirection ) { flexsDirection = 'horizontal'; }
					if( !flexsSlideshow ) { flexsSlideshow = true; } else { flexsSlideshow = false; }
					if( !flexsPause ) { flexsPause = 5000; }
					if( !flexsSpeed ) { flexsSpeed = 600; }
					if( !flexsVideo ) { flexsVideo = false; }
					if( flexsDirection == 'vertical' ) { flexsSheight = false; }
					if( flexsPagi == 'false' ) { flexsPagi = false; } else { flexsPagi = true; }
					if( flexsThumbs == 'true' ) { flexsPagi = 'thumbnails'; } else { flexsPagi = flexsPagi; }
					if( flexsArrows == 'false' ) { flexsArrows = false; } else { flexsArrows = true; }
					if( flexsHover == 'false' ) { flexsHover = false; } else { flexsHover = true; }

					$flexsSlider.flexslider({
						selector: ".slider-wrap > .slide",
						animation: flexsAnimation,
						easing: flexsEasing,
						direction: flexsDirection,
						slideshow: flexsSlideshow,
						slideshowSpeed: Number(flexsPause),
						animationSpeed: Number(flexsSpeed),
						pauseOnHover: flexsHover,
						video: flexsVideo,
						controlNav: flexsPagi,
						directionNav: flexsArrows,
						smoothHeight: flexsSheight,
						useCSS: flexsUseCSS,
						start: function(slider){
							SEMICOLON.widget.animations();
							SEMICOLON.initialize.verticalMiddle();
							slider.parent().removeClass('preloader2');
							var t = setTimeout( function(){ $('#portfolio.portfolio-masonry,#portfolio.portfolio-full,#posts.post-masonry').isotope('layout'); }, 1200 );
							SEMICOLON.initialize.lightbox();
							$('.flex-prev').html('<i class="icon-angle-left"></i>');
							$('.flex-next').html('<i class="icon-angle-right"></i>');
							SEMICOLON.portfolio.portfolioDescMargin();
						},
						after: function(){
							if( $portfolio.has('portfolio-full') ) {
								$('#portfolio.portfolio-full').isotope('layout');
								SEMICOLON.portfolio.portfolioDescMargin();
							}
						}
					});
				});
			}
		},

		html5Video: function(){
			var videoEl = $('.video-wrap:has(video)');
			if( videoEl.length > 0 ) {
				videoEl.each(function(){
					var element = $(this),
						elementVideo = element.find('video'),
						outerContainerWidth = element.outerWidth(),
						outerContainerHeight = element.outerHeight(),
						innerVideoWidth = elementVideo.outerWidth(),
						innerVideoHeight = elementVideo.outerHeight();

					if( innerVideoHeight < outerContainerHeight ) {
						var videoAspectRatio = innerVideoWidth/innerVideoHeight,
							newVideoWidth = outerContainerHeight * videoAspectRatio,
							innerVideoPosition = (newVideoWidth - outerContainerWidth) / 2;
						elementVideo.css({ 'width': newVideoWidth+'px', 'height': outerContainerHeight+'px', 'left': -innerVideoPosition+'px' });
					} else {
						var innerVideoPosition = (innerVideoHeight - outerContainerHeight) / 2;
						elementVideo.css({ 'width': innerVideoWidth+'px', 'height': innerVideoHeight+'px', 'top': -innerVideoPosition+'px' });
					}

					if( SEMICOLON.isMobile.any() ) {
						var placeholderImg = elementVideo.attr('poster');

						if( placeholderImg != '' ) {
							element.append('<div class="video-placeholder" style="background-image: url('+ placeholderImg +');"></div>')
						}
					}
				});
			}
		},

		youtubeBgVideo: function(){
			if( $youtubeBgPlayerEl.length > 0 ){
				$youtubeBgPlayerEl.each( function(){
					var element = $(this),
						ytbgVideo = element.attr('data-video'),
						ytbgMute = element.attr('data-mute'),
						ytbgRatio = element.attr('data-ratio'),
						ytbgQuality = element.attr('data-quality'),
						ytbgOpacity = element.attr('data-opacity'),
						ytbgContainer = element.attr('data-container'),
						ytbgOptimize = element.attr('data-optimize'),
						ytbgLoop = element.attr('data-loop'),
						ytbgVolume = element.attr('data-volume'),
						ytbgStart = element.attr('data-start'),
						ytbgStop = element.attr('data-stop'),
						ytbgAutoPlay = element.attr('data-autoplay'),
						ytbgFullScreen = element.attr('data-fullscreen');

					if( ytbgMute == 'false' ) { ytbgMute = false; } else { ytbgMute = true; }
					if( !ytbgRatio ) { ytbgRatio = '16/9'; }
					if( !ytbgQuality ) { ytbgQuality = 'hd720'; }
					if( !ytbgOpacity ) { ytbgOpacity = 1; }
					if( !ytbgContainer ) { ytbgContainer = 'self'; }
					if( ytbgOptimize == 'false' ) { ytbgOptimize = false; } else { ytbgOptimize = true; }
					if( ytbgLoop == 'false' ) { ytbgLoop = false; } else { ytbgLoop = true; }
					if( !ytbgVolume ) { ytbgVolume = 1; }
					if( !ytbgStart ) { ytbgStart = 0; }
					if( !ytbgStop ) { ytbgStop = 0; }
					if( ytbgAutoPlay == 'false' ) { ytbgAutoPlay = false; } else { ytbgAutoPlay = true; }
					if( ytbgFullScreen == 'true' ) { ytbgFullScreen = true; } else { ytbgFullScreen = false; }

					element.mb_YTPlayer({
						videoURL: ytbgVideo,
						mute: ytbgMute,
						ratio: ytbgRatio,
						quality: ytbgQuality,
						opacity: ytbgOpacity,
						containment: ytbgContainer,
						optimizeDisplay: ytbgOptimize,
						loop: ytbgLoop,
						vol: ytbgVolume,
						startAt: ytbgStart,
						stopAt: ytbgStop,
						autoplay: ytbgAutoPlay,
						realfullscreen: ytbgFullScreen,
						showYTLogo: false,
						showControls: false
					});
				});
			}
		},

		tabs: function(){
			var $tabs = $('.tabs:not(.customjs)');
			if( $tabs.length > 0 ) {
				$tabs.each( function(){
					var element = $(this),
						elementSpeed = element.attr('data-speed'),
						tabActive = element.attr('data-active');

					if( !elementSpeed ) { elementSpeed = 400; }
					if( !tabActive ) { tabActive = 0; } else { tabActive = tabActive - 1; }

					element.tabs({
						active: Number(tabActive),
						show: {
							effect: "fade",
							duration: Number(elementSpeed)
						}
					});
				});
			}
		},

		toggles: function(){
			var $toggle = $('.toggle');
			if( $toggle.length > 0 ) {
				$toggle.each( function(){
					var element = $(this),
						elementState = element.attr('data-state');

					if( elementState != 'open' ){
						element.find('.togglec').hide();
					} else {
						element.find('.togglet').addClass("toggleta");
					}

					element.find('.togglet').click(function(){
						$(this).toggleClass('toggleta').next('.togglec').slideToggle(300);
						return true;
					});
				});
			}
		},

		accordions: function(){
			var $accordionEl = $('.accordion');
			if( $accordionEl.length > 0 ){
				$accordionEl.each( function(){
					var element = $(this),
						elementState = element.attr('data-state'),
						accordionActive = element.attr('data-active');

					if( !accordionActive ) { accordionActive = 0; } else { accordionActive = accordionActive - 1; }

					element.find('.acc_content').hide();

					if( elementState != 'closed' ) {
						element.find('.acctitle:eq('+ Number(accordionActive) +')').addClass('acctitlec').next().show();
					}

					element.find('.acctitle').click(function(){
						if( $(this).next().is(':hidden') ) {
							element.find('.acctitle').removeClass('acctitlec').next().slideUp("normal");
							$(this).toggleClass('acctitlec').next().slideDown("normal");
						}
						return false;
					});
				});
			}
		},

		counter: function(){
			var $counterEl = $('.counter:not(.counter-instant)');
			if( $counterEl.length > 0 ){
				$counterEl.each(function(){
					var element = $(this);
					var counterElementComma = $(this).find('span').attr('data-comma');
					if( !counterElementComma ) { counterElementComma = false; } else { counterElementComma = true; }
					if( $body.hasClass('device-lg') || $body.hasClass('device-md') ){
						element.appear( function(){
							SEMICOLON.widget.runCounter( element, counterElementComma );
						},{accX: 0, accY: -120},'easeInCubic');
					} else {
						SEMICOLON.widget.runCounter( element, counterElementComma );
					}
				});
			}
		},

		runCounter: function( counterElement,counterElementComma ){
			if( counterElementComma == true ) {
				counterElement.find('span').countTo({
					formatter: function (value, options) {
						value = value.toFixed(options.decimals);
						value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
						return value;
					}
				});
			} else {
				counterElement.find('span').countTo();
			}
		},

		roundedSkill: function(){
			var $roundedSkillEl = $('.rounded-skill');
			if( $roundedSkillEl.length > 0 ){
				$roundedSkillEl.each(function(){
					var element = $(this);

					var roundSkillSize = element.attr('data-size');
					var roundSkillAnimate = element.attr('data-animate');
					var roundSkillWidth = element.attr('data-width');
					var roundSkillColor = element.attr('data-color');
					var roundSkillTrackColor = element.attr('data-trackcolor');

					if( !roundSkillSize ) { roundSkillSize = 140; }
					if( !roundSkillAnimate ) { roundSkillAnimate = 2000; }
					if( !roundSkillWidth ) { roundSkillWidth = 8; }
					if( !roundSkillColor ) { roundSkillColor = '#0093BF'; }
					if( !roundSkillTrackColor ) { roundSkillTrackColor = 'rgba(0,0,0,0.04)'; }

					var properties = {roundSkillSize:roundSkillSize, roundSkillAnimate:roundSkillAnimate, roundSkillWidth:roundSkillWidth, roundSkillColor:roundSkillColor, roundSkillTrackColor:roundSkillTrackColor};

					if( $body.hasClass('device-lg') || $body.hasClass('device-md') ){
						element.css({'width':roundSkillSize+'px','height':roundSkillSize+'px'}).animate({opacity: '0'}, 10);
						element.appear( function(){
							if (!element.hasClass('skills-animated')) {
								element.css({opacity: '1'});
								SEMICOLON.widget.runRoundedSkills( element, properties );
								element.addClass('skills-animated');
							}
						},{accX: 0, accY: -120},'easeInCubic');
					} else {
						SEMICOLON.widget.runRoundedSkills( element, properties );
					}
				});
			}
		},

		runRoundedSkills: function( element, properties ){
			element.easyPieChart({
				size: Number(properties.roundSkillSize),
				animate: Number(properties.roundSkillAnimate),
				scaleColor: false,
				trackColor: properties.roundSkillTrackColor,
				lineWidth: Number(properties.roundSkillWidth),
				lineCap: 'square',
				barColor: properties.roundSkillColor
			});
		},

		progress: function(){
			var $progressEl = $('.progress');
			if( $progressEl.length > 0 ){
				$progressEl.each(function(){
					var element = $(this),
						skillsBar = element.parent('li'),
						skillValue = skillsBar.attr('data-percent');

					if( $body.hasClass('device-lg') || $body.hasClass('device-md') ){
						element.appear( function(){
							if (!skillsBar.hasClass('skills-animated')) {
								element.find('.counter-instant span').countTo();
								skillsBar.find('.progress').css({width: skillValue + "%"}).addClass('skills-animated');
							}
						},{accX: 0, accY: -120},'easeInCubic');
					} else {
						element.find('.counter-instant span').countTo();
						skillsBar.find('.progress').css({width: skillValue + "%"});
					}
				});
			}
		},

		flickrFeed: function(){
			var $flickrFeedEl = $('.flickr-feed');
			if( $flickrFeedEl.length > 0 ){
				$flickrFeedEl.each(function() {
					var element = $(this),
						flickrFeedID = element.attr('data-id'),
						flickrFeedCount = element.attr('data-count'),
						flickrFeedType = element.attr('data-type'),
						flickrFeedTypeGet = 'photos_public.gne';

					if( flickrFeedType == 'group' ) { flickrFeedTypeGet = 'groups_pool.gne'; }
					if( !flickrFeedCount ) { flickrFeedCount = 9; }

					element.jflickrfeed({
						feedapi: flickrFeedTypeGet,
						limit: Number(flickrFeedCount),
						qstrings: {
							id: flickrFeedID
						},
						itemTemplate: '<a href="{{image_b}}" title="{{title}}" data-lightbox="gallery-item">' +
											'<img src="{{image_s}}" alt="{{title}}" />' +
									  '</a>'
					}, function(data) {
						SEMICOLON.initialize.lightbox();
					});
				});
			}
		},

		instagramPhotos: function( c_accessToken, c_clientID ){
			var $instagramPhotosEl = $('.instagram-photos');
			if( $instagramPhotosEl.length > 0 ){
				$.fn.spectragram.accessData = {
					accessToken: c_accessToken,
					clientID: c_clientID
				};

				$instagramPhotosEl.each(function() {
					var element = $(this),
						instaGramUsername = element.attr('data-user'),
						instaGramTag = element.attr('data-tag'),
						instaGramCount = element.attr('data-count'),
						instaGramType = element.attr('data-type');

					if( !instaGramCount ) { instaGramCount = 9; }

					if( instaGramType == 'tag' ) {
						element.spectragram('getRecentTagged',{
							query: instaGramTag,
							max: Number( instaGramCount ),
							size: 'medium',
							wrapEachWith: ' '
						});
					} else if( instaGramType == 'user' ) {
						element.spectragram('getUserFeed',{
							query: instaGramUsername,
							max: Number( instaGramCount ),
							size: 'medium',
							wrapEachWith: ' '
						});
					} else {
						element.spectragram('getPopular',{
							max: Number( instaGramCount ),
							size: 'medium',
							wrapEachWith: ' '
						});
					}
				});
			}
		},

		dribbbleShots: function(){
			var $dribbbleShotsEl = $('.dribbble-shots');
			if( $dribbbleShotsEl.length > 0 ){
				$dribbbleShotsEl.each(function() {
					var element = $(this),
						dribbbleUsername = element.attr('data-user'),
						dribbbleCount = element.attr('data-count'),
						dribbbleList = element.attr('data-list'),
						dribbbleType = element.attr('data-type');

					if( !dribbbleCount ) { dribbbleCount = 9; }

					if( dribbbleType == 'follows' ) {
						$.jribbble.getShotsThatPlayerFollows( dribbbleUsername , function (followedShots) {
							var html = [];
							$.each(followedShots.shots, function (i, shot) {
								html.push('<a href="' + shot.url + '" target="_blank">');
								html.push('<img src="' + shot.image_teaser_url + '" ');
								html.push('alt="' + shot.title + '"></a>');
							});
							element.html(html.join(''));
						}, {page: 1, per_page: Number(dribbbleCount)});
					} else if( dribbbleType == 'user' ) {
						$.jribbble.getShotsByPlayerId( dribbbleUsername , function (playerShots) {
							var html = [];
							$.each(playerShots.shots, function (i, shot) {
								html.push('<a href="' + shot.url + '" target="_blank">');
								html.push('<img src="' + shot.image_teaser_url + '" ');
								html.push('alt="' + shot.title + '"></a>');
							});
							element.html(html.join(''));
						}, {page: 1, per_page: Number(dribbbleCount)});
					} else if( dribbbleType == 'list' ) {
						$.jribbble.getShotsByList( dribbbleList , function (listDetails) {
							var html = [];
							$.each(listDetails.shots, function (i, shot) {
								html.push('<a href="' + shot.url + '" target="_blank">');
								html.push('<img src="' + shot.image_teaser_url + '" ');
								html.push('alt="' + shot.title + '"></a>');
							});
							element.html(html.join(''));
						}, {page: 1, per_page: Number(dribbbleCount)});
					}
				});
			}
		},

		masonryThumbs: function(){
			var $masonryThumbsEl = $('.masonry-thumbs');
			if( $masonryThumbsEl.length > 0 ){
				$masonryThumbsEl.each( function(){
					var masonryItemContainer = $(this);
					SEMICOLON.widget.masonryThumbsArrange( masonryItemContainer );
				});
			}
		},

		masonryThumbsArrange: function( element ){
			SEMICOLON.initialize.setFullColumnWidth( element );
			element.isotope('layout');
		},

		notifications: function( element ){
			toastr.clear();
			var notifyElement = $(element),
				notifyPosition = notifyElement.attr('data-notify-position'),
				notifyType = notifyElement.attr('data-notify-type'),
				notifyMsg = notifyElement.attr('data-notify-msg'),
				notifyCloseButton = notifyElement.attr('data-notify-close');

			if( !notifyPosition ) { notifyPosition = 'toast-top-right'; } else { notifyPosition = 'toast-' + notifyElement.attr('data-notify-position'); }
			if( !notifyMsg ) { notifyMsg = 'Please set a message!'; }
			if( notifyCloseButton == 'true' ) { notifyCloseButton = true; } else { notifyCloseButton = false; }

			toastr.options.positionClass = notifyPosition;
			toastr.options.closeButton = notifyCloseButton;
			toastr.options.closeHtml = '<button><i class="icon-remove"></i></button>';

			if( notifyType == 'warning' ) {
				toastr.warning(notifyMsg);
			} else if( notifyType == 'error' ) {
				toastr.error(notifyMsg);
			} else if( notifyType == 'success' ) {
				toastr.success(notifyMsg);
			} else {
				toastr.info(notifyMsg);
			}

			return false;
		},

		textRotater: function(){
			if( $textRotaterEl.length > 0 ){
				$textRotaterEl.each(function(){
					var element = $(this),
						trRotate = $(this).attr('data-rotate'),
						trSpeed = $(this).attr('data-speed'),
						trSeparator = $(this).attr('data-separator');

					if( !trRotate ) { trRotate = "fade"; }
					if( !trSpeed ) { trSpeed = 1200; }
					if( !trSeparator ) { trSeparator = ","; }

					var tRotater = $(this).find('.t-rotate');

					tRotater.Morphext({
						animation: trRotate,
						separator: trSeparator,
						speed: Number(trSpeed)
					});
				});
			}
		},

		linkScroll: function(){
			$("a[data-scrollto]").click(function(){
				var element = $(this),
					divScrollToAnchor = element.attr('data-scrollto'),
					divScrollSpeed = element.attr('data-speed'),
					divScrollOffset = element.attr('data-offset'),
					divScrollEasing = element.attr('data-easing');

					if( !divScrollSpeed ) { divScrollSpeed = 750; }
					if( !divScrollOffset ) { divScrollOffset = SEMICOLON.initialize.topScrollOffset(); }
					if( !divScrollEasing ) { divScrollEasing = 'easeOutQuad'; }

				$('html,body').stop(true).animate({
					'scrollTop': $( divScrollToAnchor ).offset().top - Number(divScrollOffset)
				}, Number(divScrollSpeed), divScrollEasing);

				return false;
			});
		},

		extras: function(){
			$('[data-toggle="tooltip"]').tooltip();
			$('#primary-menu-trigger,#overlay-menu-close').click(function() {
				$( '#primary-menu > ul, #primary-menu > div > ul' ).toggleClass("show");
				return false;
			});
			$('#page-submenu-trigger').click(function() {
				$body.toggleClass('top-search-open', false);
				$pagemenu.toggleClass("pagemenu-active");
				return false;
			});
			$pagemenu.find('nav').click(function(e){
				$body.toggleClass('top-search-open', false);
				$topCart.toggleClass('top-cart-open', false);
			});
			if( SEMICOLON.isMobile.any() ){
				$body.addClass('device-touch');
			}
			// var el = {
			//     darkLogo : $("<img>", {src: defaultDarkLogo}),
			//     darkRetinaLogo : $("<img>", {src: retinaDarkLogo})
			// };
			// el.darkLogo.prependTo("body");
			// el.darkRetinaLogo.prependTo("body");
			// el.darkLogo.css({'position':'absolute','z-index':'-100'});
			// el.darkRetinaLogo.css({'position':'absolute','z-index':'-100'});
		}

	};

	SEMICOLON.isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function() {
			return (SEMICOLON.isMobile.Android() || SEMICOLON.isMobile.BlackBerry() || SEMICOLON.isMobile.iOS() || SEMICOLON.isMobile.Opera() || SEMICOLON.isMobile.Windows());
		}
	};

	SEMICOLON.documentOnResize = {

		init: function(){

			var t = setTimeout( function(){
				SEMICOLON.header.topsocial();
				SEMICOLON.header.fullWidthMenu();
				SEMICOLON.header.overlayMenu();
				SEMICOLON.initialize.fullScreen();
				SEMICOLON.initialize.verticalMiddle();
				SEMICOLON.initialize.maxHeight();
				SEMICOLON.initialize.testimonialsGrid();
				SEMICOLON.slider.captionPosition();
				SEMICOLON.portfolio.arrange();
				SEMICOLON.widget.html5Video();
				SEMICOLON.widget.masonryThumbs();
				SEMICOLON.initialize.dataStyles();
				SEMICOLON.initialize.dataResponsiveHeights();
			}, 500 );

		}

	};

	SEMICOLON.documentOnReady = {

		init: function(){
			SEMICOLON.initialize.init();
			SEMICOLON.header.init();
			if( $slider.length > 0 ) { SEMICOLON.slider.init(); }
			if( $portfolio.length > 0 ) { SEMICOLON.portfolio.init(); }
			SEMICOLON.widget.init();
			SEMICOLON.documentOnReady.windowscroll();
		},

		windowscroll: function(){

			var headerOffset = $header.offset().top;
			var headerWrapOffset = $headerWrap.offset().top;

			var headerDefinedOffset = $header.attr('data-sticky-offset');
			if( typeof headerDefinedOffset !== 'undefined' ) {
				if( headerDefinedOffset == 'full' ) {
					headerWrapOffset = $window.height();
					var headerOffsetNegative = $header.attr('data-sticky-offset-negative');
					if( typeof headerOffsetNegative !== 'undefined' ) { headerWrapOffset = headerWrapOffset - headerOffsetNegative - 1; }
				} else {
					headerWrapOffset = Number(headerDefinedOffset);
				}
			}

			$window.on( 'scroll', function(){

				SEMICOLON.initialize.goToTopScroll();
				$('body.open-header.close-header-on-scroll').removeClass("side-header-open");
				SEMICOLON.header.stickyMenu( headerWrapOffset );
				SEMICOLON.header.darkLogo();
				SEMICOLON.header.splitmenu();

			});

			window.addEventListener('scroll', function(){
				requestAnimationFrame(function(){
					SEMICOLON.slider.sliderParallax();
					SEMICOLON.slider.sliderElementsFade();
				});
			}, false);

			if( $onePageMenuEl.length > 0 ){
				$window.scrolled(function() {
					SEMICOLON.header.onepageScroller();
				});
			}
		}

	};

	SEMICOLON.documentOnLoad = {

		init: function(){
			SEMICOLON.slider.captionPosition();
			SEMICOLON.slider.swiperSliderMenu();
			SEMICOLON.slider.revolutionSliderMenu();
			SEMICOLON.initialize.maxHeight();
			SEMICOLON.initialize.testimonialsGrid();
			SEMICOLON.initialize.verticalMiddle();
			SEMICOLON.portfolio.portfolioDescMargin();
			SEMICOLON.portfolio.arrange();
			SEMICOLON.widget.parallax();
			SEMICOLON.widget.loadFlexSlider();
			SEMICOLON.widget.html5Video();
			SEMICOLON.widget.masonryThumbs();
			SEMICOLON.slider.owlCaptionInit();
			SEMICOLON.header.topsocial();
		}

	};

	var $window = $(window),
		$body = $('body'),
		$wrapper = $('#wrapper'),
		$header = $('#header'),
		$headerWrap = $('#header-wrap'),
		oldHeaderClasses = $header.attr('class'),
		oldHeaderWrapClasses = $headerWrap.attr('class'),
		stickyMenuClasses = $header.attr('data-sticky-class'),
		defaultLogo = $('#logo').find('.standard-logo'),
		defaultLogoWidth = defaultLogo.find('img').outerWidth(),
		retinaLogo = $('#logo').find('.retina-logo'),
		defaultLogoImg = defaultLogo.find('img').attr('src'),
		retinaLogoImg = retinaLogo.find('img').attr('src'),
		defaultDarkLogo = defaultLogo.attr('data-dark-logo'),
		retinaDarkLogo = retinaLogo.attr('data-dark-logo'),
		$pagemenu = $('.page-menu'),
		$onePageMenuEl = $('.one-page-menu'),
		onePageGlobalOffset = 0,
		$portfolio = $('#portfolio'),
		$slider = $('#slider'),
		$sliderParallaxEl = $('.slider-parallax'),
		$pageTitle = $('#page-title'),
		$portfolioItems = $('.portfolio-ajax').find('.portfolio-item'),
		$portfolioDetails = $('#portfolio-ajax-wrap'),
		$portfolioDetailsContainer = $('#portfolio-ajax-container'),
		$portfolioAjaxLoader = $('#portfolio-ajax-loader'),
		prevPostPortId = '',
		$topSearch = $('#top-search'),
		$topCart = $('#top-cart'),
		$verticalMiddleEl = $('.vertical-middle'),
		$topSocialEl = $('#top-social').find('li'),
		$siStickyEl = $('.si-sticky'),
		$dotsMenuEl = $('.dots-menu'),
		$goToTopEl = $('#gotoTop'),
		$fullScreenEl = $('.full-screen'),
		$commonHeightEl = $('.common-height'),
		$testimonialsGridEl = $('.testimonials-grid'),
		$pageSectionEl = $('.page-section'),
		$owlCarouselEl = $('.owl-carousel'),
		$parallaxEl = $('.parallax'),
		$parallaxPageTitleEl = $('.page-title-parallax'),
		$youtubeBgPlayerEl = $('.yt-bg-player'),
		$textRotaterEl = $('.text-rotater');

	$(document).ready( SEMICOLON.documentOnReady.init );
	$window.load( SEMICOLON.documentOnLoad.init );
	$window.on( 'resize', SEMICOLON.documentOnResize.init );

})(jQuery);
!function(e){var t={};function o(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=11)}([function(e,t,o){(function(e,o){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var i=/^\[object .+?Constructor\]$/,s=/^(?:0|[1-9]\d*)$/,r={};r["[object Float32Array]"]=r["[object Float64Array]"]=r["[object Int8Array]"]=r["[object Int16Array]"]=r["[object Int32Array]"]=r["[object Uint8Array]"]=r["[object Uint8ClampedArray]"]=r["[object Uint16Array]"]=r["[object Uint32Array]"]=!0,r["[object Arguments]"]=r["[object Array]"]=r["[object ArrayBuffer]"]=r["[object Boolean]"]=r["[object DataView]"]=r["[object Date]"]=r["[object Error]"]=r["[object Function]"]=r["[object Map]"]=r["[object Number]"]=r["[object Object]"]=r["[object RegExp]"]=r["[object Set]"]=r["[object String]"]=r["[object WeakMap]"]=!1;var c="object"==(void 0===e?"undefined":n(e))&&e&&e.Object===Object&&e,a="object"==("undefined"==typeof self?"undefined":n(self))&&self&&self.Object===Object&&self,l=c||a||Function("return this")(),u="object"==n(t)&&t&&!t.nodeType&&t,d=u&&"object"==n(o)&&o&&!o.nodeType&&o,p=d&&d.exports===u,h=p&&c.process,f=function(){try{var e=d&&d.require&&d.require("util").types;return e||h&&h.binding&&h.binding("util")}catch(e){}}(),k=f&&f.isTypedArray;function v(e,t,o){switch(o.length){case 0:return e.call(t);case 1:return e.call(t,o[0]);case 2:return e.call(t,o[0],o[1]);case 3:return e.call(t,o[0],o[1],o[2])}return e.apply(t,o)}var b,y,w,m=Array.prototype,g=Function.prototype,C=Object.prototype,_=l["__core-js_shared__"],x=g.toString,S=C.hasOwnProperty,O=(b=/[^.]+$/.exec(_&&_.keys&&_.keys.IE_PROTO||""))?"Symbol(src)_1."+b:"",E=C.toString,P=x.call(Object),j=RegExp("^"+x.call(S).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),T=p?l.Buffer:void 0,A=l.Symbol,L=l.Uint8Array,D=T?T.allocUnsafe:void 0,N=(y=Object.getPrototypeOf,w=Object,function(e){return y(w(e))}),B=Object.create,M=C.propertyIsEnumerable,R=m.splice,I=A?A.toStringTag:void 0,H=function(){try{var e=ue(Object,"defineProperty");return e({},"",{}),e}catch(e){}}(),F=T?T.isBuffer:void 0,z=Math.max,U=Date.now,W=ue(l,"Map"),q=ue(Object,"create"),J=function(){function e(){}return function(t){if(!Ce(t))return{};if(B)return B(t);e.prototype=t;var o=new e;return e.prototype=void 0,o}}();function $(e){var t=-1,o=null==e?0:e.length;for(this.clear();++t<o;){var n=e[t];this.set(n[0],n[1])}}function K(e){var t=-1,o=null==e?0:e.length;for(this.clear();++t<o;){var n=e[t];this.set(n[0],n[1])}}function G(e){var t=-1,o=null==e?0:e.length;for(this.clear();++t<o;){var n=e[t];this.set(n[0],n[1])}}function Y(e){var t=this.__data__=new K(e);this.size=t.size}function X(e,t){var o=be(e),n=!o&&ve(e),i=!o&&!n&&we(e),s=!o&&!n&&!i&&xe(e),r=o||n||i||s,c=r?function(e,t){for(var o=-1,n=Array(e);++o<e;)n[o]=t(o);return n}(e.length,String):[],a=c.length;for(var l in e)!t&&!S.call(e,l)||r&&("length"==l||i&&("offset"==l||"parent"==l)||s&&("buffer"==l||"byteLength"==l||"byteOffset"==l)||de(l,a))||c.push(l);return c}function V(e,t,o){(void 0!==o&&!ke(e[t],o)||void 0===o&&!(t in e))&&ee(e,t,o)}function Z(e,t,o){var n=e[t];S.call(e,t)&&ke(n,o)&&(void 0!==o||t in e)||ee(e,t,o)}function Q(e,t){for(var o=e.length;o--;)if(ke(e[o][0],t))return o;return-1}function ee(e,t,o){"__proto__"==t&&H?H(e,t,{configurable:!0,enumerable:!0,value:o,writable:!0}):e[t]=o}$.prototype.clear=function(){this.__data__=q?q(null):{},this.size=0},$.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},$.prototype.get=function(e){var t=this.__data__;if(q){var o=t[e];return"__lodash_hash_undefined__"===o?void 0:o}return S.call(t,e)?t[e]:void 0},$.prototype.has=function(e){var t=this.__data__;return q?void 0!==t[e]:S.call(t,e)},$.prototype.set=function(e,t){var o=this.__data__;return this.size+=this.has(e)?0:1,o[e]=q&&void 0===t?"__lodash_hash_undefined__":t,this},K.prototype.clear=function(){this.__data__=[],this.size=0},K.prototype.delete=function(e){var t=this.__data__,o=Q(t,e);return!(o<0)&&(o==t.length-1?t.pop():R.call(t,o,1),--this.size,!0)},K.prototype.get=function(e){var t=this.__data__,o=Q(t,e);return o<0?void 0:t[o][1]},K.prototype.has=function(e){return Q(this.__data__,e)>-1},K.prototype.set=function(e,t){var o=this.__data__,n=Q(o,e);return n<0?(++this.size,o.push([e,t])):o[n][1]=t,this},G.prototype.clear=function(){this.size=0,this.__data__={hash:new $,map:new(W||K),string:new $}},G.prototype.delete=function(e){var t=le(this,e).delete(e);return this.size-=t?1:0,t},G.prototype.get=function(e){return le(this,e).get(e)},G.prototype.has=function(e){return le(this,e).has(e)},G.prototype.set=function(e,t){var o=le(this,e),n=o.size;return o.set(e,t),this.size+=o.size==n?0:1,this},Y.prototype.clear=function(){this.__data__=new K,this.size=0},Y.prototype.delete=function(e){var t=this.__data__,o=t.delete(e);return this.size=t.size,o},Y.prototype.get=function(e){return this.__data__.get(e)},Y.prototype.has=function(e){return this.__data__.has(e)},Y.prototype.set=function(e,t){var o=this.__data__;if(o instanceof K){var n=o.__data__;if(!W||n.length<199)return n.push([e,t]),this.size=++o.size,this;o=this.__data__=new G(n)}return o.set(e,t),this.size=o.size,this};var te,oe=function(e,t,o){for(var n=-1,i=Object(e),s=o(e),r=s.length;r--;){var c=s[te?r:++n];if(!1===t(i[c],c,i))break}return e};function ne(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":I&&I in Object(e)?function(e){var t=S.call(e,I),o=e[I];try{e[I]=void 0;var n=!0}catch(e){}var i=E.call(e);n&&(t?e[I]=o:delete e[I]);return i}(e):function(e){return E.call(e)}(e)}function ie(e){return _e(e)&&"[object Arguments]"==ne(e)}function se(e){return!(!Ce(e)||function(e){return!!O&&O in e}(e))&&(me(e)?j:i).test(function(e){if(null!=e){try{return x.call(e)}catch(e){}try{return e+""}catch(e){}}return""}(e))}function re(e){if(!Ce(e))return function(e){var t=[];if(null!=e)for(var o in Object(e))t.push(o);return t}(e);var t=pe(e),o=[];for(var n in e)("constructor"!=n||!t&&S.call(e,n))&&o.push(n);return o}function ce(e,t,o,n,i){e!==t&&oe(t,(function(s,r){if(i||(i=new Y),Ce(s))!function(e,t,o,n,i,s,r){var c=he(e,o),a=he(t,o),l=r.get(a);if(l)return void V(e,o,l);var u=s?s(c,a,o+"",e,t,r):void 0,d=void 0===u;if(d){var p=be(a),h=!p&&we(a),f=!p&&!h&&xe(a);u=a,p||h||f?be(c)?u=c:_e(w=c)&&ye(w)?u=function(e,t){var o=-1,n=e.length;t||(t=Array(n));for(;++o<n;)t[o]=e[o];return t}(c):h?(d=!1,u=function(e,t){if(t)return e.slice();var o=e.length,n=D?D(o):new e.constructor(o);return e.copy(n),n}(a,!0)):f?(d=!1,k=a,v=!0?(b=k.buffer,y=new b.constructor(b.byteLength),new L(y).set(new L(b)),y):k.buffer,u=new k.constructor(v,k.byteOffset,k.length)):u=[]:function(e){if(!_e(e)||"[object Object]"!=ne(e))return!1;var t=N(e);if(null===t)return!0;var o=S.call(t,"constructor")&&t.constructor;return"function"==typeof o&&o instanceof o&&x.call(o)==P}(a)||ve(a)?(u=c,ve(c)?u=function(e){return function(e,t,o,n){var i=!o;o||(o={});var s=-1,r=t.length;for(;++s<r;){var c=t[s],a=n?n(o[c],e[c],c,o,e):void 0;void 0===a&&(a=e[c]),i?ee(o,c,a):Z(o,c,a)}return o}(e,Se(e))}(c):Ce(c)&&!me(c)||(u=function(e){return"function"!=typeof e.constructor||pe(e)?{}:J(N(e))}(a))):d=!1}var k,v,b,y;var w;d&&(r.set(a,u),i(u,a,n,s,r),r.delete(a));V(e,o,u)}(e,t,r,o,ce,n,i);else{var c=n?n(he(e,r),s,r+"",e,t,i):void 0;void 0===c&&(c=s),V(e,r,c)}}),Se)}function ae(e,t){return fe(function(e,t,o){return t=z(void 0===t?e.length-1:t,0),function(){for(var n=arguments,i=-1,s=z(n.length-t,0),r=Array(s);++i<s;)r[i]=n[t+i];i=-1;for(var c=Array(t+1);++i<t;)c[i]=n[i];return c[t]=o(r),v(e,this,c)}}(e,t,Pe),e+"")}function le(e,t){var o,i,s=e.__data__;return("string"==(i=n(o=t))||"number"==i||"symbol"==i||"boolean"==i?"__proto__"!==o:null===o)?s["string"==typeof t?"string":"hash"]:s.map}function ue(e,t){var o=function(e,t){return null==e?void 0:e[t]}(e,t);return se(o)?o:void 0}function de(e,t){var o=n(e);return!!(t=null==t?9007199254740991:t)&&("number"==o||"symbol"!=o&&s.test(e))&&e>-1&&e%1==0&&e<t}function pe(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||C)}function he(e,t){if(("constructor"!==t||"function"!=typeof e[t])&&"__proto__"!=t)return e[t]}var fe=function(e){var t=0,o=0;return function(){var n=U(),i=16-(n-o);if(o=n,i>0){if(++t>=800)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}(H?function(e,t){return H(e,"toString",{configurable:!0,enumerable:!1,value:(o=t,function(){return o}),writable:!0});var o}:Pe);function ke(e,t){return e===t||e!=e&&t!=t}var ve=ie(function(){return arguments}())?ie:function(e){return _e(e)&&S.call(e,"callee")&&!M.call(e,"callee")},be=Array.isArray;function ye(e){return null!=e&&ge(e.length)&&!me(e)}var we=F||function(){return!1};function me(e){if(!Ce(e))return!1;var t=ne(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t}function ge(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}function Ce(e){var t=n(e);return null!=e&&("object"==t||"function"==t)}function _e(e){return null!=e&&"object"==n(e)}var xe=k?function(e){return function(t){return e(t)}}(k):function(e){return _e(e)&&ge(e.length)&&!!r[ne(e)]};function Se(e){return ye(e)?X(e,!0):re(e)}var Oe,Ee=(Oe=function(e,t,o){ce(e,t,o)},ae((function(e,t){var o=-1,i=t.length,s=i>1?t[i-1]:void 0,r=i>2?t[2]:void 0;for(s=Oe.length>3&&"function"==typeof s?(i--,s):void 0,r&&function(e,t,o){if(!Ce(o))return!1;var i=n(t);return!!("number"==i?ye(o)&&de(t,o.length):"string"==i&&t in o)&&ke(o[t],e)}(t[0],t[1],r)&&(s=i<3?void 0:s,i=1),e=Object(e);++o<i;){var c=t[o];c&&Oe(e,c,o,s)}return e})));function Pe(e){return e}o.exports=Ee}).call(this,o(13),o(14)(e))},function(e,t){e.exports='{{message}} <a aria-label="learn more about cookies" role="button" tabindex="0" class="cc-link" href="{{href}}" rel="noopener noreferrer nofollow" target="{{target}}"> {{link}} </a> '},function(e,t){e.exports='<div class="cc-revoke dp--revoke {{classes}}"> <i class="dp--icon-fingerprint"></i> <span class="dp--hover">{{policy}}</span> </div> '},function(e,t){e.exports='<div class="cc-compliance cc-highlight"> {{allow}} {{allow-all}} </div> '},function(e,t){e.exports='<div class="dp--cookie-check" xmlns:f="http://www.w3.org/1999/html"> <label for="dp--cookie-require"> <input type="checkbox" id="dp--cookie-require" class="dp--check-box" checked="checked" disabled="disabled"/> {{dpRequire}} </label> <label for="dp--cookie-statistics"> <input type="checkbox" id="dp--cookie-statistics" class="dp--check-box" {{checked.statistics}} value=""/> {{dpStatistik}} </label> <label for="dp--cookie-marketing"> <input type="checkbox" id="dp--cookie-marketing" class="dp--check-box" {{checked.marketing}} value=""/> {{dpMarketing}} </label> </div> '},function(e,t){e.exports='<span id="cookieconsent:desc" class="cc-message"> {{cookieDesc}} </span> '},function(e,t){e.exports='<span id="cookieconsent:desc" class="cc-message"> {{cookieDesc}} {{cookieSelect}} </span> '},function(e,t){e.exports='<a aria-label="dismiss cookies" role="button" tabindex="0" class="cc-btn cc-dismiss"> {{allow-all}} </a> '},function(e,t){e.exports="{{dpmessagelink}}{{compliance}} "},function(e,t){e.exports='<div class="dp--overlay-inner"> <div class="dp--overlay-header">{{notice}}</div> <div class="dp--overlay-description">{{desc}}</div> <div class="dp--overlay-button"> <button class="db--overlay-submit" onclick="window.DPCookieConsent.forceAccept(this)" data-cookieconsent="{{type}}" {{style}}> {{btn}} </button> </div> </div> '},function(e,t){e.exports=function(){this.lang={message:"We use cookies and other tracking technologies to personalize and improve your experience. By continuing to use our website you consent to this.",dismiss:"allow cookies",allow:"allow cookies","allow-all":"allow all!",deny:"decline",policy:"Cookie Policy",link:"More info",dpRequire:"necessary",dpStatistik:"statistics",dpMarketing:"marketing",media:{notice:"Cookie Notice",desc:"Loading this resource will connect to external servers which use cookies and other tracking technologies to personalize and improve experience. Further information can be found in our privacy policy.",btn:"allow cookies and load this resource"}}}},function(e,t,o){o(12),e.exports=o(16)},function(e,t,o){"use strict";o.r(t);var n=o(3),i=o.n(n),s=o(4),r=o.n(s),c=o(1),a=o.n(c),l=o(5),u=o.n(l),d=o(6),p=o.n(d),h=o(7),f=o.n(h),k=o(8),v=o.n(k),b=o(2),y=o.n(b),w=o(9),m=o.n(w),g=o(0),C=o.n(g),_=o(10),x=o.n(_);function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}
/*!
  * Cookie Consent Adapter
  * Copyright 2019 Dirk Persky (https://github.com/DirkPersky/typo3-dp_cookieconsent)
  * Licensed under GPL v3+ (https://github.com/DirkPersky/typo3-dp_cookieconsent/blob/master/LICENSE)
  */window.addEventListener("load",(function(){function e(){this.cookie_name="dp_cookieconsent_status",this.cookie={path:"/",domain:"",expiryDays:365,secure:!1},this.prevCheckboxes=!1,this.checkboxes=[{name:"statistics",checked:!1},{name:"marketing",checked:!1}],this.settings={autoOpen:!0,revokable:!0,dismissOnScroll:!1,layout:"dpextend",type:"opt-in",theme:"edgeless",position:"bottom-right",reloadOnRevoke:!1,overlay:{notice:!0,box:{background:"rgba(0,0,0,.8)",text:"#fff"},btn:{background:"#F96332",text:"#fff"}},palette:{popup:{background:"rgba(0,0,0,.8)",text:"#FFFFFF"},button:{background:"#F96332",text:"#FFFFFF"}}}}"undefined"==typeof dpCookieConsentLang&&(window.DPCookieConsentL10N=x.a),window.DPCookieConsentL10N.prototype.replace=function(){window.cookieconsent_options.content=C()(this.lang,window.cookieconsent_options.content)},(new window.DPCookieConsentL10N).replace(),e.prototype.asyncLoad=function(e,t,o){var n=document,i=n.createElement(t),s=n.getElementsByTagName(t)[0];switch(t){case"script":i.src=e,i.setAttribute("defer","");break;case"link":i.rel="stylesheet",i.type="text/css",i.setAttribute("defer",""),i.href=e}o&&i.addEventListener("load",(function(e){o(null,e)}),!1),s.parentNode.insertBefore(i,s)},e.prototype.asyncJS=function(e,t){this.asyncLoad(e,"script",t)},e.prototype.getCookieElementsByTag=function(e,t){void 0===t&&(t="data-cookieconsent");var o=[];if(void 0===document.querySelectorAll)o=document.querySelectorAll(e+"["+t+"]");else{var n=document.getElementsByTagName(e);for(var i in n){var s=n[i];void 0!==s.getAttribute&&s.getAttribute(t)&&o.push(s)}}return o},e.prototype.callIframeHandler=function(e){var t=e.cloneNode(!0);t.getAttribute("data-src")&&(t.src=t.getAttribute("data-src")),e.parentNode.replaceChild(t,e),t.classList.add("dp--loaded"),t.setAttribute("data-cookieconsent-loaded",t.getAttribute("data-cookieconsent")),t.removeAttribute("data-cookieconsent"),window.DPCookieConsent.fireEvent("dp--cookie-iframe",t)},e.prototype.callScriptHandler=function(e){var t=e.innerHTML;t&&t.length&&(t=t.trim()),t&&t.length?(eval.call(this,t),window.DPCookieConsent.fireEvent("dp--cookie-fire",e)):e.getAttribute("data-src")?this.asyncJS(e.getAttribute("data-src"),(function(t){window.DPCookieConsent.fireEvent("dp--cookie-fire",e)})):e.src&&this.asyncJS(e.src,(function(t){window.DPCookieConsent.fireEvent("dp--cookie-fire",e)})),e.setAttribute("data-cookieconsent-loaded",e.getAttribute("data-cookieconsent")),e.removeAttribute("data-cookieconsent")},e.prototype.loadCookies=function(){var e,t=this.getCookieElementsByTag("script");if((t=t.concat(this.getCookieElementsByTag("iframe"))).length>0)for(e=0;e<t.length;e++){if("dpextend"===window.cookieconsent_options.layout){var o=t[e].getAttribute("data-cookieconsent");if("required"!=o&&(this.loadCookiesPreset(),!this.dpCookies.hasOwnProperty("dp--cookie-"+o)||!0!==this.dpCookies["dp--cookie-"+o]))continue}if(void 0!==t[e].tagName)switch(t[e].tagName.toUpperCase()){case"IFRAME":this.callIframeHandler(t[e]);break;default:this.callScriptHandler(t[e])}}window.DPCookieConsent.prevCheckboxes=[],window.DPCookieConsent.checkboxes.map((function(e){e&&window.DPCookieConsent.prevCheckboxes.push({name:e.name,checked:e.checked})}))},e.prototype.setClass=function(e){!0===e?document.querySelector("body").classList.remove("dp--cookie-consent"):document.querySelector("body").classList.add("dp--cookie-consent")},e.prototype.initCheckboxes=function(){if("object"===S(window.cookieconsent_options.checkboxes))for(var e in this.checkboxes=[],window.cookieconsent_options.checkboxes)this.checkboxes.push({name:e,checked:window.cookieconsent_options.checkboxes[e]});var t=DPCookieConsent.getCookieElementsByTag("script","data-dp-cookieSelect");t=t.length>0?t[0].innerHTML:r.a,this.checkboxes.map((function(e){var o="";(!0===e.checked||!1!==e.checked&&"true"===e.checked.toLowerCase())&&(o='checked="checked"'),t=t.replace("{{checked."+e.name+"}}",o)})),t=this.replaceLabels(t),window.cookieconsent_options.content.cookieSelect=t},e.prototype.replaceLabels=function(e){for(var t in window.cookieconsent_options.content)e=e.replace("{{"+t+"}}",window.cookieconsent_options.content[t]);return e},e.prototype.setCheckboxes=function(){if("dpextend"==window.cookieconsent_options.layout){var e=this,t=e.checkboxes.map((function(t){return e.loadCheckbox(t.name)}));this.saveCookie(t)}},e.prototype.loadCheckboxes=function(){if("dpextend"==window.cookieconsent_options.layout){var e=this;e.loadCookiesPreset(),e.checkboxes.map((function(t){e.loadCheckbox(t.name,!0)}))}},e.prototype.saveCookie=function(e){var t={};e.map((function(e){e&&(t[e.id]=e.checked)})),this.dpCookies=e,window.cookieconsent.utils.setCookie(this.cookie_name,JSON.stringify(t),this.cookie.expiryDays,this.cookie.domain,this.cookie.path,this.cookie.secure)},e.prototype.loadCookiesPreset=function(){if(0!=this.dpCookies&&(this.dpCookies=window.cookieconsent.utils.getCookie(this.cookie_name)),void 0!==this.dpCookies)try{this.dpCookies=JSON.parse(this.dpCookies)}catch(e){this.dpCookies=!1}else this.dpCookies=!1},e.prototype.loadCheckbox=function(e,t,o){var n=this,i="dp--cookie-"+e,s=document.getElementById(i),r=!1,c=!1;if(!0===t?this.dpCookies&&this.dpCookies.hasOwnProperty(i)&&(r=this.dpCookies[i],c=!0):void 0!==o&&(r=o,c=!0),s)return c&&(s.checked=r),n.checkboxes.map((function(t,o){t.name==e&&(n.checkboxes[o].checked=s.checked)})),s;n.checkboxes.map((function(t,o){c&&t.name==e&&(n.checkboxes[o].checked=r)}))},e.prototype.loadContentDescription=function(){var e=DPCookieConsent.getCookieElementsByTag("script","data-dp-cookieDesc");e=e.length>0?e[0].innerHTML:a.a,window.cookieconsent_options.content.cookieDesc=this.replaceLabels(e)},e.prototype.loadContentRevoke=function(){var e=DPCookieConsent.getCookieElementsByTag("script","data-dp-cookieRevoke");e.length>0?window.cookieconsent_options.revokeBtn=e[0].innerHTML:window.cookieconsent_options.revokeBtn=y.a},e.prototype.defaults=function(){window.cookieconsent_options=C()(this.settings,window.cookieconsent_options),"wire"==window.cookieconsent_options.theme&&(window.cookieconsent_options.palette.button.border=window.cookieconsent_options.palette.button.background,window.cookieconsent_options.palette.button.background="transparent"),-1!=["block","wire"].indexOf(window.cookieconsent_options.theme)&&delete window.cookieconsent_options.theme,void 0!==window.cookieconsent_options_cookie&&(this.cookie=C()(this.cookie,window.cookieconsent_options_cookie),console.log(this.cookie))},e.prototype.init=function(){this.defaults(),o(15),this.loadContentDescription("data-dp-cookieDesc",a.a),this.loadContentRevoke("data-dp-cookieRevoke",y.a),"dpextend"==window.cookieconsent_options.layout&&this.initCheckboxes();var e={autoOpen:window.cookieconsent_options.autoOpen,content:window.cookieconsent_options.content,theme:window.cookieconsent_options.theme,position:window.cookieconsent_options.position,palette:window.cookieconsent_options.palette,dismissOnScroll:window.cookieconsent_options.dismissOnScroll,type:window.cookieconsent_options.type,layout:window.cookieconsent_options.layout,revokable:window.cookieconsent_options.revokable,cookie:window.DPCookieConsent.cookie,layouts:{dpextend:v.a},elements:{messagelink:u.a,dpmessagelink:p.a,"allow-all":f.a},revokeBtn:window.cookieconsent_options.revokeBtn,compliance:{"opt-in":i.a},onPopupOpen:function(){window.DPCookieConsent.setClass(),window.DPCookieConsent.loadCheckboxes()},onPopupClose:function(){window.DPCookieConsent.setClass(!0)},onInitialise:function(e){!this.hasConsented()||"dismiss"!=e&&"allow"!=e||(window.DPCookieConsent.loadCheckboxes(),window.DPCookieConsent.loadCookies(),window.DPCookieConsent.fireEvent("dp--cookie-accept-init"))},onStatusChange:function(e){"opt-in"==window.cookieconsent_options.type&&"dpextend"===window.cookieconsent_options.layout&&"dismiss"==e&&window.DPCookieConsent.checkboxes.map((function(e){window.DPCookieConsent.loadCheckbox(e.name,!1,!0)}));if(window.DPCookieConsent.setCheckboxes(),!this.hasConsented()||"dismiss"!=e&&"allow"!=e)window.DPCookieConsent.fireEvent("dp--cookie-deny");else{var t=!1;window.DPCookieConsent.settings.reloadOnRevoke&&window.DPCookieConsent.prevCheckboxes&&window.DPCookieConsent.prevCheckboxes.map((function(e,o){var n=window.DPCookieConsent.checkboxes[o];!0===e.checked&&(n&&0!=n.checked||(t=!0))})),window.DPCookieConsent.loadCookies(),window.DPCookieConsent.fireEvent("dp--cookie-accept"),t&&location.reload()}},onRevokeChoice:function(){window.DPCookieConsent.fireEvent("dp--cookie-revoke")}};window.cookieconsent.initialise(e,(function(e){window.DPCookieConsent.setPopup(e),window.DPCookieConsent.overlays(),window.DPCookieConsent.fireEvent("dp--cookie-init")}))},e.prototype.setPopup=function(e){this.popup=e},e.prototype.forceAccept=function(e){var t=this;void 0!==t.popup&&setTimeout((function(){if("dpextend"===window.cookieconsent_options.layout){t.loadCheckboxes();var o=e.getAttribute("data-cookieconsent");t.checkboxes.map((function(e,n){e.name==o?t.loadCheckbox(e.name,!1,!0):t.popup.hasAnswered()||t.loadCheckbox(e.name,!1,!1)}))}t.popup.setStatus(window.cookieconsent.status.allow),t.popup.close(!0)}),250)},e.prototype.forceDeny=function(e){var t=this;void 0!==t.popup&&setTimeout((function(){if("dpextend"===window.cookieconsent_options.layout){t.loadCheckboxes();var o=e.getAttribute("data-cookieconsent");t.checkboxes.map((function(e,n){e.name==o&&t.loadCheckbox(e.name,!1,!1)}))}t.popup.setStatus(window.cookieconsent.status.deny),t.popup.close(!0)}),250)},e.prototype.fireEvent=function(e,t){var o;t?(o=document.createEvent("CustomEvent")).initCustomEvent(e,!0,!0,{$el:t}):(o=document.createEvent("Event")).initEvent(e,!0,!0),document.dispatchEvent(o)},e.prototype.overlays=function(){if(window.cookieconsent_options.overlay.notice){var e,t=this.getCookieElementsByTag("iframe"),o=DPCookieConsent.getCookieElementsByTag("script","data-dp-cookieIframe");if(o=o.length>0?o[0].innerHTML:m.a,t.length>0)for(e=0;e<t.length;e++){var n=t[e],i=n.getAttribute("data-cookieconsent-notice")||window.cookieconsent_options.content.media.notice,s=n.getAttribute("data-cookieconsent-description")||window.cookieconsent_options.content.media.desc,r=n.getAttribute("data-cookieconsent-btn")||window.cookieconsent_options.content.media.btn,c=n.getAttribute("data-cookieconsent"),a=document.createElement("div");a.classList.add("dp--overlay");var l="";window.cookieconsent_options.overlay.btn.background&&(l+="background:"+window.cookieconsent_options.overlay.btn.background+";"),window.cookieconsent_options.overlay.btn.text&&(l+="color:"+window.cookieconsent_options.overlay.btn.text+";"),o=o.replace("{{notice}}",i).replace("{{desc}}",s).replace("{{type}}",c).replace("{{style}}",'style="'+l+'"').replace("{{btn}}",r),void 0!==window.cookieconsent_options.content&&(void 0!==window.cookieconsent_options.content.target&&(o=o.replace("{{target}}",window.cookieconsent_options.content.target)),void 0!==window.cookieconsent_options.content.href&&(o=o.replace("{{href}}",window.cookieconsent_options.content.href)),void 0!==window.cookieconsent_options.content.link&&(o=o.replace("{{link}}",window.cookieconsent_options.content.link))),a.innerHTML=o,window.cookieconsent_options.overlay.box.background&&(a.style.background=window.cookieconsent_options.overlay.box.background),window.cookieconsent_options.overlay.box.text&&(a.style.color=window.cookieconsent_options.overlay.box.text),n.parentNode.insertBefore(a,n.nextSibling)}}},window.DPCookieConsent=new e,window.DPCookieConsent.init()}))},function(e,t){function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"===("undefined"==typeof window?"undefined":o(window))&&(n=window)}e.exports=n},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t){function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(e){if(!e.hasInitialised){var t={escapeRegExp:function(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")},hasClass:function(e,t){var o=" ";return 1===e.nodeType&&(o+e.className+o).replace(/[\n\t]/g,o).indexOf(o+t+o)>=0},addClass:function(e,t){e.className+=" "+t},removeClass:function(e,t){var o=new RegExp("\\b"+this.escapeRegExp(t)+"\\b");e.className=e.className.replace(o,"")},interpolateString:function(e,t){return e.replace(/{{([a-z][a-z0-9\-_]*)}}/gi,(function(e){return t(arguments[1])||""}))},getCookie:function(e){var t=("; "+document.cookie).split("; "+e+"=");return t.length<2?void 0:t.pop().split(";").shift()},setCookie:function(e,t,o,n,i,s){var r=new Date;r.setHours(r.getHours()+24*(o||365));var c=[e+"="+t,"expires="+r.toUTCString(),"path="+(i||"/")];n&&c.push("domain="+n),s&&c.push("secure"),document.cookie=c.join(";")},deepExtend:function(e,t){for(var o in t)t.hasOwnProperty(o)&&(o in e&&this.isPlainObject(e[o])&&this.isPlainObject(t[o])?this.deepExtend(e[o],t[o]):e[o]=t[o]);return e},throttle:function(e,t){var o=!1;return function(){o||(e.apply(this,arguments),o=!0,setTimeout((function(){o=!1}),t))}},hash:function(e){var t,o,n=0;if(0===e.length)return n;for(t=0,o=e.length;t<o;++t)n=(n<<5)-n+e.charCodeAt(t),n|=0;return n},normaliseHex:function(e){return"#"==e[0]&&(e=e.substr(1)),3==e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),e},getContrast:function(e){return e=this.normaliseHex(e),(299*parseInt(e.substr(0,2),16)+587*parseInt(e.substr(2,2),16)+114*parseInt(e.substr(4,2),16))/1e3>=128?"#000":"#fff"},getLuminance:function(e){var t=parseInt(this.normaliseHex(e),16),o=38+(t>>16),n=38+(t>>8&255),i=38+(255&t);return"#"+(16777216+65536*(o<255?o<1?0:o:255)+256*(n<255?n<1?0:n:255)+(i<255?i<1?0:i:255)).toString(16).slice(1)},isMobile:function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},isPlainObject:function(e){return"object"===o(e)&&null!==e&&e.constructor==Object},traverseDOMPath:function(e,o){return e&&e.parentNode?t.hasClass(e,o)?e:this.traverseDOMPath(e.parentNode,o):null}};e.status={deny:"deny",allow:"allow",dismiss:"dismiss"},e.transitionEnd=function(){var e=document.createElement("div"),t={t:"transitionend",OT:"oTransitionEnd",msT:"MSTransitionEnd",MozT:"transitionend",WebkitT:"webkitTransitionEnd"};for(var o in t)if(t.hasOwnProperty(o)&&void 0!==e.style[o+"ransition"])return t[o];return""}(),e.hasTransition=!!e.transitionEnd;var n=Object.keys(e.status).map(t.escapeRegExp);e.customStyles={},e.Popup=function(){var o={enabled:!0,container:null,cookie:{name:"cookieconsent_status",path:"/",domain:"",expiryDays:365,secure:!1},onPopupOpen:function(){},onPopupClose:function(){},onInitialise:function(e){},onStatusChange:function(e,t){},onRevokeChoice:function(){},onNoCookieLaw:function(e,t){},content:{header:"Cookies used on the website!",message:"This website uses cookies to ensure you get the best experience on our website.",dismiss:"Got it!",allow:"Allow cookies",deny:"Decline",link:"Learn more",href:"https://www.cookiesandyou.com",close:"&#x274c;",target:"_blank",policy:"Cookie Policy"},elements:{header:'<span class="cc-header">{{header}}</span>&nbsp;',message:'<span id="cookieconsent:desc" class="cc-message">{{message}}</span>',messagelink:'<span id="cookieconsent:desc" class="cc-message">{{message}} <a aria-label="learn more about cookies" role=button tabindex="0" class="cc-link" href="{{href}}" rel="noopener noreferrer nofollow" target="{{target}}">{{link}}</a></span>',dismiss:'<a aria-label="dismiss cookie message" role=button tabindex="0" class="cc-btn cc-dismiss">{{dismiss}}</a>',allow:'<a aria-label="allow cookies" role=button tabindex="0"  class="cc-btn cc-allow">{{allow}}</a>',deny:'<a aria-label="deny cookies" role=button tabindex="0" class="cc-btn cc-deny">{{deny}}</a>',link:'<a aria-label="learn more about cookies" role=button tabindex="0" class="cc-link" href="{{href}}" rel="noopener noreferrer nofollow" target="{{target}}">{{link}}</a>',close:'<span aria-label="dismiss cookie message" role=button tabindex="0" class="cc-close">{{close}}</span>'},window:'<div role="dialog" aria-live="polite" aria-label="cookieconsent" aria-describedby="cookieconsent:desc" class="cc-window {{classes}}">\x3c!--googleoff: all--\x3e{{children}}\x3c!--googleon: all--\x3e</div>',revokeBtn:'<div class="cc-revoke {{classes}}">{{policy}}</div>',compliance:{info:'<div class="cc-compliance">{{dismiss}}</div>',"opt-in":'<div class="cc-compliance cc-highlight">{{deny}}{{allow}}</div>',"opt-out":'<div class="cc-compliance cc-highlight">{{deny}}{{allow}}</div>'},type:"info",layouts:{basic:"{{messagelink}}{{compliance}}","basic-close":"{{messagelink}}{{compliance}}{{close}}","basic-header":"{{header}}{{message}}{{link}}{{compliance}}"},layout:"basic",position:"bottom",theme:"block",static:!1,palette:null,revokable:!1,animateRevokable:!0,showLink:!0,dismissOnScroll:!1,dismissOnTimeout:!1,dismissOnWindowClick:!1,ignoreClicksFrom:["cc-revoke","cc-btn"],autoOpen:!0,autoAttach:!0,whitelistPage:[],blacklistPage:[],overrideHTML:null};function i(){this.initialise.apply(this,arguments)}function s(e){this.openingTimeout=null,t.removeClass(e,"cc-invisible")}function r(t){t.style.display="none",t.removeEventListener(e.transitionEnd,this.afterTransition),this.afterTransition=null}function c(){var t=this.options.onInitialise.bind(this);if(!window.navigator.cookieEnabled)return t(e.status.deny),!0;if(window.CookiesOK||window.navigator.CookiesOK)return t(e.status.allow),!0;var o=Object.keys(e.status),n=this.getStatus(),i=o.indexOf(n)>=0;return i&&t(n),i}function a(){var e=this.options.position.split("-"),t=[];return e.forEach((function(e){t.push("cc-"+e)})),t}function l(){var e=this.options,o="top"==e.position||"bottom"==e.position?"banner":"floating";t.isMobile()&&(o="floating");var n=["cc-"+o,"cc-type-"+e.type,"cc-theme-"+e.theme];e.static&&n.push("cc-static"),n.push.apply(n,a.call(this));h.call(this,this.options.palette);return this.customStyleSelector&&n.push(this.customStyleSelector),n}function u(){var e={},o=this.options;o.showLink||(o.elements.link="",o.elements.messagelink=o.elements.message),Object.keys(o.elements).forEach((function(n){e[n]=t.interpolateString(o.elements[n],(function(e){var t=o.content[e];return e&&"string"==typeof t&&t.length?t:""}))}));var n=o.compliance[o.type];n||(n=o.compliance.info),e.compliance=t.interpolateString(n,(function(t){return e[t]}));var i=o.layouts[o.layout];return i||(i=o.layouts.basic),t.interpolateString(i,(function(t){return e[t]}))}function d(o){var n=this.options,i=document.createElement("div"),s=n.container&&1===n.container.nodeType?n.container:document.body;i.innerHTML=o;var r=i.children[0];return r.style.display="none",t.hasClass(r,"cc-window")&&e.hasTransition&&t.addClass(r,"cc-invisible"),this.onButtonClick=p.bind(this),r.addEventListener("click",this.onButtonClick),n.autoAttach&&(s.firstChild?s.insertBefore(r,s.firstChild):s.appendChild(r)),r}function p(o){var i=t.traverseDOMPath(o.target,"cc-btn")||o.target;if(t.hasClass(i,"cc-btn")){var s=i.className.match(new RegExp("\\bcc-("+n.join("|")+")\\b")),r=s&&s[1]||!1;r&&(this.setStatus(r),this.close(!0))}t.hasClass(i,"cc-close")&&(this.setStatus(e.status.dismiss),this.close(!0)),t.hasClass(i,"cc-revoke")&&this.revokeChoice()}function h(o){var n=t.hash(JSON.stringify(o)),i="cc-color-override-"+n,s=t.isPlainObject(o);return this.customStyleSelector=s?i:null,s&&function(o,n,i){if(e.customStyles[o])return void++e.customStyles[o].references;var s={},r=n.popup,c=n.button,a=n.highlight;r&&(r.text=r.text?r.text:t.getContrast(r.background),r.link=r.link?r.link:r.text,s[i+".cc-window"]=["color: "+r.text,"background-color: "+r.background],s[i+".cc-revoke"]=["color: "+r.text,"background-color: "+r.background],s[i+" .cc-link,"+i+" .cc-link:active,"+i+" .cc-link:visited"]=["color: "+r.link],c&&(c.text=c.text?c.text:t.getContrast(c.background),c.border=c.border?c.border:"transparent",s[i+" .cc-btn"]=["color: "+c.text,"border-color: "+c.border,"background-color: "+c.background],c.padding&&s[i+" .cc-btn"].push("padding: "+c.padding),"transparent"!=c.background&&(s[i+" .cc-btn:hover, "+i+" .cc-btn:focus"]=["background-color: "+(c.hover||f(c.background))]),a?(a.text=a.text?a.text:t.getContrast(a.background),a.border=a.border?a.border:"transparent",s[i+" .cc-highlight .cc-btn:first-child"]=["color: "+a.text,"border-color: "+a.border,"background-color: "+a.background]):s[i+" .cc-highlight .cc-btn:first-child"]=["color: "+r.text]));var l=document.createElement("style");document.head.appendChild(l),e.customStyles[o]={references:1,element:l.sheet};var u=-1;for(var d in s)s.hasOwnProperty(d)&&l.sheet.insertRule(d+"{"+s[d].join(";")+"}",++u)}(n,o,"."+i),s}function f(e){return"000000"==(e=t.normaliseHex(e))?"#222":t.getLuminance(e)}function k(e,t){for(var o=0,n=e.length;o<n;++o){var i=e[o];if(i instanceof RegExp&&i.test(t)||"string"==typeof i&&i.length&&i===t)return!0}return!1}function v(){var o=this.setStatus.bind(this),n=this.close.bind(this),i=this.options.dismissOnTimeout;"number"==typeof i&&i>=0&&(this.dismissTimeout=window.setTimeout((function(){o(e.status.dismiss),n(!0)}),Math.floor(i)));var s=this.options.dismissOnScroll;if("number"==typeof s&&s>=0){var r=function t(i){window.pageYOffset>Math.floor(s)&&(o(e.status.dismiss),n(!0),window.removeEventListener("scroll",t),this.onWindowScroll=null)};this.options.enabled&&(this.onWindowScroll=r,window.addEventListener("scroll",r))}var c=this.options.dismissOnWindowClick,a=this.options.ignoreClicksFrom;if(c){var l=function(i){for(var s=!1,r=i.path.length,c=a.length,u=0;u<r;u++)if(!s)for(var d=0;d<c;d++)s||(s=t.hasClass(i.path[u],a[d]));s||(o(e.status.dismiss),n(!0),window.removeEventListener("click",l),window.removeEventListener("touchend",l),this.onWindowClick=null)}.bind(this);this.options.enabled&&(this.onWindowClick=l,window.addEventListener("click",l),window.addEventListener("touchend",l))}}function b(){if("info"!=this.options.type&&(this.options.revokable=!0),t.isMobile()&&(this.options.animateRevokable=!1),this.options.revokable){var e=a.call(this);this.options.animateRevokable&&e.push("cc-animate"),this.customStyleSelector&&e.push(this.customStyleSelector);var o=this.options.revokeBtn.replace("{{classes}}",e.join(" ")).replace("{{policy}}",this.options.content.policy);this.revokeBtn=d.call(this,o);var n=this.revokeBtn;if(this.options.animateRevokable){var i=t.throttle((function(e){var o=!1,i=window.innerHeight-20;t.hasClass(n,"cc-top")&&e.clientY<20&&(o=!0),t.hasClass(n,"cc-bottom")&&e.clientY>i&&(o=!0),o?t.hasClass(n,"cc-active")||t.addClass(n,"cc-active"):t.hasClass(n,"cc-active")&&t.removeClass(n,"cc-active")}),200);this.onMouseMove=i,window.addEventListener("mousemove",i)}}}return i.prototype.initialise=function(e){this.options&&this.destroy(),t.deepExtend(this.options={},o),t.isPlainObject(e)&&t.deepExtend(this.options,e),c.call(this)&&(this.options.enabled=!1),k(this.options.blacklistPage,location.pathname)&&(this.options.enabled=!1),k(this.options.whitelistPage,location.pathname)&&(this.options.enabled=!0);var n=this.options.window.replace("{{classes}}",l.call(this).join(" ")).replace("{{children}}",u.call(this)),i=this.options.overrideHTML;if("string"==typeof i&&i.length&&(n=i),this.options.static){var s=d.call(this,'<div class="cc-grower">'+n+"</div>");s.style.display="",this.element=s.firstChild,this.element.style.display="none",t.addClass(this.element,"cc-invisible")}else this.element=d.call(this,n);v.call(this),b.call(this),this.options.autoOpen&&this.autoOpen()},i.prototype.destroy=function(){this.onButtonClick&&this.element&&(this.element.removeEventListener("click",this.onButtonClick),this.onButtonClick=null),this.dismissTimeout&&(clearTimeout(this.dismissTimeout),this.dismissTimeout=null),this.onWindowScroll&&(window.removeEventListener("scroll",this.onWindowScroll),this.onWindowScroll=null),this.onWindowClick&&(window.removeEventListener("click",this.onWindowClick),this.onWindowClick=null),this.onMouseMove&&(window.removeEventListener("mousemove",this.onMouseMove),this.onMouseMove=null),this.element&&this.element.parentNode&&this.element.parentNode.removeChild(this.element),this.element=null,this.revokeBtn&&this.revokeBtn.parentNode&&this.revokeBtn.parentNode.removeChild(this.revokeBtn),this.revokeBtn=null,function(o){if(t.isPlainObject(o)){var n=t.hash(JSON.stringify(o)),i=e.customStyles[n];if(i&&!--i.references){var s=i.element.ownerNode;s&&s.parentNode&&s.parentNode.removeChild(s),e.customStyles[n]=null}}}(this.options.palette),this.options=null},i.prototype.open=function(t){if(this.element)return this.isOpen()||(e.hasTransition?this.fadeIn():this.element.style.display="",this.options.revokable&&this.toggleRevokeButton(),this.options.onPopupOpen.call(this)),this},i.prototype.close=function(t){if(this.element)return this.isOpen()&&(e.hasTransition?this.fadeOut():this.element.style.display="none",t&&this.options.revokable&&this.toggleRevokeButton(!0),this.options.onPopupClose.call(this)),this},i.prototype.fadeIn=function(){var o=this.element;if(e.hasTransition&&o&&(this.afterTransition&&r.call(this,o),t.hasClass(o,"cc-invisible"))){if(o.style.display="",this.options.static){var n=this.element.clientHeight;this.element.parentNode.style.maxHeight=n+"px"}this.openingTimeout=setTimeout(s.bind(this,o),20)}},i.prototype.fadeOut=function(){var o=this.element;e.hasTransition&&o&&(this.openingTimeout&&(clearTimeout(this.openingTimeout),s.bind(this,o)),t.hasClass(o,"cc-invisible")||(this.options.static&&(this.element.parentNode.style.maxHeight=""),this.afterTransition=r.bind(this,o),o.addEventListener(e.transitionEnd,this.afterTransition),t.addClass(o,"cc-invisible")))},i.prototype.isOpen=function(){return this.element&&""==this.element.style.display&&(!e.hasTransition||!t.hasClass(this.element,"cc-invisible"))},i.prototype.toggleRevokeButton=function(e){this.revokeBtn&&(this.revokeBtn.style.display=e?"":"none")},i.prototype.revokeChoice=function(e){this.options.enabled=!0,this.clearStatus(),this.options.onRevokeChoice.call(this),e||this.autoOpen()},i.prototype.hasAnswered=function(t){return Object.keys(e.status).indexOf(this.getStatus())>=0},i.prototype.hasConsented=function(t){var o=this.getStatus();return o==e.status.allow||o==e.status.dismiss},i.prototype.autoOpen=function(e){!this.hasAnswered()&&this.options.enabled?this.open():this.hasAnswered()&&this.options.revokable&&this.toggleRevokeButton(!0)},i.prototype.setStatus=function(o){var n=this.options.cookie,i=t.getCookie(n.name),s=Object.keys(e.status).indexOf(i)>=0;Object.keys(e.status).indexOf(o)>=0?(t.setCookie(n.name,o,n.expiryDays,n.domain,n.path,n.secure),this.options.onStatusChange.call(this,o,s)):this.clearStatus()},i.prototype.getStatus=function(){return t.getCookie(this.options.cookie.name)},i.prototype.clearStatus=function(){var e=this.options.cookie;t.setCookie(e.name,"",-1,e.domain,e.path)},i}(),e.Location=function(){var e={timeout:5e3,services:["ipinfo"],serviceDefinitions:{ipinfo:function(){return{url:"//ipinfo.io",headers:["Accept: application/json"],callback:function(e,t){try{var o=JSON.parse(t);return o.error?s(o):{code:o.country}}catch(e){return s({error:"Invalid response ("+e+")"})}}}},ipinfodb:function(e){return{url:"//api.ipinfodb.com/v3/ip-country/?key={api_key}&format=json&callback={callback}",isScript:!0,callback:function(e,t){try{var o=JSON.parse(t);return"ERROR"==o.statusCode?s({error:o.statusMessage}):{code:o.countryCode}}catch(e){return s({error:"Invalid response ("+e+")"})}}}},maxmind:function(){return{url:"//js.maxmind.com/js/apis/geoip2/v2.1/geoip2.js",isScript:!0,callback:function(e){window.geoip2?geoip2.country((function(t){try{e({code:t.country.iso_code})}catch(t){e(s(t))}}),(function(t){e(s(t))})):e(new Error("Unexpected response format. The downloaded script should have exported `geoip2` to the global scope"))}}}}};function o(o){t.deepExtend(this.options={},e),t.isPlainObject(o)&&t.deepExtend(this.options,o),this.currentServiceIndex=-1}function n(e,t,o){var n,i=document.createElement("script");i.type="text/"+(e.type||"javascript"),i.src=e.src||e,i.async=!1,i.onreadystatechange=i.onload=function(){var e=i.readyState;clearTimeout(n),t.done||e&&!/loaded|complete/.test(e)||(t.done=!0,t(),i.onreadystatechange=i.onload=null)},document.body.appendChild(i),n=setTimeout((function(){t.done=!0,t(),i.onreadystatechange=i.onload=null}),o)}function i(e,t,o,n,i){var s=new(window.XMLHttpRequest||window.ActiveXObject)("MSXML2.XMLHTTP.3.0");if(s.open(n?"POST":"GET",e,1),s.setRequestHeader("Content-type","application/x-www-form-urlencoded"),Array.isArray(i))for(var r=0,c=i.length;r<c;++r){var a=i[r].split(":",2);s.setRequestHeader(a[0].replace(/^\s+|\s+$/g,""),a[1].replace(/^\s+|\s+$/g,""))}"function"==typeof t&&(s.onreadystatechange=function(){s.readyState>3&&t(s)}),s.send(n)}function s(e){return new Error("Error ["+(e.code||"UNKNOWN")+"]: "+e.error)}return o.prototype.getNextService=function(){var e;do{e=this.getServiceByIdx(++this.currentServiceIndex)}while(this.currentServiceIndex<this.options.services.length&&!e);return e},o.prototype.getServiceByIdx=function(e){var o=this.options.services[e];if("function"==typeof o){var n=o();return n.name&&t.deepExtend(n,this.options.serviceDefinitions[n.name](n)),n}return"string"==typeof o?this.options.serviceDefinitions[o]():t.isPlainObject(o)?this.options.serviceDefinitions[o.name](o):null},o.prototype.locate=function(e,t){var o=this.getNextService();o?(this.callbackComplete=e,this.callbackError=t,this.runService(o,this.runNextServiceOnError.bind(this))):t(new Error("No services to run"))},o.prototype.setupUrl=function(e){var t=this.getCurrentServiceOpts();return e.url.replace(/\{(.*?)\}/g,(function(o,n){if("callback"===n){var i="callback"+Date.now();return window[i]=function(t){e.__JSONP_DATA=JSON.stringify(t)},i}if(n in t.interpolateUrl)return t.interpolateUrl[n]}))},o.prototype.runService=function(e,t){var o=this;e&&e.url&&e.callback&&(e.isScript?n:i)(this.setupUrl(e),(function(n){var i=n?n.responseText:"";e.__JSONP_DATA&&(i=e.__JSONP_DATA,delete e.__JSONP_DATA),o.runServiceCallback.call(o,t,e,i)}),this.options.timeout,e.data,e.headers)},o.prototype.runServiceCallback=function(e,t,o){var n=this,i=t.callback((function(t){i||n.onServiceResult.call(n,e,t)}),o);i&&this.onServiceResult.call(this,e,i)},o.prototype.onServiceResult=function(e,t){t instanceof Error||t&&t.error?e.call(this,t,null):e.call(this,null,t)},o.prototype.runNextServiceOnError=function(e,t){if(e){this.logError(e);var o=this.getNextService();o?this.runService(o,this.runNextServiceOnError.bind(this)):this.completeService.call(this,this.callbackError,new Error("All services failed"))}else this.completeService.call(this,this.callbackComplete,t)},o.prototype.getCurrentServiceOpts=function(){var e=this.options.services[this.currentServiceIndex];return"string"==typeof e?{name:e}:"function"==typeof e?e():t.isPlainObject(e)?e:{}},o.prototype.completeService=function(e,t){this.currentServiceIndex=-1,e&&e(t)},o.prototype.logError=function(e){var t=this.currentServiceIndex,o=this.getServiceByIdx(t);console.warn("The service["+t+"] ("+o.url+") responded with the following error",e)},o}(),e.Law=function(){var e={regionalLaw:!0,hasLaw:["AT","BE","BG","HR","CZ","CY","DK","EE","FI","FR","DE","EL","HU","IE","IT","LV","LT","LU","MT","NL","PL","PT","SK","ES","SE","GB","UK","GR","EU"],revokable:["HR","CY","DK","EE","FR","DE","LV","LT","NL","PT","ES"],explicitAction:["HR","IT","ES"]};function o(e){this.initialise.apply(this,arguments)}return o.prototype.initialise=function(o){t.deepExtend(this.options={},e),t.isPlainObject(o)&&t.deepExtend(this.options,o)},o.prototype.get=function(e){var t=this.options;return{hasLaw:t.hasLaw.indexOf(e)>=0,revokable:t.revokable.indexOf(e)>=0,explicitAction:t.explicitAction.indexOf(e)>=0}},o.prototype.applyLaw=function(e,t){var o=this.get(t);return o.hasLaw||(e.enabled=!1,"function"==typeof e.onNoCookieLaw&&e.onNoCookieLaw(t,o)),this.options.regionalLaw&&(o.revokable&&(e.revokable=!0),o.explicitAction&&(e.dismissOnScroll=!1,e.dismissOnTimeout=!1)),e},o}(),e.initialise=function(o,n,i){var s=new e.Law(o.law);n||(n=function(){}),i||(i=function(){});var r=Object.keys(e.status),c=t.getCookie("cookieconsent_status");r.indexOf(c)>=0?n(new e.Popup(o)):e.getCountryCode(o,(function(t){delete o.law,delete o.location,t.code&&(o=s.applyLaw(o,t.code)),n(new e.Popup(o))}),(function(t){delete o.law,delete o.location,i(t,new e.Popup(o))}))},e.getCountryCode=function(t,o,n){t.law&&t.law.countryCode?o({code:t.law.countryCode}):t.location?new e.Location(t.location).locate((function(e){o(e||{})}),n):o({})},e.utils=t,e.hasInitialised=!0,window.cookieconsent=e}}(window.cookieconsent||{})},function(e,t,o){}]);