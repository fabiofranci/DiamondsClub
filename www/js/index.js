/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/*
 page B---pagebeforeload

 page B---pageload

 page B---pagebeforecreate

 page B---pagecreate

 page B---pageinit

 page A---pagebeforehide

 page B---pagebeforeshow

 page A---pageremove

 page A---pagehide

 page B---pageshow




 Server API Key
 AIzaSyD9glk7N8rTyNCGnESrrLp_qOHqyA8FVsE
 Sender ID
 851212453749


 */


//super globals variables
var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9+/=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/rn/g,"n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}
var my_media=null;
var audioAttuale='';
var appId=2235454;
var secret="jk08lasit76hnjvm98hnj46ukjbfadksdfas";

$("[data-role='page']").hide();
$("#splash").show();

showToast = function (text) {
    var notifichecount=1*text;
};

function aggiornabadgenotifiche(notifichebadge) {
    console.log('aggiornabadgenotifiche:'+notifichebadge);
    $(".notifiche-badge").html(notifichebadge);
    if (notifichebadge>0) {
        $(".notifiche-badge").show();
    } else {
        $(".notifiche-badge").hide();
    }
    window.localStorage.setItem("notifichebadge",notifichebadge);
}

function aggiornabadgechat(chatbadge) {
    console.log('aggiornabadgechat:'+chatbadge);
    $(".chat-badge").html(chatbadge);
    window.localStorage.setItem("chatbadge",chatbadge);
    if (chatbadge>0) {
        $(".chat-badge").show();
    } else {
        $(".chat-badge").hide();
    }
}

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);

    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        console.log("deviceready");
        $.getScript( "js/postdeviceready.js" )
            .done(function( script, textStatus ) {
                console.log('playaudio and base64 loaded');
                app.iniettajquerymobile('deviceready');
            })
            .fail(function( jqxhr, settings, exception ) {
                alert('Errore loading playaudio and base64');
            });


    },

    iniettajquerymobile: function(id) {
        console.log(device);
        console.log(Media);
        console.log(window.localStorage.getItem("app-"+appId));
        console.log("01 - Dentro iniettajquerymobile");

        

        $.getScript( "lib/jqm/jquery.mobile-1.4.5.js" )
            .done(function( script, textStatus ) {
                app.iniettajquery2('deviceready');
                $.mobile.loading( 'show', {
                    text: 'Loading',
                    textVisible: true,
                    theme: 'a',
                    textonly: false,
                    html: ''
                });
            })
            .fail(function( jqxhr, settings, exception ) {
                alert("Errore caricamento jquery mobile");
            });
    },

    iniettajquery2: function(id) {
        console.log("02 - Dentro iniettajquery2");
        $.getScript( "js/jqm.page.params.js" )
            .done(function( script, textStatus ) {
                app.inizializzaPush('deviceready');
            })
            .fail(function( jqxhr, settings, exception ) {
                alert("Errore caricamento jquery page params");
            });
    },

    inizializzaPush: function(id) {
        console.log("03 - Dentro inizializzaPush");
        var push = PushNotification.init({ "android": {"senderID": "851212453749"},
            "ios": {"alert": "true", "badge": "true", "sound": "true"}, "windows": {} } );
        push.on('registration', function(data) {
            // data.registrationId
            console.log(data);

            //cordova.plugins.notification.badge.set(0);
            window.localStorage.setItem("registrationId",data.registrationId);
            app.prelancio('deviceready');
        });

        push.on('notification', function(data) {
            console.log(data);
            //alert(data.message);
            if (data.additionalData.chat =='15planner') {
                if (data.additionalData.Sender==window.localStorage.getItem('idUser')) {

                    var htmlcalendario="<div class='rightmessage'><div class='message-bubble'><div class='message-text'>"+data.message+"<span class='message-meta'>"+data.additionalData.timestamp+"</span></div></div></div><div class='clearboth'></div>";

                    $('#incomingMessages').append(htmlcalendario);
                } else {
                    var htmlcalendario="<div class='leftmessage'><div class='message-bubble'><div class='message-sender'>"+data.additionalData.nomeutente+"</div><div class='message-text'>"+data.message+"<span class='message-meta'>"+data.additionalData.timestamp+"</span></div></div></div><div class='clearboth'></div>";
                    $('#incomingMessages').append(htmlcalendario);
                    var chatbadge=0;
                    chatbadge=+window.localStorage.getItem("chatbadge") || 0;
                    chatbadge++;
                    aggiornabadgechat(chatbadge);
                }
                var pagechatoffset=$("#segnapostoincomingMessages").offset().top;
                window.localStorage.setItem("pagechatoffset",pagechatoffset);
                if (pagechatoffset>80) {
                    //alert(pageleaderoffset);
                    $.mobile.silentScroll(pagechatoffset-80);
                }
            } else {
                alert(data.message);
                var notifichebadge=0;
                notifichebadge=+window.localStorage.getItem("notifichebadge") || 0;
                notifichebadge++;
                aggiornabadgenotifiche(notifichebadge);
            }
            //infine aggiusto anche il badge generale, questo mi arriva col messaggio notificato, nella variabile count
            cordova.plugins.notification.badge.set(data.count);

            //devo aggiornare i messaggiapp, sincronizzando con il server
            //cordova.plugins.notification.badge.increase();
        });
        push.on('error', function(e) {
            console.log(e);
// e.message
        });
    },

    prelancio: function(id) {
        console.log("04 - Dentro prelancio");

        var resp=[];
        var params={};

        if (window.localStorage.getItem("idUser")>0) {
            params.id_utente=window.localStorage.getItem("idUser");
        }
        if (window.localStorage.getItem("registrationId")) {
            params.regId=window.localStorage.getItem("registrationId");
        }
        params.secret="jk08lasit76hnjvm98hnj46ukjbfadksdfas";

        if (params.id_utente>0) {
            $.ajax({
                dataType: "json",
                type: 'POST',
                url: "https://www.diamondsclub.it/api/getbadges.php",
                data: jQuery.param(params) ,
                success: function (data) {
                    //alert("SUCCESS!");
                    cordova.plugins.notification.badge.set(data.badge);
                    aggiornabadgenotifiche(data.notifichebadge);
                    aggiornabadgechat(data.chatbadge);
                    //console.log(data);
                    console.log("Dentro success");
                    $.mobile.defaultPageTransition = "slide";
                    app.lanciaApp('deviceready');
                },
                error: function (e) {
                    console.log("Errore in chiamata getbadges.php");
                    $.mobile.defaultPageTransition = "slide";
                    app.lanciaApp('deviceready');
                }
            });
        } else {
            console.log("Dentro else");
            $.mobile.defaultPageTransition = "slide";
            app.lanciaApp('deviceready');
        }
    },

    // Update DOM on a Received Event
    lanciaApp: function(id) {

        function inizializzazione_variabili() {
            console.log("Dentro inizializzazione_variabili");

            secret="jk08lasit76hnjvm98hnj46ukjbfadksdfas";
            nomeUtenteLoggato=window.localStorage.getItem('nome');
            $(".iduserval").html(nomeUtenteLoggato);
            idUser=window.localStorage.getItem('idUser');
            idOspite=window.localStorage.getItem('idOspite');

            var chatbadge       =window.localStorage.getItem('chatbadge') || 0;
            var notifichebadge  =window.localStorage.getItem('notifichebadge') || 0;
            aggiornabadgechat(chatbadge);
            aggiornabadgenotifiche(notifichebadge);

            md5_eventi      =window.localStorage.getItem('md5_eventi');
            md5_leader      =window.localStorage.getItem('md5_leader');
            md5_viaggi      =window.localStorage.getItem('md5_viaggi');
            md5_incaricati  =window.localStorage.getItem('md5_incaricati');
            md5_ospiti      =window.localStorage.getItem('md5_ospiti');
            md5_materiali   =window.localStorage.getItem('md5_materiali');

            if (idUser) {
                $("#btn-ospiti-idbutton").show();
                $("#btn-nuovo-prospect").show();
                $("#btn-statistiche-ospiti").show();

                $(".btn-ospiti").show();
                $(".btn-page-notifiche").show();
                $(".btn-page-chat").show();
            } else  {
                $("#btn-ospiti-idbutton").hide();
                $("#btn-nuovo-prospect").hide();
                $("#btn-statistiche-ospiti").hide();
                
                $(".btn-ospiti").hide();
                $(".btn-page-notifiche").hide();
                $(".btn-page-chat").hide();
            }
            
            if (window.localStorage.getItem('platino')=='si') {
                $("#btn-incaricati").show();
            } else {
                $("#btn-incaricati").hide();
            }

        }

        console.log("05 - Dentro lanciaApp");

        //------- (i) start app here -----//
        //global vars (?)
        var secret="";
        var nomeUtenteLoggato="";
        var idUser="";
        var idOspite="";
        idUser=window.localStorage.getItem('idUser');
        idOspite=window.localStorage.getItem('idOspite');

        var md5_eventi      ="";
        var md5_leader      ="";
        var md5_viaggi      ="";
        var md5_materiali   ="";
        var md5_incaricati  ="";
        var md5_ospiti      ="";
        var leader_first_time=0;
        var viaggi_first_time=0;
        var ospiti_first_time=0;
        var materiali_first_time=0;
        var notifiche_first_time=0;


        var widthcontainer=$("#container-reg").width();
        console.log('widthcontainer:'+widthcontainer);
        if (widthcontainer>0) {

        } else {
            widthcontainer=350;
        }
        $("#leftpart").width(widthcontainer/2-5);
        $("#rightpart").width(widthcontainer/2-5);

        console.log("Prima di inizializzazione");
        console.log("idUser:"+idUser);
        console.log("idOspite:"+idOspite);

        inizializzazione_variabili();

        console.log("Dopo inizializzazione");
        console.log("idUser:"+idUser);
        console.log("idOspite:"+idOspite);

        if (idOspite) {
            $("#btn-ospiti-idbutton").hide();
            $("#btn-nuovo-prospect").hide();
            $("#btn-statistiche-ospiti").hide();

            $(".btn-ospiti").hide();
            $(".btn-page-notifiche").hide();
            $(".btn-page-chat").hide();
        } else {
            $("#btn-ospiti-idbutton").show();
            $("#btn-nuovo-prospect").show();
            $("#btn-statistiche-ospiti").show();

            $(".btn-ospiti").show();
            $(".btn-page-notifiche").show();
            $(".btn-page-chat").show();
        }
        if (window.localStorage.getItem('platino')=='si') {
            $("#btn-incaricati").show();
        } else {
            $("#btn-incaricati").hide();
        }


        var initial = '#page-index';
        if(window.localStorage.getItem('idUser')>0) {
            initial = '#page-index-logged';
        }
        if(window.localStorage.getItem('idOspite')>0) {
            initial = '#page-index-logged';
        }
        $.mobile.loading( 'hide');
        $.mobile.navigate(initial);

        window.localStorage.setItem("platform",device.platform);
        window.localStorage.setItem("uuid",device.uuid);
//(i) inizializzazione
        if (device.platform=='iOS') {
            var numb=device.version;
            if (parseFloat(numb)>=7.0) {
                console.log("bingo! IOS versione "+numb);
                $('[data-role="header"]').addClass("ios7");
                $('.btn-header-custom').addClass("ios7-header-button");
                //$(".ui-header-fixed").addClass("ios7header");
            }
        }

        function print_r(printthis, returnoutput) {
            var output = '';

            if($.isArray(printthis) || typeof(printthis) == 'object') {
                for(var i in printthis) {
                    output += i + ' : ' + print_r(printthis[i], true) + '\n';
                }
            }else {
                output += printthis;
            }
            if(returnoutput && returnoutput == true) {
                return output;
            }else {
                alert(output);
            }
        }

        //controllo che ci sia in memoria il codiceUtente altrimenti forzo il logout
        if (window.localStorage.getItem('codiceUtente')>0) {
        } else {
            logoutfunction();
        }

//(f) inizializzazione


// ---------------------------------------------------------------------------------------------------------------
// (i) bottone logout
// ---------------------------------------------------------------------------------------------------------------

        function logoutfunction() {
            window.localStorage.removeItem('idUser');
            window.localStorage.removeItem('idOspite');
            window.localStorage.removeItem('nome');
            window.localStorage.removeItem('codiceUtente');
            window.localStorage.removeItem('platino');
            window.localStorage.removeItem('superuser');
            window.localStorage.removeItem('amministratore');
            window.localStorage.removeItem('permessi_incaricato');
            window.localStorage.removeItem('md5_eventi');
            window.localStorage.removeItem('eventi_memoria');
            window.localStorage.removeItem('md5_leader');
            window.localStorage.removeItem('leader_memoria');
            window.localStorage.removeItem('md5_viaggi');
            window.localStorage.removeItem('viaggi_memoria');
            window.localStorage.removeItem('md5_materiali');
            window.localStorage.removeItem('materiali_memoria');
            window.localStorage.removeItem('md5_incaricati');
            window.localStorage.removeItem('incaricati_memoria');
            window.localStorage.removeItem('md5_ospiti');
            window.localStorage.removeItem('ospiti_memoria');
            window.localStorage.removeItem('pageleaderoffset');
            window.localStorage.removeItem('pagenotificheoffset');
            window.localStorage.removeItem('pagechatoffset');
            cordova.plugins.notification.badge.set(0);
            inizializzazione_variabili();
        }

        $(".logout-button").click(function(){
            if (window.localStorage.getItem("idUser")>0) {
                var id_utente=window.localStorage.getItem("idUser");
                var regId=window.localStorage.getItem("registrationId");
                var querystring="id_utente=" + id_utente + "&secret=" + secret +"&regId="+regId;
                console.log(querystring);

                if (checkConnessione()) {
                    $.mobile.loading( 'show', {
                        text: 'Loading',
                        textVisible: true,
                        theme: 'a',
                        textonly: false,
                        html: ''
                    });
                    $.ajax({
                        dataType: "json",
                        type: 'POST',
                        url: "https://www.diamondsclub.it/api/logout.php",
                        data: querystring,
                        success: function (resp) {
                            console.log("Eseguito logout con successo");
                            $.mobile.loading( 'hide' );
                            logoutfunction();
                        },
                        error: function (e) {
                            $.mobile.loading( 'hide' );
                            alert("Errore: logout remoto non andato a buon fine!");
                            console.log(e.message);
                            logoutfunction();
                        }
                    });
                } else {
                    alert("Nessuna connessione internet, non posso fare il logout sul sito!");
                    logoutfunction();
                }
            }
        });
// ---------------------------------------------------------------------------------------------------------------
// (f) bottone logout
// ---------------------------------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------------------------------
// (i) pagina calendario, retrieve and deploy
// ---------------------------------------------------------------------------------------------------------------
        $(".btn-calendario").click(function(){
            //alert("Eccomi premuto eventi");
            //alert("id_utente:"+idUser);
            $.mobile.loading( 'show', {
                text: 'Loading',
                textVisible: true,
                theme: 'a',
                textonly: false,
                html: ''
            });
            var resp=[];
            var params={};

            if (window.localStorage.getItem("idUser")>0) {
                params.id_utente=window.localStorage.getItem("idUser");
            }
            if (window.localStorage.getItem("idOspite")>0) {
                params.id_ospite=window.localStorage.getItem("idOspite");
            }
            params.secret=secret;
            if (window.localStorage.getItem("md5_eventi")) {
                params.md5=window.localStorage.getItem("md5_eventi");
            }

            $.ajax({
                dataType: "json",
                type: 'POST',
                url: "https://www.diamondsclub.it/api/eventi.php",
                data: jQuery.param(params) ,
                success: function (data) {
                    //alert("SUCCESS!");
                    resp=data.resp;
                    md5_eventi=data.md5;
                    window.localStorage.setItem("md5_eventi",md5_eventi);
                    window.localStorage.setItem("eventi_memoria",JSON.stringify(resp));
                },
                error: function (e) {
                    //alert("Connessione assente oppure nessun aggiornamento, uso i dati in memoria!");
                    resp=JSON.parse(window.localStorage.getItem("eventi_memoria"));
                },
                complete: function () {
                    $('#eventi_listview').listview();
                    $('#eventi_listview').html('');
                    //alert("FATTO!");
                    var htmlcalendario='';
                    for (i=0;i<resp.length;i++) {
                        ev=resp[i];
                        var arr = ev.data.split('-');
                        var data_evento=arr[2] + "/" + arr[1]+"/"+arr[0];
                        arr = ev.ora.split(':');
                        var ora_inizio_evento=arr[0] + ":" + arr[1];
                        arr = ev.ora_fine_evento.split(':');
                        var ora_fine_evento=arr[0] + ":" + arr[1];

                        var ora_evento=ora_inizio_evento;

                        if (ora_fine_evento!=":") {
                            ora_evento=ora_inizio_evento+" - "+ora_fine_evento;
                        }
                        htmlcalendario ="<li data-role='list-divider'>"+data_evento+"</li>";
                        htmlcalendario+="<li><a href='index.html'>";
                        htmlcalendario+="<h3>"+ev.titolo+"</h3>";
                        htmlcalendario+="<p><strong>"+ev.utente.nome+' '+ ev.utente.cognome+"</strong></p>";
                        htmlcalendario+="<p>"+ev.descrizione+"</p>";
                        htmlcalendario+="<p class='ui-li-aside'><strong>"+ora_evento+"</strong></p>";
                        htmlcalendario+="</a></li>";
                        $('#eventi_listview').append(htmlcalendario);
                    }
                    $('#eventi_listview').listview('refresh');
                    $.mobile.navigate("#page-calendario");
                }
            });
        });

        $("#page-calendario").on( "pageshow", function(event){
            $.mobile.loading( 'hide');
        });

// ---------------------------------------------------------------------------------------------------------------
// (f) pagina calendario, retrieve and deploy
// ---------------------------------------------------------------------------------------------------------------


// ---------------------------------------------------------------------------------------------------------------
// (i) pagina leader, retrieve and deploy
// ---------------------------------------------------------------------------------------------------------------
        $("#btn-leader").click(function(){
            window.localStorage.removeItem('pageleaderoffset');
            //leader_first_time++;
            //alert(leader_first_time);
            //alert("Eccomi premuto leader");
            //alert("id_utente:"+idUser);
            $.mobile.loading( 'show', {
                text: 'Loading',
                textVisible: true,
                theme: 'a',
                textonly: false,
                html: ''
            });
            var resp=[];
            var params={};

            if (window.localStorage.getItem("idUser")>0) {
                params.id_utente=window.localStorage.getItem("idUser");
            }
            if (window.localStorage.getItem("idOspite")>0) {
                params.id_ospite=window.localStorage.getItem("idOspite");
            }
            params.secret=secret;
            if (window.localStorage.getItem("md5_leader")) {
                params.md5=window.localStorage.getItem("md5_leader");
            }

            $.ajax({
                dataType: "json",
                type: 'POST',
                url: "https://www.diamondsclub.it/api/leaders.php",
                data: jQuery.param(params) ,
                success: function (data) {
                    //alert("SUCCESS!");
                    resp=data.resp;
                    tipi=data.tipi;
                    md5_leader=data.md5;
                    window.localStorage.setItem("md5_leader",md5_leader);
                    window.localStorage.setItem("leader_memoria",JSON.stringify(resp));
                    window.localStorage.setItem("tipileader_memoria",JSON.stringify(tipi));
                },
                error: function (e) {
                    //alert("Connessione assente oppure nessun aggiornamento, uso i dati in memoria!");
                    resp=JSON.parse(window.localStorage.getItem("leader_memoria"));
                    tipi=JSON.parse(window.localStorage.getItem("tipileader_memoria"));
                },
                complete: function () {
                    $('#leader_listview').listview();
                    $('#leader_listview').html('');
                    //$('#leader_popups').html('');
                    //alert("FATTO!");
                    //print_r(tipi);
                    //print_r(resp);
                    var htmlcalendario='';
                    var htmlpopup='';

                    for (j=0;j<tipi.length;j++) {
                        var tipo=tipi[j];
                        //alert(tipo);
                        if (resp[tipo]) {
                            var leader=resp[tipo];
                            //print_r(leader);
                            for (i=0;i<leader.length;i++) {
                                lead=leader[i];
                                //print_r(lead);
                                htmlcalendario ="<li data-role='list-divider'><h3>"+lead.titolo_leader+"</h3></li>";
                                //htmlcalendario+="<li><a data-rel='popup' href='#popupLeader"+j+"-"+i+"'>";
                                htmlcalendario+="<li><a href='#' datatipo='"+j+"' dataleader='"+i+"' class='btn-leader-dettaglio'>";
                                htmlcalendario+="<img src='http://www.diamondsclub.it/uploads_foto_utenti/thumbs/crop_"+lead.foto_leader+"'>";
                                htmlcalendario+="<p><strong>"+lead.tipo_leader+"</strong></p>";
                                htmlcalendario+="<p><i class='fa fa-map-marker'></i> "+lead.city+"</p>";
                                htmlcalendario+="</a></li>";
                                //htmlcalendario+="</a></li>";
                                //htmlpopup ="<div data-role='popup' id='popupLeader"+j+"-"+i+"'>";

                                //htmlpopup+="<div data-role='header'><h5>"+lead.titolo_leader+"</h5><a href='#' data-rel='back' class='ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right'>Close</a></div>";
                                //htmlpopup+="<div data-role='main' class='ui-content'><p class='fontsize12'>"+lead.descrizione_leader+"</p></div>";
                                //htmlpopup+="</div>";

                                $('#leader_listview').append(htmlcalendario);
                                //$('#leader_popups').append(htmlpopup);

                            }
                        } else {
                            continue;
                        }

                    }
                    $('#leader_listview').listview('refresh');
                    //if (leader_first_time>1) { $('#leader_popups').enhanceWithin(); }
                    $.mobile.navigate("#page-leader");
                }
            });
        });

        $("#page-leader").on( "pageshow", function(event){
            $.mobile.loading( 'hide');
            var pageleaderoffset=window.localStorage.getItem("pageleaderoffset");
            if (pageleaderoffset>80) {
                //alert(pageleaderoffset);
                $.mobile.silentScroll(pageleaderoffset-80);
            }
        });

// ---------------------------------------------------------------------------------------------------------------
// (f) pagina leader, retrieve and deploy
// ---------------------------------------------------------------------------------------------------------------

        $('body').on('click', 'a.btn-leader-dettaglio', function() {
            var pageleaderoffset=$(this).offset().top;
            window.localStorage.setItem("pageleaderoffset",pageleaderoffset);
            var htmldettaglio="";
            var i=$(this).attr('dataleader');
            var j=$(this).attr('datatipo');
            resp=JSON.parse(window.localStorage.getItem("leader_memoria"));
            tipi=JSON.parse(window.localStorage.getItem("tipileader_memoria"));
            var lead=resp[tipi[j]][i];
            var width=$( window ).width()-30;
            htmldettaglio ="<h3>"+lead.titolo_leader+"</h3>";
            htmldettaglio+="<img width='"+width+"' src='http://www.diamondsclub.it/uploads_foto_utenti/thumbs/crop_"+lead.foto_leader+"'>";
            htmldettaglio+="<p><strong>"+lead.tipo_leader+"</strong></p>";
            htmldettaglio+="<p><i class='fa fa-map-marker'></i> "+lead.city+"</p>";
            htmldettaglio+="<p>"+lead.descrizione_leader+"</p>";
            $("#dettaglio-leader-content").html(htmldettaglio);
            $.mobile.navigate("#page-leader-dettaglio");
        });


// ---------------------------------------------------------------------------------------------------------------
// (i) pagina viaggi, retrieve and deploy
// ---------------------------------------------------------------------------------------------------------------
        $("#btn-viaggi").click(function(){
            viaggi_first_time++;
            //alert(viaggi_first_time);
            //alert("Eccomi premuto viaggi");
            //alert("id_utente:"+idUser);
            $.mobile.loading( 'show', {
                text: 'Loading',
                textVisible: true,
                theme: 'a',
                textonly: false,
                html: ''
            });
            var resp=[];
            var params={};

            if (window.localStorage.getItem("idUser")>0) {
                params.id_utente=window.localStorage.getItem("idUser");
            }
            if (window.localStorage.getItem("idOspite")>0) {
                params.id_ospite=window.localStorage.getItem("idOspite");
            }
            params.secret=secret;
            if (window.localStorage.getItem("md5_viaggi")) {
                params.md5=window.localStorage.getItem("md5_viaggi");
            }

            $.ajax({
                dataType: "json",
                type: 'POST',
                url: "https://www.diamondsclub.it/api/viaggi.php",
                data: jQuery.param(params) ,
                success: function (data) {
                    //alert("SUCCESS!");
                    resp=data.resp;
                    md5_viaggi=data.md5;
                    window.localStorage.setItem("md5_viaggi",md5_viaggi);
                    window.localStorage.setItem("viaggi_memoria",JSON.stringify(resp));
                },
                error: function (e) {
                    //alert("Connessione assente oppure nessun aggiornamento, uso i dati in memoria!");
                    resp=JSON.parse(window.localStorage.getItem("viaggi_memoria"));
                },
                complete: function () {
                    $('#viaggi_listview').listview();
                    $('#viaggi_listview').html('');
                    //$('#viaggi_popups').html('');
                    //alert("FATTO!");
                    //print_r(tipi);
                    //print_r(resp);
                    var htmlcalendario='';
                    var htmlpopup='';

                    for (j=0;j<resp.length;j++) {
                        var viaggio=resp[j];
//                htmlcalendario ="<li><a data-rel='popup' href='#popupViaggio"+j+"'> <img src='http://img.youtube.com/vi/" + viaggio.videocode + "/sddefault.jpg'> <h2>" + viaggio.didascalia + "</h2> </a> </li>";

                        if (viaggio.tipo=='video') {
                            htmlcalendario ="<li><a class='youtube-media' href='http://www.youtube.com/embed/"+viaggio.videocode+"?autoplay=1&wmode=opaque&fs=1'> <img src='http://img.youtube.com/vi/" + viaggio.videocode + "/sddefault.jpg'> "+viaggio.didascalia+"</a> </li>";
                        }

//                htmlpopup ="<div data-role='popup' class='videopopup' id='popupViaggio"+j+"'>";
//                htmlpopup+="<div data-role='header'><h5>"+viaggio.didascalia+"</h5><a href='#' data-rel='back' class='ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right'>Close</a></div>";
//                htmlpopup+="<div data-role='main' class='ui-content'><iframe type='text/html' width='auto' height='auto' src='http://www.youtube.com/embed/"+viaggio.videocode+"?html5=1' frameborder='0'> </iframe></div>";
//                htmlpopup+="</div>";

                        $('#viaggi_listview').append(htmlcalendario);
//                $('#viaggi_popups').append(htmlpopup);
                    }
                    $('#viaggi_listview').listview('refresh');
//            if (viaggi_first_time>1) { $('#viaggi_popups').enhanceWithin(); }
                    $.mobile.navigate("#page-viaggi");
                }
            });
        });

        $(".youtube-media").on("click", function (e) {
            var jWindow = $(window).width();
            if ( jWindow <= 768 ) {
                return;
            }
            $.fancybox({
                href: this.href,
                type: "iframe" // when using embed format
            });
            return false;
        });


        $("#page-viaggi").on( "pagecreate", function(){
            $(".videopopup").popup({
                beforeposition: function () {
                    $(this).css({
                        width: window.innerWidth,
                        height: window.innerHeight - 14
                    });
                },
                x: 0,
                y: 0
            });
        });


        $("#page-viaggi").on( "pageshow", function(event){
            $.mobile.loading( 'hide');
        });

// ---------------------------------------------------------------------------------------------------------------
// (f) pagina viaggi, retrieve and deploy
// ---------------------------------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------------------------------
// (i) pagina materiali, retrieve and deploy
// ---------------------------------------------------------------------------------------------------------------
        $("#btn-materiali").click(function(){
            materiali_first_time++;
            window.localStorage.removeItem('pageleaderoffsetMateriali');

            //alert(viaggi_first_time);
            //alert("Eccomi premuto viaggi");
            //alert("id_utente:"+idUser);
            $.mobile.loading( 'show', {
                text: 'Loading',
                textVisible: true,
                theme: 'a',
                textonly: false,
                html: ''
            });
            var resp=[];
            var sottocat=[];
            var params={};

            if (window.localStorage.getItem("idUser")>0) {
                params.id_utente=window.localStorage.getItem("idUser");
            }
            if (window.localStorage.getItem("idOspite")>0) {
                params.id_ospite=window.localStorage.getItem("idOspite");
            }
            params.secret=secret;
            if (window.localStorage.getItem("md5_materiali")) {
                params.md5=window.localStorage.getItem("md5_materiali");
            }
            //console.log(params);

            $.ajax({
                dataType: "json",
                type: 'POST',
                url: "https://www.diamondsclub.it/api/materiali.php",
                data: jQuery.param(params) ,
                success: function (data) {
                    //console.log("SUCCESS!");
                    //console.log(data);
                    resp=data.resp;
                    sottocat=data.sottocategorie;
                    md5_materiali=data.md5;
                    //print_r(sottocat);
                    window.localStorage.setItem("md5_materiali",md5_materiali);
                    window.localStorage.setItem("materiali_memoria",JSON.stringify(resp));
                    window.localStorage.setItem("sottocategorie_materiali_memoria",JSON.stringify(sottocat));
                },
                error: function (e) {
                    //console.log("Connessione assente oppure nessun aggiornamento, uso i dati in memoria!");
                    //console.log(e);
                    resp=JSON.parse(window.localStorage.getItem("materiali_memoria"));
                    sottocat=JSON.parse(window.localStorage.getItem("sottocategorie_materiali_memoria"));
                },
                complete: function () {
                    $('#materiali_content').html('');
                    //$('#materiali_popups').html('');
                    //alert("FATTO!");
                    //print_r(tipi);
                    //print_r(sottocat);
                    $('#listview-pannello-materiali-impostazioni').listview();
                    $('#listview-pannello-materiali-impostazioni').html('');
                    var htmlcalendario='';
                    var htmlpopup='';
                    htmlpopup+="<li data-role='list-divider'>Tipo Media</li>";

                    htmlpopup+="<li>";
                    htmlpopup+="<a href='#' class='custom'>";
                    htmlpopup+="<input type='checkbox' class='impostazioni-checkbox' name='classe-video' id='classe-video' value='classe-video' checked />";
                    htmlpopup+="<label for='classe-video'>Video</label>";
                    htmlpopup+="</a>";
                    htmlpopup+="</li>";
                    htmlpopup+="<li>";
                    htmlpopup+="<a href='#' class='custom'>";
                    htmlpopup+="<input type='checkbox' class='impostazioni-checkbox' name='classe-audio' id='classe-audio' value='classe-audio' checked />";
                    htmlpopup+="<label for='classe-audio'>Audio</label>";
                    htmlpopup+="</a>";
                    htmlpopup+="</li>";
                    htmlpopup+="<li>";
                    htmlpopup+="<a href='#' class='custom'>";
                    htmlpopup+="<input type='checkbox' class='impostazioni-checkbox' name='classe-link' id='classe-link' value='classe-link' checked />";
                    htmlpopup+="<label for='classe-link'>Link</label>";
                    htmlpopup+="</a>";
                    htmlpopup+="</li>";
                    htmlpopup+="<li>";
                    htmlpopup+="<a href='#' class='custom'>";
                    htmlpopup+="<input type='checkbox' class='impostazioni-checkbox' name='classe-pdf' id='classe-pdf' value='classe-pdf' checked />";
                    htmlpopup+="<label for='classe-pdf'>Pdf</label>";
                    htmlpopup+="</a>";
                    htmlpopup+="</li>";
                    htmlpopup+="<li data-role='list-divider'>Categorie</li>";


                    for (i=0;i<sottocat.length;i++) {
                        var classedato='classe-'+sottocat[i];
                        classedato=classedato.replace(/ /g,"_");
                        //alert("Sottocategoria:"+sottocat[i]);
                        htmlpopup+="<li>";
                        htmlpopup+="<a href='#' class='custom'>";
                        htmlpopup+="<input type='checkbox' class='impostazioni-checkbox' name='classe-dato-"+i+"' id='classe-dato-"+i+"' value='"+classedato+"' checked />";
                        htmlpopup+="<label for='classe-dato-"+i+"'>"+sottocat[i]+"</label>";
                        htmlpopup+="</a>";
                        htmlpopup+="</li>";

                        archiviosottocat=resp[sottocat[i]];
                        htmlcalendario ="<div id='coll_"+classedato+"' dataid='"+classedato+"' class='categoriemateriali "+classedato+"' data-role='collapsible' data-theme='b' data-inset='false'>";
                        htmlcalendario+="<h4>"+sottocat[i]+"<span id='licount_"+classedato+"' class='ui-li-count'>"+archiviosottocat.length+"</span></h4>";
                        //htmlcalendario+="<h4>"+sottocat[i]+"</h4>";
                        htmlcalendario+="<ul id='list_"+classedato+"' data-role='listview'>";
                        for (j=0;j<archiviosottocat.length;j++) {
                            var materiale=archiviosottocat[j];
                            var tipodato='classe-'+materiale.tipo;
                            htmlcalendario+="<li class='"+tipodato+" "+classedato+"' data-role='list-divider'><h3>"+materiale.didascalia+"</h3></li>";
                            if (materiale.tipo=='video') {
                                htmlcalendario+="<li class='"+tipodato+" "+classedato+"'><a class='youtube-media' href='http://www.youtube.com/embed/"+materiale.videocode+"?autoplay=1&wmode=opaque&fs=1'> ";
                            }
                            if  (materiale.tipo=='audio') {
                                var urlaudio="http://www.diamondsclub.it"+materiale.risorsa;
                                var encodedUrl=Base64.encode(urlaudio);
                                var riga="<li class='"+tipodato+" "+classedato+"'><a href='#' onclick='playAudio(\""+encodedUrl+"\");'>";
                                //console.log(riga);
                                htmlcalendario+=riga;
                            }
                            if (materiale.tipo=='link' || materiale.tipo=='pdf') {
                                var DClink=materiale.risorsa;
                                var DCtarget='_system';
                                var riga="<li class='"+tipodato+" "+classedato+"'><a href='#' onclick='window.open(\""+DClink+"\", \""+DCtarget+"\")'>"
                                //console.log(riga);
                                htmlcalendario+=riga;
                            }
                            htmlcalendario+="<img src='http://www.diamondsclub.it/"+materiale.immagine+"'>";
                            htmlcalendario+="<p><strong>"+materiale.autore+"</strong></p>";
                            htmlcalendario+="<p class='ui-li-aside'><strong>"+materiale.tipo+"</strong></p>";
                            htmlcalendario+="</a></li>";
                        }
                        htmlcalendario+="</ul>";
                        htmlcalendario+="</div>";
                        $('#materiali_content').append(htmlcalendario);
//                $('#materiali_popups').append(htmlpopup);
                    }
                    $("#listview-pannello-materiali-impostazioni").append(htmlpopup);
                    $('#listview-pannello-materiali-impostazioni').listview('refresh');

                    $('#materiali_content').enhanceWithin();
                    $("[data-role=panel]").panel().enhanceWithin();
                    $.mobile.navigate("#page-materiali");
                }
            });
        });

        $("#page-materiali").on( "pagecreate", function(){
            $(".videopopup").popup({
                beforeposition: function () {
                    $(this).css({
                        width: window.innerWidth,
                        height: window.innerHeight - 14
                    });
                },
                x: 0,
                y: 0
            });
        });


        $("#page-materiali").on( "pageshow", function(event){
            $.mobile.loading( 'hide');
        });

// ---------------------------------------------------------------------------------------------------------------
// (f) pagina materiali, retrieve and deploy
// ---------------------------------------------------------------------------------------------------------------

        $('body').on('change', '.impostazioni-checkbox', function() {
            if ($(this).prop('checked')) {
                $("."+$(this).attr('value')).show();
                $("."+$(this).attr('value')).removeClass('nascosto');
            } else {
                $("."+$(this).attr('value')).hide();
                $("."+$(this).attr('value')).addClass('nascosto');
            }
            $(".categoriemateriali").each(function(index){
                var selezionato="#list_"+$(this).attr("dataid");
                var numrelated=$(selezionato+' > li:not(.nascosto)').length;
                numrelated=numrelated/2; //ci sono due righe per ogni elemento!!
                $("#licount_"+$(this).attr("dataid")).html(numrelated);
                if (numrelated>0) {
                    $("#coll_"+$(this).attr("dataid")).show();
                } else {
                    $("#coll_"+$(this).attr("dataid")).hide();
                }
            });

        });
// ---------------------------------------------------------------------------------------------------------------
// (i) pagina elenco incaricati, retrieve and deploy
// ---------------------------------------------------------------------------------------------------------------
        $("#btn-incaricati").click(function(){
            //alert("Eccomi premuto incaricati");
            //alert("id_utente:"+idUser);
            $.mobile.loading( 'show', {
                text: 'Loading',
                textVisible: true,
                theme: 'a',
                textonly: false,
                html: ''
            });
            var resp=[];
            var params={};

            if (window.localStorage.getItem("idUser")>0) {
                params.id_utente=window.localStorage.getItem("idUser");
            }
            if (window.localStorage.getItem("idOspite")>0) {
                params.id_ospite=window.localStorage.getItem("idOspite");
            }
            params.secret=secret;
            if (window.localStorage.getItem("md5_incaricati")) {
                params.md5=window.localStorage.getItem("md5_incaricati");
            }

            $.ajax({
                dataType: "json",
                type: 'POST',
                url: "https://www.diamondsclub.it/api/elenco_incaricati.php",
                data: jQuery.param(params) ,
                success: function (data) {
                    //alert("SUCCESS!");
                    resp=data.resp;
                    md5_incaricati=data.md5;
                    window.localStorage.setItem("md5_eventi",md5_incaricati);
                    window.localStorage.setItem("incaricati_memoria",JSON.stringify(resp));
                },
                error: function (e) {
                    //alert("Connessione assente oppure nessun aggiornamento, uso i dati in memoria!");
                    resp=JSON.parse(window.localStorage.getItem("incaricati_memoria"));
                },
                complete: function () {
                    $('#incaricati_listview').listview();
                    $('#incaricati_listview').html('');
                    //alert("FATTO!");
                    var htmlcalendario='';
                    for (i=0;i<resp.length;i++) {
                        ev=resp[i];
                        htmlcalendario ="<li><a href='#' class='btnprofiloincaricati'>";
                        if (ev.ultimo_accesso!='0000-00-00 00:00:00' && ev.ultimo_accesso!='null') {
                            if (ev.stato=='attivo') {
                                htmlcalendario+="<p><strong>"+ev.nome+"</strong> ("+ev.ultimo_accesso+") </p>";
                            } else {
                                htmlcalendario+="<p>"+ev.nome+" ("+ev.ultimo_accesso+") </p>";
                            }
                        } else {
                            if (ev.stato=='attivo') {
                                htmlcalendario+="<p><strong>"+ev.nome+"</strong> </p>";
                            } else {
                                htmlcalendario+="<p>"+ev.nome+" </p>";
                            }
                        }
//                        if (ev.tel!='') {
//                            htmlcalendario+="<p><a href='tel:"+ev.tel+"'>"+ev.tel+"</a></p>";
//                        }
//                        if (ev.email!='') {
//                            htmlcalendario+="<p><a href='mailto:"+ev.email+"'>"+ev.email+"</a></p>";
//                        }
//                        if (ev.city!='Scegli Comune' && ev.city!='null') {
//                            htmlcalendario+="<p><i class='fa fa-map-marker'></i> "+ev.city+"</p>";
//                        }
                        htmlcalendario+="</a></li>";
                        $('#incaricati_listview').append(htmlcalendario);
                    }
                    $('#incaricati_listview').listview('refresh');
                    $.mobile.navigate("#page-incaricati");
                }
            });
        });

        $("#page-incaricati").on( "pageshow", function(event){
            $.mobile.loading( 'hide');
        });

// ---------------------------------------------------------------------------------------------------------------
// (f) pagina elenco incaricati, retrieve and deploy
// ---------------------------------------------------------------------------------------------------------------


// ---------------------------------------------------------------------------------------------------------------
// (i) pagina elenco ospiti, retrieve and deploy
// ---------------------------------------------------------------------------------------------------------------
        $(".btn-ospiti").click(function(){
            ospiti_first_time++;
            //alert("Eccomi premuto ospiti");
            //alert("id_utente:"+idUser);
            $.mobile.loading( 'show', {
                text: 'Loading',
                textVisible: true,
                theme: 'a',
                textonly: false,
                html: ''
            });
            var resp=[];
            var esiti=[];
            var params={};

            if (window.localStorage.getItem("idUser")>0) {
                params.id_utente=window.localStorage.getItem("idUser");
            }
            if (window.localStorage.getItem("idOspite")>0) {
                params.id_ospite=window.localStorage.getItem("idOspite");
            }
            params.secret=secret;
            if (window.localStorage.getItem("md5_ospiti")) {
                params.md5=window.localStorage.getItem("md5_ospiti");
            }

            $.ajax({
                dataType: "json",
                type: 'POST',
                url: "https://www.diamondsclub.it/api/elenco_ospiti.php",
                data: jQuery.param(params) ,
                success: function (data) {
                    //alert("SUCCESS!");
                    esiti=data.esiti;
                    resp=data.resp;
                    md5_ospiti=data.md5;
                    window.localStorage.setItem("md5_ospiti",md5_ospiti);
                    window.localStorage.setItem("ospiti_memoria",JSON.stringify(resp));
                    window.localStorage.setItem("esiti_memoria",JSON.stringify(esiti));
                },
                error: function (e) {
                    //alert("Connessione assente oppure nessun aggiornamento, uso i dati in memoria!");
                    esiti=JSON.parse(window.localStorage.getItem("esiti_memoria"));
                    resp=JSON.parse(window.localStorage.getItem("ospiti_memoria"));
                },
                complete: function () {
                    $('#ospiti_listview').listview();
                    $('#ospiti_listview').html('');

                    $('#listview-pannello-ospiti-impostazioni').listview();
                    $('#listview-pannello-ospiti-impostazioni').html('');
                    var htmlcalendario='';
                    var htmlpopup='';
                    htmlpopup+="<li data-role='list-divider'>Tipo</li>";

                    htmlpopup+="<li>";
                    htmlpopup+="<a href='#' class='custom'>";
                    htmlpopup+="<input type='checkbox' class='impostazioni-checkbox' name='classe-Prospect' id='classe-Prospect' value='Ospiti_Prospect' checked />";
                    htmlpopup+="<label for='classe-Prospect'>Prospect</label>";
                    htmlpopup+="</a>";
                    htmlpopup+="</li>";
                    htmlpopup+="<li>";
                    htmlpopup+="<a href='#' class='custom'>";
                    htmlpopup+="<input type='checkbox' class='impostazioni-checkbox' name='classe-Cliente' id='classe-Cliente' value='Ospiti_Cliente' checked />";
                    htmlpopup+="<label for='classe-Cliente'>Cliente</label>";
                    htmlpopup+="</a>";
                    htmlpopup+="</li>";
                    htmlpopup+="<li>";
                    htmlpopup+="<a href='#' class='custom'>";
                    htmlpopup+="<input type='checkbox' class='impostazioni-checkbox' name='classe-Da_Richiamare' id='classe-Da_Richiamare' value='Ospiti_Da_Richiamare' checked />";
                    htmlpopup+="<label for='classe-Da_Richiamare'>Da Richiamare</label>";
                    htmlpopup+="</a>";
                    htmlpopup+="</li>";
                    htmlpopup+="<li>";
                    htmlpopup+="<a href='#' class='custom'>";
                    htmlpopup+="<input type='checkbox' class='impostazioni-checkbox' name='classe-Incaricato' id='classe-Non_Interessato' value='Ospiti_Non_Interessato' checked />";
                    htmlpopup+="<label for='classe-Non_Interessato'>Non Interessato</label>";
                    htmlpopup+="</a>";
                    htmlpopup+="</li>";
                    htmlpopup+="<a href='#' class='custom'>";
                    htmlpopup+="<input type='checkbox' class='impostazioni-checkbox' name='classe-Incaricato' id='classe-Incaricato' value='Ospiti_Incaricato' checked />";
                    htmlpopup+="<label for='classe-Incaricato'>Incaricato</label>";
                    htmlpopup+="</a>";
                    htmlpopup+="</li>";
                    htmlpopup+="<a href='#' class='custom'>";
                    htmlpopup+="<input type='checkbox' class='impostazioni-checkbox' name='classe-null' id='classe-null' value='Ospiti_null' checked />";
                    htmlpopup+="<label for='classe-null'>tutti gli altri</label>";
                    htmlpopup+="</a>";
                    htmlpopup+="</li>";

                    //alert("FATTO!");
                    var htmlcalendario='';
                    var tmp_esito='';
                    for (i=0;i<resp.length;i++) {
                        ev=resp[i];
                        //console.log(ev);
                        tmp_esito="Ospiti_"+ev.esito;
                        tmp_esito=tmp_esito.replace(/ /g,"_");
                        htmlcalendario ="<li class='Ospiti_Tutti "+tmp_esito+"'><a href='#' data-idospite='"+ev.id_ospite+"' class='btnprofiloospiti'>";
                        if (ev.ultimo_accesso!='null') {
                            if (ev.stato=='attivo') {
                                htmlcalendario+="<p><strong>"+ev.nome+"</strong> ("+ev.ultimo_accesso+") </p>";
                            } else {
                                htmlcalendario+="<p>"+ev.nome+" ("+ev.ultimo_accesso+") </p>";
                            }
                        } else {
                            if (ev.stato=='attivo') {
                                htmlcalendario+="<p><strong>"+ev.nome+"</strong> </p>";
                            } else {
                                htmlcalendario+="<p>"+ev.nome+" </p>";
                            }
                        }
                        if (ev.city=="Scegli Comune") {
                            ev.city="";
                        }
                        htmlcalendario+="<p><i class='fa fa-map-marker'></i> "+ev.city+"</p>";
                        htmlcalendario+="</a>";

                        // htmlcalendario+="<div class='split-custom-wrapper'>";
                        // htmlcalendario+="    <a href='#' data-role='button' class='split-custom-button' data-icon='gear' data-rel='dialog' data-theme='c' data-iconpos='notext'></a>";
                        // htmlcalendario+="    <a href='#' data-role='button' class='split-custom-button' data-icon='delete' data-rel='dialog' data-theme='c' data-iconpos='notext'></a>";
                        // htmlcalendario+="</div>";

                        if (ev.tel=='') {

                        } else {
                            htmlcalendario+="<a href='tel:"+ev.tel+"' data-role='button' class='split-custom-button' data-icon='phone' data-theme='b' data-iconpos='notext'></a>";
                        }




                        //if (ev.tel!='') {
                        //    htmlcalendario+="<p><i class='fa fa-phone'></i><a href='tel:"+ev.tel+"'>"+ev.tel+"</a></p>";
                        //}
                        //if (ev.email!='') {
                        //    htmlcalendario+="<p><a href='mailto:"+ev.email+"'>"+ev.email+"</a></p>";
                        //}
                        htmlcalendario+="</li>";
                        $('#ospiti_listview').append(htmlcalendario);
                    }

                    $('#ospiti_listview').listview('refresh');

                    $("#listview-pannello-ospiti-impostazioni").append(htmlpopup);
                    $('#listview-pannello-ospiti-impostazioni').listview('refresh');
                    $("[data-role=panel]").panel().enhanceWithin();
                    $.mobile.navigate("#page-ospiti");
                }
            });
        });

        $("#page-ospiti").on( "pageshow", function(event){
            $.mobile.loading( 'hide');
        });

        $('body').on('change', '.impostazioni-checkbox', function() {
            if ($(this).prop('checked')) {
                $("."+$(this).attr('value')).show();
                $("."+$(this).attr('value')).removeClass('nascosto');
            } else {
                $("."+$(this).attr('value')).hide();
                $("."+$(this).attr('value')).addClass('nascosto');
            }
        });


        $('body').on('click', 'a.btnprofiloospiti', function() {
            var idospite=$(this).attr('data-idospite');
            recuperadatiospite(idospite);
        });


        $("#invio_mail_submit").click(function(){
            var testo=$('#editor1').val();
            var idospitedamodificare=$("#idospitedamodificare").val();
            console.log("idospite a cui spedire email:"+idospitedamodificare);
            var params={};

            if (window.localStorage.getItem("idUser")>0) {
                params.id_utente=window.localStorage.getItem("idUser");
            }
            params.idospite=idospitedamodificare;
            params.secret=secret;
            params.testo=testo;

            $.ajax({
                dataType: "html",
                type: 'POST',
                url: "https://www.diamondsclub.it/api/inviaemailospite.php",
                data: jQuery.param(params) ,
                beforeSend: function()
                {
                    //$("#modificaospite").fadeOut();
                    //$("#controlloindirizzo").fadeOut();
                    $("#invio_mail").fadeOut("fast");
                    $.mobile.loading( 'show', {
                        text: 'Loading',
                        textVisible: true,
                        theme: 'a',
                        textonly: false,
                        html: ''
                    });
                    $(".messaggioerr2").hide();
                    $("#compila_testo_mail").hide();
                },
                success: function(msg)
                {
                    console.log(msg);
                    $.mobile.loading( 'hide');
                    if(msg.search("errore"))
                    {
                        $(".mexsistema").empty();
                        $(".mexsistema").html(msg);
                        $('.mexsistema').show();
                        $("#nuovoprospect").fadeOut();
                        $("#controlloindirizzo").fadeOut();
                    }
                    else
                    {
                        $("#nuovoprospect").fadeIn();
                        $("#controlloindirizzo").fadeIn();
                        var msgnew=msg.replace("errore,", "");
                        $(".messaggioerr").empty();
                        $(".messaggioerr").html(msgnew);
                        $(".messaggioerr").fadeIn();
                        $("#invio_mail").fadeIn("fast");
                    }
                },
                error: function()
                {
                    $(".messaggioerr").empty();
                    $(".messaggioerr").html("Si è verificato un errore!");
                },
            });

        });

        $('body').on('click', 'a.modificaospiteback', function (){
            $(".mexsistema").fadeOut("slow");
            $("#nuovoprospect").fadeIn("slow");

        });

        function recuperadatiospite(idospite) {
            var params={};
            var ospite={};

            if (window.localStorage.getItem("idUser")>0) {
                params.id_utente=window.localStorage.getItem("idUser");
            }
            params.idospite=idospite;
            params.secret=secret;

            $.ajax({
                dataType: "json",
                type: 'POST',
                url: "https://www.diamondsclub.it/api/get_ospite.php",
                data: jQuery.param(params) ,
                success: function (data) {
                    //alert("SUCCESS!");
                    ospite=data.ospite;
                    console.log(ospite);
                    $.mobile.loading( 'show', {
                        text: 'Loading',
                        textVisible: true,
                        theme: 'a',
                        textonly: false,
                        html: ''
                    });


                    $("#idospitedamodificare").val(idospite);
                    $("#nuovo-prospect-title").html("Modifica Ospite");
                    $("#nuovoprospect").fadeIn();
                    $("#controlloindirizzo").fadeIn();
                    $(".diventaospiteriq").fadeOut("slow");
                    $("#nuovo_prospect_submit").show();
                    $("#nuovo_ospite_submit").hide();
                    $(".mexsistema").hide();
                    $('#nuovoprospect')[0].reset();

                    //ora inserisco i valori dell'ospite da modificare
                    $("#codice_ospite").val(ospite.codice_ospite);
                    $("#nome").val(ospite.nome);
                    $("#cognome").val(ospite.cognome);
                    $('[name=prefisso_internazionale]').val(ospite.prefisso_internazionale);
                    $("#cellulare").val(ospite.cellulare);
                    $("#indirizzo").val(ospite.indirizzo);
                    $("#cittacerca").val(ospite.city);
                    $("[name=stato]").val(ospite.country);
                    $("#professione").val(ospite.professione);
                    $("#data_nascita").val(ospite.data_nascita);
                    $("#data_contatto").val(ospite.data_contatto);
                    $("#note").val(ospite.note);

                    $("#nomeutenteinvitante").html("<b>"+window.localStorage.getItem("nome")+"</b>");
                    $("#emailospite").html(ospite.email);

                    $("#lat").val(ospite.latitudine);
                    $("#lon").val(ospite.longitudine);
                    $("#sponsorizzato").val(ospite.sponsorizzato);
                    $(".invio_email_ospite").hide();

                    //se è solo un prospect, niente altrimenti si prosegue
                    if (ospite.esito!='Prospect') {
                        $(".diventaospiteriq").fadeIn("slow");
                        $("#nuovo_prospect_submit").hide();
                        $("#nuovo_ospite_submit").show();
                        $("#emailnuovo").val(ospite.email);
                        if (ospite.email!='') {
                            $(".invio_email_ospite").show();
                            $("#compila_testo_mail").hide();

                        }
                        $("#password").val(ospite.password);
                        $("#password2").val(ospite.password);
                        $("#diventaospitesi").prop("checked", true);
                        $("#diventaospiteno").prop("checked", false);
                        $('[name=esito]').val(ospite.esito);
                        $("#data_pm").val(ospite.data_pm);

                        if (ospite.esito=='Incaricato') {
                            $(".data_spons").show();
                        } else {
                            $(".data_spons").hide();
                        }
                        $("#data_spons").val(ospite.data_spons);

                        if (ospite.primo_invito=='si') {
                            $("#primoinvitosi").prop("checked",true);
                            $("#primoinvitono").prop("checked",false);
                        } else {
                            $("#primoinvitosi").prop("checked",false);
                            $("#primoinvitono").prop("checked",true);
                        }
                    }

                    $.mobile.navigate("#page-nuovo-prospect");
                },
                error: function (e) {
                    //alert("Connessione assente oppure nessun aggiornamento, uso i dati in memoria!");
                }
            });
        }

// ---------------------------------------------------------------------------------------------------------------
// (f) pagina elenco ospiti, retrieve and deploy
// ---------------------------------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------------------------------
// (i) pagina statistiche, retrieve and deploy
// ---------------------------------------------------------------------------------------------------------------


        $("#btn-statistiche-ospiti").click(function(){
            //alert("Eccomi premuto ospiti");
            //alert("id_utente:"+idUser);
            $.mobile.loading( 'show', {
                text: 'Loading',
                textVisible: true,
                theme: 'a',
                textonly: false,
                html: ''
            });
            var resp=[];
            var params={};

            if (window.localStorage.getItem("idUser")>0) {
                params.id_utente=window.localStorage.getItem("idUser");
            }
            if (window.localStorage.getItem("idOspite")>0) {
                params.id_ospite=window.localStorage.getItem("idOspite");
            }
            params.secret=secret;
            if (window.localStorage.getItem("md5_statistiche_ospiti")) {
                params.md5=window.localStorage.getItem("md5_statistiche_ospiti");
            }

            $.ajax({
                dataType: "json",
                type: 'POST',
                url: "https://www.diamondsclub.it/api/statistiche_ospiti.php",
                data: jQuery.param(params) ,
                success: function (data) {
                    //alert("SUCCESS!");
                    esiti=data.esiti;
                    resp=data.resp;
                    md5_statistiche_ospiti=data.md5;
                    window.localStorage.setItem("md5_statistiche_ospiti",md5_statistiche_ospiti);
                    window.localStorage.setItem("statistiche_ospiti_memoria",JSON.stringify(resp));
                },
                error: function (e) {
                    //alert("Connessione assente oppure nessun aggiornamento, uso i dati in memoria!");
                    resp=JSON.parse(window.localStorage.getItem("statistiche_ospiti_memoria"));
                },
                complete: function () {
                    $('#ospiti_statistiche_listview').listview();
                    $('#ospiti_statistiche_listview').html('');

                    var htmlcalendario='';

                    //alert("FATTO!");
                    var htmlcalendario='';
                    for (i=0;i<resp.length;i++) {
                        ev=resp[i];
                        //console.log(ev);
                        htmlcalendario ="<li><a href='#' data-idospite='"+ev.id_ospite+"' class='btnprofiloospiti'>";
                        if (ev.ultimo_accesso!='null') {
                            if (ev.stato=='attivo') {
                                htmlcalendario+="<p><strong>"+ev.nome+"</strong> ("+ev.ultimo_accesso+") </p>";
                            } else {
                                htmlcalendario+="<p>"+ev.nome+" ("+ev.ultimo_accesso+") </p>";
                            }
                        } else {
                            if (ev.stato=='attivo') {
                                htmlcalendario+="<p><strong>"+ev.nome+"</strong> </p>";
                            } else {
                                htmlcalendario+="<p>"+ev.nome+" </p>";
                            }
                        }
                        if (ev.city=="Scegli Comune") {
                            ev.city="";
                        }
                        htmlcalendario+="<p><i class='fa fa-map-marker'></i> "+ev.city+"</p>";
                        htmlcalendario+="</a>";

                        // htmlcalendario+="<div class='split-custom-wrapper'>";
                        // htmlcalendario+="    <a href='#' data-role='button' class='split-custom-button' data-icon='gear' data-rel='dialog' data-theme='c' data-iconpos='notext'></a>";
                        // htmlcalendario+="    <a href='#' data-role='button' class='split-custom-button' data-icon='delete' data-rel='dialog' data-theme='c' data-iconpos='notext'></a>";
                        // htmlcalendario+="</div>";

                        if (ev.tel=='') {

                        } else {
                            htmlcalendario+="<a href='tel:"+ev.tel+"' data-role='button' class='split-custom-button' data-icon='phone' data-theme='b' data-iconpos='notext'></a>";
                        }

                        htmlcalendario+="</li>";
                        $('#ospiti_statistiche_listview').append(htmlcalendario);
                    }

                    $('#ospiti_statistiche_listview').listview('refresh');

                    $.mobile.navigate("#page-statistiche-ospiti");
                }
            });
        });

        $("#page-statistiche-ospiti").on( "pageshow", function(event){
            $.mobile.loading( 'hide');
        });

// ---------------------------------------------------------------------------------------------------------------
// (f) pagina statistiche, retrieve and deploy
// ---------------------------------------------------------------------------------------------------------------


// ---------------------------------------------------------------------------------------------------------------
// (i) pagina nuovo prospect, retrieve and deploy
// ---------------------------------------------------------------------------------------------------------------
        $("#btn-nuovo-prospect").click(function(){
            //alert("Eccomi premuto ospiti");
            //alert("id_utente:"+idUser);
            $("#nuovo-prospect-title").html("Nuovo Prospect");
            $.mobile.loading( 'show', {
                text: 'Loading',
                textVisible: true,
                theme: 'a',
                textonly: false,
                html: ''
            });
            $("#nuovoprospect").fadeIn();
            $("#controlloindirizzo").fadeIn();
            $(".diventaospiteriq").fadeOut("slow");
            $("#nuovo_prospect_submit").show();
            $("#nuovo_ospite_submit").hide();
            $(".mexsistema").hide();
            $('#nuovoprospect')[0].reset();
            $.mobile.navigate("#page-nuovo-prospect");
            $(".invio_email_ospite").hide();

        });

        $("#page-nuovo-prospect").on( "pageshow", function(event){
            $.mobile.loading( 'hide');
            if ($('[name=esito]').val()=='Incaricato') {
                $(".data_spons").show();
            } else {
                $(".data_spons").hide();
            }

            //$(".diventaospiteriq").hide();
        });

        $( "#diventaospitesi" ).on( "click", function()
        {
            $(".diventaospiteriq").fadeIn("slow");
            $("#nuovo_prospect_submit").hide();
            $("#nuovo_ospite_submit").show();
        });
        $( "#diventaospiteno" ).on( "click", function()
        {
            $(".diventaospiteriq").fadeOut("slow");
            $("#nuovo_prospect_submit").show();
            $("#nuovo_ospite_submit").hide();
        });

        $('#esito').on('change', function() {
            if( this.value =='Incaricato') {
                $(".data_spons").show();
            } else {
                $(".data_spons").hide();
            }
        });


        var myLatLng = {lat: 43.7800148, lng: 11.2059485};
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 16,
            center: myLatLng
        });

        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'Hello World!',
            //position: results[0].geometry.location,
            draggable:true,
        });
        google.maps.event.addListener(marker, 'dragend', function() {
                updateMarkerPosition(marker.getPosition());
                recupero_indirizzo(marker.getPosition(),"indirizzo","citta_google");
                map.setCenter(new google.maps.LatLng(marker.getPosition().lat(),marker.getPosition().lng()));
            }


        );

        var infowindow = new google.maps.InfoWindow({
            content: '<p>Marker Location:' + marker.getPosition() + '</p>'
        });

        function updateMarkerPosition(pos) {
            $('#lat').val(pos.lat());
            $('#lon').val(pos.lng());
        }

        $( "#controllaind" ).click(function() {

            $("#controlloindirizzo").fadeIn();
            $("#messcercaind").hide();
            var indirizzo=$("#indirizzo").val();
            var cittacerca=$("#cittacerca").val();
            var stato=$("#stato").val();
            //alert(indirizzo+ " "+ cittacerca);
            //if(indirizzo!="" && cittacerca!="" && stato!="")
            if(cittacerca!="" && stato!="")
            {
                var geocoder = new google.maps.Geocoder();
                var results = geocoder.geocode(
                    {
                        address: indirizzo+" "+ cittacerca+" "+stato
                    },
                    function callback(results){

                        var latlngbounds = new google.maps.LatLngBounds();
                        latlngbounds.extend(results[0].geometry.location);
                        var bounds = new google.maps.LatLngBounds();
                        map.setCenter(latlngbounds.getCenter());
                        map.fitBounds(latlngbounds);
                        marker.setPosition(results[0].geometry.location);
                        var listener = google.maps.event.addListener(map, "idle", function () {
                            map.setZoom(16);
                            google.maps.event.removeListener(listener);
                        });
                        recupero_indirizzo(results[0].geometry.location,"indirizzo","citta_google");
                        updateMarkerPosition(results[0].geometry.location);
                    }
                );
            }
            else
            {
                $("#messcercaind").html("<span style='border:1px solid red;color:red;padding:5px;font-weight:bold;'>Inserire Città e Stato!</span><br><br>");
                $("#messcercaind").show();
            }
        });


        $("#invio_mail").click(function(){
            $("#compila_testo_mail").toggle();
        });

        $(".nuovo_prospect_submit").click(function(e){
            e.preventDefault();
            $("#secret").val(secret);
            $("#invitanteForm").val(window.localStorage.getItem("codiceUtente"));
            $("#nuovoprospect_id_utente").val(window.localStorage.getItem("idUser"));

            var url="https://www.diamondsclub.it/api/nuovoospite.php";

            if ($("#idospitedamodificare").val()>0) {
                url="https://www.diamondsclub.it/api/modificaospite.php";
            }
            
            //alert(url);

            $.ajax({
                type: "POST",
                url: url,
                data : $('#nuovoprospect').serialize(),
                dataType: "html",
                beforeSend: function()
                {
                    $("#nuovoprospect").fadeOut();
                    $("#controlloindirizzo").fadeOut();
                    $.mobile.loading( 'show');
                },
                success: function(msg)
                {
                    $.mobile.loading( 'hide');
                    if(msg.search("errore"))
                    {
                        $(".mexsistema").empty();
                        $(".mexsistema").html(msg);
                        $('.mexsistema').show();
                    }
                    else
                    {
                        $("#nuovoprospect").fadeIn();
                        $("#controlloindirizzo").fadeIn();
                        var msgnew=msg.replace("errore,", "");
                        $(".messaggioerr").empty();
                        $(".messaggioerr").html(msgnew);
                        $(".messaggioerr").fadeIn();
                    }
                },
                error: function()
                {
                    $(".messaggioerr").empty();
                    $(".messaggioerr").html("Si è verificato un errore!");
                },
            });

        });


// ---------------------------------------------------------------------------------------------------------------
// (f) pagina nuovo prospect, retrieve and deploy
// ---------------------------------------------------------------------------------------------------------------



// ---------------------------------------------------------------------------------------------------------------
// (i) pagina notifiche, retrieve and deploy
// ---------------------------------------------------------------------------------------------------------------
        $(".btn-page-notifiche, .btn-page-notifiche-back").click(function(){
            //console.log("dentro notifiche");

            window.localStorage.removeItem('pagenotificheoffset');
            $.mobile.loading( 'show', {
                text: 'Loading',
                textVisible: true,
                theme: 'a',
                textonly: false,
                html: ''
            });
            var resp=[];
            var params={};

            if (window.localStorage.getItem("idUser")>0) {
                params.id_utente=window.localStorage.getItem("idUser");
            } else {
                return false;
            }
            if (window.localStorage.getItem("registrationId")) {
                params.regId=window.localStorage.getItem("registrationId");
            }
            params.secret=secret;

            $.ajax({
                dataType: "json",
                type: 'POST',
                url: "https://www.diamondsclub.it/api/getmessaggiapp.php",
                data: jQuery.param(params) ,
                success: function (data) {
                    //alert("SUCCESS!");
                    resp=data.resp;
                    cordova.plugins.notification.badge.set(data.badge);
                    aggiornabadgenotifiche(data.notifichebadge);
                    aggiornabadgechat(data.chatbadge);

                    //console.log(resp);
                    window.localStorage.setItem("notifiche_memoria",JSON.stringify(resp));
                },
                error: function (e) {
                    //alert("Connessione assente oppure nessun aggiornamento, uso i dati in memoria!");
                    resp=JSON.parse(window.localStorage.getItem("notifiche_memoria"));
                },
                complete: function () {
                    $('#notifiche_listview').listview();
                    $('#notifiche_listview').html('');
                    //$('#leader_popups').html('');
                    //alert("FATTO!");
                    //print_r(tipi);
                    //print_r(resp);
                    var htmlcalendario='';
                    var htmlpopup='';

                    for (j=0;j<resp.length;j++) {
                            var messaggio=resp[j];
                            //print_r(leader);
                                //console.log(messaggio);
                                //print_r(lead);
                                htmlcalendario ="<li data-role='list-divider'><h3>"+messaggio.titolo+"</h3></li>";
                                //htmlcalendario+="<li><a data-rel='popup' href='#popupLeader"+j+"-"+i+"'>";
                                htmlcalendario+="<li><a href='#' datamessaggio='"+j+"' class='btn-notifiche-dettaglio'>";
                                if (messaggio.letto=='no') {
                                    htmlcalendario+="<p><strong>"+messaggio.timestamp+"</strong></p>";
                                } else {
                                    htmlcalendario+="<p>"+messaggio.timestamp+"</p>";
                                }
                                htmlcalendario+="</a></li>";

                                //htmlcalendario+="</a></li>";
                                //htmlpopup ="<div data-role='popup' id='popupLeader"+j+"-"+i+"'>";

                                //htmlpopup+="<div data-role='header'><h5>"+lead.titolo_leader+"</h5><a href='#' data-rel='back' class='ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right'>Close</a></div>";
                                //htmlpopup+="<div data-role='main' class='ui-content'><p class='fontsize12'>"+lead.descrizione_leader+"</p></div>";
                                //htmlpopup+="</div>";
                                //console.log(htmlcalendario);

                                $('#notifiche_listview').append(htmlcalendario);
                                //$('#leader_popups').append(htmlpopup);
                    }
                    //console.log("Eccoci qui");
                    $('#notifiche_listview').listview('refresh');
                    //if (leader_first_time>1) { $('#leader_popups').enhanceWithin(); }
                    $.mobile.navigate("#page-notifiche");
                }
            });
        });

        $("#page-notifiche").on( "pageshow", function(event){
            //console.log("eccomi alla page-notifiche pageshow");
            $.mobile.loading( 'hide');
            var pagenotificheoffset=window.localStorage.getItem("pagenotificheoffset");
            if (pagenotificheoffset>80) {
                //alert(pageleaderoffset);
                $.mobile.silentScroll(pagenotificheoffset-80);
            }
        });

// ---------------------------------------------------------------------------------------------------------------
// (f) pagina notifiche, retrieve and deploy
// ---------------------------------------------------------------------------------------------------------------

        $('body').on('click', 'a.btn-notifiche-dettaglio', function() {
            var pagenotificheoffset=$(this).offset().top;
            window.localStorage.setItem("pagenotificheoffset",pagenotificheoffset);
            var htmldettaglio="";
            var j=$(this).attr('datamessaggio');
            var resp=[];
            var params={};
            resp=JSON.parse(window.localStorage.getItem("notifiche_memoria"));
            var lead=resp[j];
            htmldettaglio ="<h3>"+lead.titolo+"</h3>";
            htmldettaglio+="<p><strong>"+lead.tipo_messaggio+"</strong></p>";
            htmldettaglio+="<p><i class='fa fa-calendar'></i> "+lead.timestamp+"</p>";
            htmldettaglio+="<p>"+lead.messaggio+"</p>";
            $("#dettaglio-notifica-content").html(htmldettaglio);

            params.id_messaggio=lead.id;
            params.id_utente=window.localStorage.getItem("idUser");
            params.secret=secret;

            if (checkConnessione()) {
                $.mobile.loading( 'show', {
                    text: 'Loading',
                    textVisible: true,
                    theme: 'a',
                    textonly: false,
                    html: ''
                });
                $.ajax({
                    dataType: "json",
                    type: 'POST',
                    url: "https://www.diamondsclub.it/api/aggiornamessaggiapp.php",
                    data: jQuery.param(params) ,
                    success: function (data) {
                        cordova.plugins.notification.badge.set(data.badge);
                        aggiornabadgenotifiche(data.notifichebadge);
                        aggiornabadgechat(data.chatbadge);

                        //console.log("aggiornamessaggiapp SUCCESS!");
                    },
                    error: function (e) {
                        alert("Connessione assente, non aggiorno il badge!");
                    },
                    complete: function () {

                    }
                });
            } else {
                //alert("Nessuna connessione internet, non posso fare l'autenticazione!");
            }
            $.mobile.navigate("#page-notifiche-dettaglio");
        });




// ---------------------------------------------------------------------------------------------------------------
// (i) pagina chat, retrieve and deploy
// ---------------------------------------------------------------------------------------------------------------
        $(".btn-page-chat, .btn-page-chat-back").click(function(){
            //console.log("dentro chat");
            window.localStorage.removeItem('pagechatoffset');
            if ($.mobile.pageContainer.pagecontainer( 'getActivePage' ).attr( 'id' )=='page-chat') {

            } else {
                $.mobile.loading( 'show', {
                    text: 'Loading',
                    textVisible: true,
                    theme: 'a',
                    textonly: false,
                    html: ''
                });
            }
            var resp=[];
            var params={};

            if (window.localStorage.getItem("idUser")>0) {
                params.id_utente=window.localStorage.getItem("idUser");
            } else {
                return false;
            }
            if (window.localStorage.getItem("registrationId")) {
                params.regId=window.localStorage.getItem("registrationId");
            }
            params.secret=secret;
            params.chat='15planner';
            //console.log(params);

            $.ajax({
                dataType: "json",
                type: 'POST',
                url: "https://www.diamondsclub.it/api/getmessaggiappchat.php",
                data: jQuery.param(params) ,
                success: function (data) {
                    //alert("SUCCESS!");
                    resp=data.resp;
                    cordova.plugins.notification.badge.set(data.badge);
                    aggiornabadgenotifiche(data.notifichebadge);
                    aggiornabadgechat(data.chatbadge);
                    var idmessaggiscaricati=data.idmessaggiscaricati;
                    console.log(data);
                    aggiornamessaggi(idmessaggiscaricati);
                },
                error: function (e) {
                    //alert("Connessione assente oppure nessun aggiornamento, uso i dati in memoria!");
                    //resp=JSON.parse(window.localStorage.getItem("chat_memoria"));
                },
                complete: function () {
                    $('#incomingMessages').html('');
                    //recupero lo storico
                    var vecchiohtml=window.localStorage.getItem("incomingMessages_memoria"+idUser);
                    $('#incomingMessages').html(vecchiohtml);

                    var htmlcalendario='';
                    if (resp.length>0) {
                        for (j=0;j<resp.length;j++) {
                            var messaggio=resp[j];
                            if (messaggio.nomeutente=='IO') {
                                htmlcalendario+="<div class='rightmessage'><div class='message-bubble'><div class='message-text'>"+messaggio.messaggio+"<span class='message-meta'>"+messaggio.timestamp+"</span></div></div></div><div class='clearboth'></div>";
                            } else {
                                htmlcalendario+="<div class='leftmessage'><div class='message-bubble'><div class='message-sender'>"+messaggio.nomeutente+"</div><div class='message-text'>"+messaggio.messaggio+"<span class='message-meta'>"+messaggio.timestamp+"</span></div></div></div><div class='clearboth'></div>";
                            }
                        }
                        $('#incomingMessages').append(htmlcalendario);
                    }

                    window.localStorage.setItem("incomingMessages_memoria"+idUser,$('#incomingMessages').html());

                    var pagechatoffset=$("#segnapostoincomingMessages").offset().top;
                    window.localStorage.setItem("pagechatoffset",pagechatoffset);
                    $.mobile.navigate("#page-chat");
                }
            });
        });

        $("#page-chat").on( "pageshow", function(event){
            //console.log("eccomi alla page-chat pageshow");
            $.mobile.loading( 'hide');
            var pagechatoffset=$("#segnapostoincomingMessages").offset().top;
            if (pagechatoffset>80) {
                //alert(pageleaderoffset);
                $.mobile.silentScroll(pagechatoffset-80);
            }
        });
        function aggiornamessaggi(idmessaggiscaricati) {
            var params={};
            params.secret=secret;
            params.idmessaggi=idmessaggiscaricati;
            //console.log("Dentro aggiornamessaggi");
            //console.log(params);


            $.ajax({
                dataType: "json",
                type: 'POST',
                url: "https://www.diamondsclub.it/api/aggiornamessaggiappchat.php",
                data: jQuery.param(params) ,
                success: function (data) {
                    //alert("SUCCESS!");
                    cordova.plugins.notification.badge.set(data.badge);
                    aggiornabadgenotifiche(data.notifichebadge);
                    aggiornabadgechat(data.chatbadge);
                },
                error: function (e) {
                    //alert("Connessione assente oppure nessun aggiornamento, uso i dati in memoria!");
                    //resp=JSON.parse(window.localStorage.getItem("chat_memoria"));
                },
                complete: function () {

                }
            });

        }

// ---------------------------------------------------------------------------------------------------------------
// (f) pagina chat, retrieve and deploy
// ---------------------------------------------------------------------------------------------------------------

        $('body').on('click', '#chatSendButton', function() {
            $.mobile.loading( 'show', {
                text: 'Loading',
                textVisible: true,
                theme: 'a',
                textonly: false,
                html: ''
            });
            var params={};
            if (window.localStorage.getItem("idUser")>0) {
                params.id_utente=window.localStorage.getItem("idUser");
            } else {
                $.mobile.loading( 'hide');
                return false;
            }

            if ($("#messageText").val()=='') {
                $.mobile.loading( 'hide');
                return false;
            }

            params.secret=secret;
            params.chat='15planner';
            params.msg=$("#messageText").val();
            console.log(params);

            //alert("Mando via il messaggio con testo:"+$("#messageText").val());

            //alert("MAndo via il messaggio "+$("#messageText").val());
            $.ajax({
                dataType: "json",
                type: 'POST',
                url: "https://www.diamondsclub.it/api/sendmessaggioappchat.php",
                data: jQuery.param(params) ,
                success: function (data) {
                    var idmessaggio=data.idmessaggio;
                    var today = new Date();
                    var dd = today.getDate();
                    var mm = today.getMonth()+1; //January is 0!
                    var hh=today.getHours();
                    var ii=today.getMinutes();
                    var yyyy = today.getFullYear();
                    if(dd<10){
                        dd='0'+dd
                    }
                    if(mm<10){
                        mm='0'+mm
                    }
                    if (hh<10) {
                        hh="0"+hh;
                    }
                    if (ii<10) {
                        ii="0"+ii;
                    }
                    var adesso= dd+'/'+mm+'/'+yyyy+' '+hh+':'+ii;
                    var htmlmessaggio="<div class='rightmessage'><div class='message-bubble'><div class='message-text'>"+$("#messageText").val()+"<span class='message-meta'>"+adesso+"</span></div></div></div><div class='clearboth'></div>";
                    $("#messageText").val('');
                    $.mobile.loading( 'hide');
                    $("#incomingMessages").append(htmlmessaggio);
                    var pagechatoffset=$("#segnapostoincomingMessages").offset().top;
                    window.localStorage.setItem("pagechatoffset",pagechatoffset);
                    if (pagechatoffset>80) {
                        //alert(pageleaderoffset);
                        $.mobile.silentScroll(pagechatoffset-80);
                    }
                    $("#messageText").val("");
                    console.log("ora lancio invianotifiche con idmessaggio:"+idmessaggio);
                    invianotifiche(idmessaggio);
                },
                error: function (e) {
                    alert("Messaggio non spedito!");
                    console.log("Messaggio non spedito");
                    $.mobile.loading( 'hide');
                    //resp=JSON.parse(window.localStorage.getItem("chat_memoria"));
                }

            });
        });

        function invianotifiche(idmessaggio) {
            //alert("ora devo inviare le notifiche per: "+idmessaggio);
            var params={};
            if (window.localStorage.getItem("idUser")>0) {
                params.id_utente=window.localStorage.getItem("idUser");
            } else {
                return false;
            }
            if (idmessaggio>0) {

            } else {
                return false;
            }
            params.secret=secret;
            params.idmessaggio=idmessaggio;
            console.log("invianotifiche lanciato con idmessaggio:"+idmessaggio);
            $.ajax({
                dataType: "json",
                type: 'POST',
                url: "https://www.diamondsclub.it/api/sendmessaggioappchat_parte2.php",
                data: jQuery.param(params) ,
                success: function (data) {
                    console.log("invianotifiche ritornato con successo");
                },
                error: function (e) {
                    console.log("invianotifiche ritornato con errore");
                    //resp=JSON.parse(window.localStorage.getItem("chat_memoria"));
                }

            });
        }
        

// ---------------------------------------------------------------------------------------------------------------
// (i) pagina login, login remoto e redirect
// ---------------------------------------------------------------------------------------------------------------
        $("#btn-submit-login").click(function(){
            var txt_email=$("#txt-email").val();
            var txt_password=$("#txt-password").val();
            var regId=window.localStorage.getItem("registrationId");
            var platform=window.localStorage.getItem("platform");
            var uuid=window.localStorage.getItem("uuid");
            var querystring="email=" + txt_email + "&secret=" + secret + "&password=" + txt_password+"&regId="+regId+"&platform="+platform+"&uuid="+uuid;
            console.log(querystring);
            //console.log("login email:"+txt_email);
            //console.log("login password:"+txt_password);
            //console.log("secret:"+secret);

            if (checkConnessione()) {
                $.mobile.loading( 'show', {
                    text: 'Loading',
                    textVisible: true,
                    theme: 'a',
                    textonly: false,
                    html: ''
                });
                $.ajax({
                    dataType: "json",
                    type: 'POST',
                    url: "https://www.diamondsclub.it/api/login.php",
                    data: querystring,
                    success: function (resp) {
                        if (resp.id_utente>0) {
                            nomeUtenteLoggato=resp.nome+' '+resp.cognome;
                            window.localStorage.setItem('nome',nomeUtenteLoggato);
                            window.localStorage.setItem('idUser',resp.id_utente);
                            window.localStorage.setItem('codiceUtente',resp.codice);
                            window.localStorage.setItem('platino',resp.platino);
                            window.localStorage.setItem('superuser',resp.superuser);
                            window.localStorage.setItem('amministratore',resp.amministratore);
                            window.localStorage.setItem('permessi_incaricato',resp.permessi_incaricato);
                            window.localStorage.removeItem('idOspite');
                            $(".iduserval").html(nomeUtenteLoggato);
                            cordova.plugins.notification.badge.set(resp.badge);
                            aggiornabadgenotifiche(resp.notifichebadge);
                            aggiornabadgechat(resp.chatbadge);
                            //alert(window.localStorage.getItem("registrationId"));
                            $.mobile.navigate("#page-index-logged");
                            $.mobile.loading( 'hide' );
                            inizializzazione_variabili();
                            return;
                        } else if (resp.id_ospite>0) {
                            nomeUtenteLoggato=resp.nome+' '+resp.cognome+' (o)';
                            window.localStorage.setItem('nome',nomeUtenteLoggato);
                            window.localStorage.setItem('idOspite',resp.id_ospite);
                            window.localStorage.removeItem('codiceUtente');
                            window.localStorage.removeItem('platino');
                            window.localStorage.removeItem('superuser');
                            window.localStorage.removeItem('amministratore');
                            window.localStorage.removeItem('permessi_incaricato');
                            window.localStorage.removeItem('idUser');
                            $(".iduserval").html(nomeUtenteLoggato);
                            $.mobile.navigate("#page-index-logged");
                            $.mobile.loading( 'hide' );
                            inizializzazione_variabili();
                            return;
                        } else {
                            $.mobile.loading( 'hide' );
                            alert("Errore di qualche tipo!");
                        }
                    },
                    error: function (e) {
                        $.mobile.loading( 'hide' );
                        alert("Errore: credenziali errate!");
                        console.log(e.message);
                    }
                });
            } else {
                alert("Nessuna connessione internet, non posso fare l'autenticazione!");
            }

        });
// ---------------------------------------------------------------------------------------------------------------
// (f) pagina login, login remoto e redirect
// ---------------------------------------------------------------------------------------------------------------





// GESTIONE CONNESSIONE (sembra non funzionare....)
//-------------------------------------------------
        function checkConnessione() {
            try {
                var networkstate = navigator.connection.type;
                //var networkstate = 'Connessione Wifi';
                var stato = {};
                stato[Connection.UNKNOWN]  = 'Connessione sconosciuta';
                stato[Connection.ETHERNET] = 'Connessione Ethernet';
                stato[Connection.WIFI]     = 'Connessione WiFi';
                stato[Connection.CELL_2G]  = 'Connessione Cell 2G';
                stato[Connection.CELL_3G]  = 'Connessione Cell 3G';
                stato[Connection.CELL_4G]  = 'Connessione Cell 4G';
                stato[Connection.CELL]     = 'Connessione Cell generica';
                stato[Connection.none]     = 'Nessuna connessione';

                //alert(networkstate);

                if (networkstate == 'none') {
                    console.log("Niente connessione");
                    return 0;
                } else {
                    console.log(stato[networkstate]);
                    return 1;
                }
            } catch (err) {
                console.log("Sono in locale, niente controllo connessione, e dico 0");
                return 0;
            }
        }
    //------- (f) end app here -----//

    }
};
