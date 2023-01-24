(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[c[0x0]] = c;
    return '';
}
function regTextVar(a, b) {
    var c = ![];
    b = b['toLowerCase']();
    return d(b);
    function d(k, l) {
        switch (k) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var n = function () {
                switch (k) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (n) {
                return function () {
                    var s, t;
                    var u = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['startsWith']('photo'))
                        s = this['getByClassName']('PhotoPlayList');
                    else {
                        s = this['_getPlayListsWithViewer'](u);
                        t = j['bind'](this, u);
                    }
                    if (!c) {
                        for (var v = 0x0; v < s['length']; ++v) {
                            s[v]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, s, n, t);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['startsWith']('viewer.')) {
                var o = k['split']('.');
                var p = o[0x1];
                if (p) {
                    var q = o['slice'](0x2)['join']('.');
                    return d(q, { 'viewerName': p });
                }
            } else if (k['startsWith']('quiz.') && 'Quiz' in TDV) {
                var r = undefined;
                var n = function () {
                    switch (k) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                        if (s) {
                            r = s[0x1];
                            switch ('quiz.' + s[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (n) {
                    return function () {
                        var s = this['get']('data')['quiz'];
                        if (s) {
                            if (!c) {
                                if (r != undefined)
                                    if (r == 'global') {
                                        var u = this['get']('data')['quizConfig'];
                                        var w = u['objectives'];
                                        for (var y = 0x0, A = w['length']; y < A; ++y) {
                                            s['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, w[y]['id'], n), this);
                                        }
                                    } else {
                                        s['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, r, n), this);
                                    }
                                else
                                    s['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, n), this);
                                c = !![];
                            }
                            try {
                                var B = 0x0;
                                if (r != undefined) {
                                    if (r == 'global') {
                                        var u = this['get']('data')['quizConfig'];
                                        var w = u['objectives'];
                                        for (var y = 0x0, A = w['length']; y < A; ++y) {
                                            B += s['getObjective'](w[y]['id'], n);
                                        }
                                    } else {
                                        B = s['getObjective'](r, n);
                                    }
                                } else {
                                    B = s['get'](n);
                                    if (n == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        B += 0x1;
                                }
                                return B;
                            } catch (C) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return '';
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a]);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l];
            var n = function () {
                m['unbind']('start', n, this);
                e['call'](this);
            };
            m['bind']('start', n, this);
        } else
            e['call'](this);
    }
    function g(k) {
        return function (l) {
            if (k in l) {
                e['call'](this);
            }
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            if (k == m && l in n) {
                e['call'](this);
            }
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n];
            var p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.');
                var r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"width":"100%","start":"this.init(); this.syncPlaylists([this.mainPlayList,this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_playlist]); if(!this.get('fullscreenAvailable')) { [this.IconButton_138AC8EB_1C81_A718_41B9_C0E861AF42F4].forEach(function(component) { if(component.get('class') != 'ViewerArea') component.set('visible', false); }) }","data":{"textToSpeechConfig":{"volume":1,"stopBackgroundAudio":false,"speechOnInfoWindow":false,"speechOnQuizQuestion":false,"rate":1,"pitch":1,"speechOnTooltip":false},"defaultLocale":"es","history":{},"locales":{"es":"locale/es.txt"},"name":"Player486"},"scrollBarColor":"#000000","class":"Player","id":"rootPlayer","layout":"absolute","minHeight":20,"minWidth":20,"backgroundColor":["#FFFFFF"],"scripts":{"getMainViewer":TDV.Tour.Script.getMainViewer,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"getOverlays":TDV.Tour.Script.getOverlays,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"cloneBindings":TDV.Tour.Script.cloneBindings,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"quizShowScore":TDV.Tour.Script.quizShowScore,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"downloadFile":TDV.Tour.Script.downloadFile,"shareSocial":TDV.Tour.Script.shareSocial,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"init":TDV.Tour.Script.init,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"executeJS":TDV.Tour.Script.executeJS,"mixObject":TDV.Tour.Script.mixObject,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"showPopupImage":TDV.Tour.Script.showPopupImage,"playAudioList":TDV.Tour.Script.playAudioList,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"showWindow":TDV.Tour.Script.showWindow,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"setLocale":TDV.Tour.Script.setLocale,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"translate":TDV.Tour.Script.translate,"setValue":TDV.Tour.Script.setValue,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"quizFinish":TDV.Tour.Script.quizFinish,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"historyGoForward":TDV.Tour.Script.historyGoForward,"startMeasurement":TDV.Tour.Script.startMeasurement,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"historyGoBack":TDV.Tour.Script.historyGoBack,"resumePlayers":TDV.Tour.Script.resumePlayers,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getComponentByName":TDV.Tour.Script.getComponentByName,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"clone":TDV.Tour.Script.clone,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"setMapLocation":TDV.Tour.Script.setMapLocation,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"initAnalytics":TDV.Tour.Script.initAnalytics,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getMediaByName":TDV.Tour.Script.getMediaByName,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"initQuiz":TDV.Tour.Script.initQuiz,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"quizStart":TDV.Tour.Script.quizStart,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getKey":TDV.Tour.Script.getKey,"openLink":TDV.Tour.Script.openLink,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"registerKey":TDV.Tour.Script.registerKey,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"unregisterKey":TDV.Tour.Script.unregisterKey,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"textToSpeech":TDV.Tour.Script.textToSpeech,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"isPanorama":TDV.Tour.Script.isPanorama,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getPixels":TDV.Tour.Script.getPixels,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"existsKey":TDV.Tour.Script.existsKey,"createTween":TDV.Tour.Script.createTween,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject},"gap":10,"defaultMenu":["fullscreen","mute","rotation"],"hash": "a5c9d9caed592d2a6812f71a139bd41ceac2fada82e3192847f842ad999115f3", "definitions": [{"class":"FadeOutEffect","duration":100,"id":"effect_0A30489F_1C86_6738_41A8_2722230A2E2F"},{"visible":false,"right":"40%","maxHeight":46,"class":"IconButton","data":{"name":"-Expand"},"maxWidth":46,"backgroundOpacity":0,"rollOverIconURL":"skin/IconButton_069AFCF9_1C9E_98F8_41AA_EDF2EF9939E8_rollover.png","minHeight":1,"minWidth":1,"iconURL":"skin/IconButton_069AFCF9_1C9E_98F8_41AA_EDF2EF9939E8.png","bottom":0,"paddingTop":0,"transparencyActive":true,"paddingBottom":0,"paddingLeft":0,"click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, null, 'showEffect', false)}.bind(this); visibleFunc(this.Container_10BF264C_1C81_AB18_418E_C228A2BBA487); var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_307F1ACA_231D_F4CC_41B6_DE1D97EDB043, 'hideEffect', false)}.bind(this); invisibleFunc(this.IconButton_3BD6FE66_1C9E_9B08_41AE_65363919CAD0); invisibleFunc(this.IconButton_069AFCF9_1C9E_98F8_41AA_EDF2EF9939E8); invisibleFunc(this.IconButton_3BF02F26_1C9E_990B_419B_60D4788D76C9)","horizontalAlign":"center","paddingRight":0,"height":46,"verticalAlign":"middle","propagateClick":false,"left":"40%","id":"IconButton_069AFCF9_1C9E_98F8_41AA_EDF2EF9939E8"},{"width":"30%","id":"Container_12A55BC8_1C86_7918_419A_38D3F8B9FF36","right":"0%","scrollBarColor":"#000000","class":"Container","data":{"name":"Right"},"backgroundOpacity":0,"minHeight":1,"minWidth":1,"top":"0%","overflow":"scroll","paddingTop":0,"scrollBarMargin":2,"paddingBottom":0,"horizontalAlign":"right","paddingLeft":0,"paddingRight":10,"children":["this.IconButton_138AC8EB_1C81_A718_41B9_C0E861AF42F4","this.IconButton_128BCB90_1C86_7907_41B3_46B5B135C181","this.IconButton_128B7B91_1C86_7909_41B8_9320D8E0D421"],"height":"100%","verticalAlign":"middle","propagateClick":false,"layout":"horizontal"},{"buttonMoveUp":"this.IconButton_11799103_1C9E_A909_418E_09A8EA6A7B64","viewerArea":"this.MainViewer","mode":"quality","arrowKeysAction":"translate","buttonMoveDown":"this.IconButton_138A1D06_1C9E_7908_41BC_00628ACDA5FF","buttonZoomOut":"this.IconButton_138E31DC_1C9E_A93F_4194_059FF78E4793","buttonZoomIn":"this.IconButton_12FEFBA0_1C9E_9908_41B1_DC24C660435A","aaEnabled":true,"class":"PanoramaPlayer","touchControlMode":"drag_rotation","buttonCardboardView":"this.IconButton_124E5997_1C81_F908_41A5_4F230AEBB3C6","buttonMoveLeft":"this.IconButton_12B3BCE7_1C81_BF08_41BC_218123CBBD44","buttonMoveRight":"this.IconButton_12D5DAF7_1C9E_BB08_416D_19DFFACBC396","id":"MainViewerPanoramaPlayer","mouseControlMode":"drag_rotation"},{"class":"FadeInEffect","duration":100,"id":"effect_3061B548_231D_5DCD_41B4_93FF66204E67"},{"class":"IconButton","data":{"name":"Zoom In"},"backgroundOpacity":0,"rollOverIconURL":"skin/IconButton_12FEFBA0_1C9E_9908_41B1_DC24C660435A_rollover.png","minHeight":0,"minWidth":0,"iconURL":"skin/IconButton_12FEFBA0_1C9E_9908_41B1_DC24C660435A.png","pressedIconURL":"skin/IconButton_12FEFBA0_1C9E_9908_41B1_DC24C660435A_pressed.png","paddingTop":0,"transparencyActive":true,"paddingBottom":0,"horizontalAlign":"center","paddingLeft":0,"width":46,"paddingRight":0,"height":46,"verticalAlign":"middle","propagateClick":false,"id":"IconButton_12FEFBA0_1C9E_9908_41B1_DC24C660435A"},{"class":"IconButton","data":{"name":"Left"},"backgroundOpacity":0,"rollOverIconURL":"skin/IconButton_12B3BCE7_1C81_BF08_41BC_218123CBBD44_rollover.png","minHeight":0,"minWidth":0,"iconURL":"skin/IconButton_12B3BCE7_1C81_BF08_41BC_218123CBBD44.png","pressedIconURL":"skin/IconButton_12B3BCE7_1C81_BF08_41BC_218123CBBD44_pressed.png","paddingTop":0,"transparencyActive":true,"paddingBottom":0,"horizontalAlign":"center","paddingLeft":0,"width":46,"paddingRight":0,"height":46,"verticalAlign":"middle","propagateClick":false,"id":"IconButton_12B3BCE7_1C81_BF08_41BC_218123CBBD44"},{"class":"IconButton","data":{"name":"Previous"},"backgroundOpacity":0,"rollOverIconURL":"skin/IconButton_11F8C692_1C82_6B0B_41B2_28931AB2B43D_rollover.png","minHeight":0,"minWidth":0,"iconURL":"skin/IconButton_11F8C692_1C82_6B0B_41B2_28931AB2B43D.png","pressedIconURL":"skin/IconButton_11F8C692_1C82_6B0B_41B2_28931AB2B43D_pressed.png","paddingTop":0,"transparencyActive":true,"paddingBottom":0,"click":"this.loadFromCurrentMediaPlayList(this.mainPlayList, -1, true)","horizontalAlign":"center","paddingLeft":0,"width":46,"paddingRight":0,"height":46,"verticalAlign":"middle","propagateClick":false,"id":"IconButton_11F8C692_1C82_6B0B_41B2_28931AB2B43D"},{"class":"PlayList","id":"mainPlayList","items":[{"class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')","camera":"this.panorama_EE8D2AB0_E229_D7BC_41EC_38DBFAD27F34_camera","media":"this.panorama_EE8D2AB0_E229_D7BC_41EC_38DBFAD27F34"}]},{"class":"IconButton","data":{"name":"Next"},"backgroundOpacity":0,"rollOverIconURL":"skin/IconButton_128B7B91_1C86_7909_41B8_9320D8E0D421_rollover.png","minHeight":0,"minWidth":0,"iconURL":"skin/IconButton_128B7B91_1C86_7909_41B8_9320D8E0D421.png","pressedIconURL":"skin/IconButton_128B7B91_1C86_7909_41B8_9320D8E0D421_pressed.png","paddingTop":0,"transparencyActive":true,"paddingBottom":0,"click":"this.loadFromCurrentMediaPlayList(this.mainPlayList, 1, true)","horizontalAlign":"center","paddingLeft":0,"width":46,"paddingRight":0,"height":46,"verticalAlign":"middle","propagateClick":false,"id":"IconButton_128B7B91_1C86_7909_41B8_9320D8E0D421"},{"id":"Container_129084CF_1C83_AF18_418C_2D8031993BE6","right":"25%","scrollBarColor":"#000000","class":"Container","data":{"name":"Center"},"backgroundOpacity":0,"minHeight":1,"minWidth":1,"top":"0%","overflow":"scroll","paddingTop":0,"scrollBarMargin":2,"paddingBottom":0,"horizontalAlign":"center","paddingLeft":0,"paddingRight":0,"children":["this.IconButton_12B3BCE7_1C81_BF08_41BC_218123CBBD44","this.IconButton_12D5DAF7_1C9E_BB08_416D_19DFFACBC396","this.IconButton_11799103_1C9E_A909_418E_09A8EA6A7B64","this.IconButton_138A1D06_1C9E_7908_41BC_00628ACDA5FF","this.IconButton_12FEFBA0_1C9E_9908_41B1_DC24C660435A","this.IconButton_138E31DC_1C9E_A93F_4194_059FF78E4793","this.IconButton_124E5997_1C81_F908_41A5_4F230AEBB3C6"],"height":"100%","verticalAlign":"middle","propagateClick":false,"layout":"horizontal","left":"25%"},{"selectedItemBorderSize":2,"right":"1%","scrollBarColor":"#FFFFFF","class":"ThumbnailList","data":{"name":"THUMBNAIL LIST"},"maxWidth":800,"itemLabelFontSize":"12px","backgroundOpacity":0.9,"itemPaddingTop":3,"minHeight":20,"itemThumbnailOpacity":1,"minWidth":20,"backgroundColor":["#534741"],"itemThumbnailShadowSpread":1,"itemThumbnailWidth":120,"gap":10,"itemLabelTextDecoration":"none","itemBackgroundOpacity":0,"itemThumbnailShadow":false,"itemBackgroundColor":[],"itemBackgroundColorRatios":[],"itemThumbnailShadowOpacity":0.54,"id":"ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839","selectedItemLabelFontWeight":"bold","scrollBarOpacity":0,"rollOverItemBackgroundOpacity":0,"rollOverItemLabelFontWeight":"normal","itemLabelFontFamily":"Arial","itemBackgroundColorDirection":"vertical","itemThumbnailScaleMode":"fit_outside","paddingTop":10,"paddingBottom":0,"selectedItemBorderColor":"#FFFFFF","itemBorderRadius":0,"itemPaddingBottom":3,"propagateClick":false,"playList":"this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_playlist","rollOverItemLabelFontColor":"#FFFFFF","itemLabelFontWeight":"normal","selectedItemLabelFontColor":"#FFFFFF","itemLabelFontStyle":"normal","selectedItemBackgroundColorRatios":[0],"itemLabelFontColor":"#999999","bottom":70,"itemPaddingRight":3,"scrollBarMargin":0,"itemPaddingLeft":3,"paddingLeft":14,"itemLabelGap":8,"itemThumbnailShadowBlurRadius":8,"backgroundColorRatios":[0],"paddingRight":14,"itemThumbnailBorderRadius":0,"itemThumbnailShadowColor":"#000000","selectedItemBackgroundOpacity":0.9,"left":"1%","itemThumbnailHeight":70,"layout":"horizontal","scrollBarWidth":5,"selectedItemBackgroundColor":["#534741"]},{"maxHeight":46,"class":"IconButton","data":{"name":"VR"},"maxWidth":46,"backgroundOpacity":0,"rollOverIconURL":"skin/IconButton_124E5997_1C81_F908_41A5_4F230AEBB3C6_rollover.png","minHeight":1,"minWidth":1,"iconURL":"skin/IconButton_124E5997_1C81_F908_41A5_4F230AEBB3C6.png","pressedIconURL":"skin/IconButton_124E5997_1C81_F908_41A5_4F230AEBB3C6_pressed.png","paddingTop":0,"transparencyActive":true,"paddingBottom":0,"horizontalAlign":"center","paddingLeft":0,"width":46,"paddingRight":0,"height":46,"verticalAlign":"middle","propagateClick":false,"id":"IconButton_124E5997_1C81_F908_41A5_4F230AEBB3C6"},{"toolTipFontFamily":"Arial","maxHeight":46,"class":"IconButton","toolTipBackgroundColor":"#F6F6F6","data":{"name":"fullscreen"},"maxWidth":46,"toolTipTextShadowColor":"#000000","backgroundOpacity":0,"rollOverIconURL":"skin/IconButton_138AC8EB_1C81_A718_41B9_C0E861AF42F4_rollover.png","minHeight":1,"toolTipPaddingRight":6,"toolTipPaddingTop":4,"minWidth":1,"iconURL":"skin/IconButton_138AC8EB_1C81_A718_41B9_C0E861AF42F4.png","mode":"toggle","toolTip":trans('IconButton_138AC8EB_1C81_A718_41B9_C0E861AF42F4.toolTip'),"paddingTop":0,"transparencyActive":true,"toolTipFontColor":"#606060","paddingBottom":0,"toolTipBorderColor":"#767676","horizontalAlign":"center","paddingLeft":0,"width":46,"paddingRight":0,"height":46,"verticalAlign":"middle","toolTipPaddingBottom":4,"toolTipPaddingLeft":6,"propagateClick":false,"id":"IconButton_138AC8EB_1C81_A718_41B9_C0E861AF42F4","toolTipShadowColor":"#333333"},{"right":"1%","children":["this.Container_1185BA07_1C82_BB09_4190_3425ACEF39CF","this.Container_12A55BC8_1C86_7918_419A_38D3F8B9FF36","this.Container_129084CF_1C83_AF18_418C_2D8031993BE6"],"scrollBarColor":"#000000","class":"Container","data":{"name":"SETTINGS"},"maxWidth":800,"backgroundOpacity":0.9,"minHeight":1,"minWidth":1,"backgroundColor":["#534741"],"gap":10,"bottom":20,"overflow":"scroll","scrollBarMargin":2,"paddingTop":0,"paddingBottom":0,"paddingLeft":0,"backgroundColorRatios":[0],"paddingRight":0,"height":50,"propagateClick":false,"left":"1%","id":"Container_10BF264C_1C81_AB18_418E_C228A2BBA487","layout":"absolute"},{"class":"IconButton","data":{"name":"Right"},"backgroundOpacity":0,"rollOverIconURL":"skin/IconButton_12D5DAF7_1C9E_BB08_416D_19DFFACBC396_rollover.png","minHeight":0,"minWidth":0,"iconURL":"skin/IconButton_12D5DAF7_1C9E_BB08_416D_19DFFACBC396.png","pressedIconURL":"skin/IconButton_12D5DAF7_1C9E_BB08_416D_19DFFACBC396_pressed.png","paddingTop":0,"transparencyActive":true,"paddingBottom":0,"horizontalAlign":"center","paddingLeft":0,"width":46,"paddingRight":0,"height":46,"verticalAlign":"middle","propagateClick":false,"id":"IconButton_12D5DAF7_1C9E_BB08_416D_19DFFACBC396"},{"width":"30%","id":"Container_1185BA07_1C82_BB09_4190_3425ACEF39CF","scrollBarColor":"#000000","class":"Container","data":{"name":"Left"},"backgroundOpacity":0,"minHeight":1,"minWidth":1,"top":"0%","overflow":"scroll","paddingTop":0,"scrollBarMargin":2,"paddingBottom":0,"paddingLeft":10,"paddingRight":0,"children":["this.IconButton_11F8C692_1C82_6B0B_41B2_28931AB2B43D","this.IconButton_1297FF98_1C82_9907_41AD_A09E1EA44354"],"height":"100%","verticalAlign":"middle","propagateClick":false,"layout":"horizontal","left":"0%"},{"class":"IconButton","data":{"name":"Thumblist"},"backgroundOpacity":0,"rollOverIconURL":"skin/IconButton_1297FF98_1C82_9907_41AD_A09E1EA44354_rollover.png","minHeight":0,"minWidth":0,"iconURL":"skin/IconButton_1297FF98_1C82_9907_41AD_A09E1EA44354.png","mode":"toggle","pressedIconURL":"skin/IconButton_1297FF98_1C82_9907_41AD_A09E1EA44354_pressed.png","paddingTop":0,"transparencyActive":true,"paddingBottom":0,"click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_0D9B8AD4_1C86_9B08_41AD_E3E797295AC7, 'showEffect', false)}.bind(this); var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_0D94FAD4_1C86_9B08_41A8_2DB4814C41C5, 'hideEffect', false)}.bind(this); if(!this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839.get('visible')){ visibleFunc(this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839) } else { invisibleFunc(this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839) }","horizontalAlign":"center","paddingLeft":0,"width":46,"paddingRight":0,"height":46,"verticalAlign":"middle","propagateClick":false,"id":"IconButton_1297FF98_1C82_9907_41AD_A09E1EA44354"},{"class":"PlayList","id":"ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_playlist","items":[{"class":"PanoramaPlayListItem","camera":"this.panorama_EE8D2AB0_E229_D7BC_41EC_38DBFAD27F34_camera","media":"this.panorama_EE8D2AB0_E229_D7BC_41EC_38DBFAD27F34","player":"this.MainViewerPanoramaPlayer"}]},{"class":"IconButton","data":{"name":"Down"},"backgroundOpacity":0,"rollOverIconURL":"skin/IconButton_138A1D06_1C9E_7908_41BC_00628ACDA5FF_rollover.png","minHeight":0,"minWidth":0,"iconURL":"skin/IconButton_138A1D06_1C9E_7908_41BC_00628ACDA5FF.png","pressedIconURL":"skin/IconButton_138A1D06_1C9E_7908_41BC_00628ACDA5FF_pressed.png","paddingTop":0,"transparencyActive":true,"paddingBottom":0,"horizontalAlign":"center","paddingLeft":0,"width":46,"paddingRight":0,"height":46,"verticalAlign":"middle","propagateClick":false,"id":"IconButton_138A1D06_1C9E_7908_41BC_00628ACDA5FF"},{"class":"FadeOutEffect","duration":100,"id":"effect_307F1ACA_231D_F4CC_41B6_DE1D97EDB043"},{"class":"PanoramaCamera","initialSequence":"this.sequence_E99F14CD_E229_33E4_41BF_146F4589618A","enterPointingToHorizon":true,"initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"id":"panorama_EE8D2AB0_E229_D7BC_41EC_38DBFAD27F34_camera"},{"visible":false,"id":"IconButton_3BF02F26_1C9E_990B_419B_60D4788D76C9","right":"1%","maxHeight":46,"class":"IconButton","data":{"name":"-next"},"maxWidth":46,"backgroundOpacity":0,"minHeight":1,"minWidth":1,"iconURL":"skin/IconButton_3BF02F26_1C9E_990B_419B_60D4788D76C9.png","top":"35%","bottom":"35%","paddingTop":0,"transparencyActive":true,"paddingBottom":0,"paddingLeft":0,"click":"this.loadFromCurrentMediaPlayList(this.mainPlayList, 1, true)","horizontalAlign":"center","width":92,"paddingRight":0,"verticalAlign":"middle","propagateClick":false},{"subtitlesFontSize":"3vmin","subtitlesBackgroundColor":"#000000","progressBackgroundColor":["#FFFFFF"],"playbackBarBorderRadius":0,"progressBottom":0,"class":"ViewerArea","toolTipShadowColor":"#333333","playbackBarProgressBorderColor":"#000000","toolTipTextShadowColor":"#000000","subtitlesBackgroundOpacity":0.2,"toolTipPaddingTop":4,"id":"MainViewer","progressHeight":10,"playbackBarHeadBorderRadius":0,"minHeight":50,"toolTipPaddingRight":6,"progressBorderSize":0,"minWidth":100,"playbackBarHeadShadowBlurRadius":3,"progressBarBorderRadius":0,"playbackBarHeadBorderColor":"#000000","playbackBarHeadHeight":15,"playbackBarBorderSize":0,"progressBarBorderSize":0,"data":{"name":"Main Viewer"},"playbackBarLeft":0,"subtitlesFontColor":"#FFFFFF","subtitlesTextShadowOpacity":1,"playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesBorderColor":"#FFFFFF","playbackBarHeadBorderSize":0,"vrPointerColor":"#FFFFFF","progressBorderRadius":0,"playbackBarHeadShadowColor":"#000000","paddingTop":0,"playbackBarHeadShadow":true,"progressLeft":0,"toolTipFontColor":"#606060","paddingBottom":0,"subtitlesTextShadowHorizontalLength":1,"subtitlesFontFamily":"Arial","playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarBackgroundOpacity":1,"surfaceReticleColor":"#FFFFFF","width":"100%","firstTransitionDuration":0,"toolTipPaddingBottom":4,"height":"100%","propagateClick":false,"playbackBarBottom":5,"playbackBarBackgroundColor":["#FFFFFF"],"playbackBarHeight":10,"toolTipFontFamily":"Arial","toolTipBackgroundColor":"#F6F6F6","playbackBarProgressBorderSize":0,"playbackBarHeadWidth":6,"playbackBarBackgroundColorDirection":"vertical","playbackBarRight":0,"playbackBarProgressBorderRadius":0,"playbackBarProgressBackgroundColor":["#3399FF"],"subtitlesBottom":50,"subtitlesTextShadowVerticalLength":1,"surfaceReticleSelectionColor":"#FFFFFF","progressBackgroundColorRatios":[0],"playbackBarHeadShadowOpacity":0.7,"progressRight":0,"subtitlesTop":0,"toolTipFontSize":"1.11vmin","vrPointerSelectionColor":"#FF6600","toolTipBorderColor":"#767676","playbackBarProgressBackgroundColorRatios":[0],"progressBarBorderColor":"#000000","paddingLeft":0,"paddingRight":0,"vrPointerSelectionTime":2000,"progressBarBackgroundColorRatios":[0],"subtitlesGap":0,"toolTipPaddingLeft":6,"playbackBarBorderColor":"#FFFFFF","subtitlesTextShadowColor":"#000000","progressBarBackgroundColor":["#3399FF"],"progressBorderColor":"#000000"},{"visible":false,"id":"IconButton_3BD6FE66_1C9E_9B08_41AE_65363919CAD0","maxHeight":46,"class":"IconButton","data":{"name":"-previous"},"maxWidth":46,"backgroundOpacity":0,"minHeight":1,"minWidth":1,"iconURL":"skin/IconButton_3BD6FE66_1C9E_9B08_41AE_65363919CAD0.png","top":"35%","bottom":"35%","paddingTop":0,"transparencyActive":true,"paddingBottom":0,"paddingLeft":0,"click":"this.loadFromCurrentMediaPlayList(this.mainPlayList, -1, true)","horizontalAlign":"center","width":92,"paddingRight":0,"verticalAlign":"middle","propagateClick":false,"left":"1%"},{"frames":[{"cube":{"class":"ImageResource","levels":[{"class":"TiledImageResourceLevel","height":1536,"width":9216,"tags":"ondemand","rowCount":3,"url":"media/panorama_EE8D2AB0_E229_D7BC_41EC_38DBFAD27F34_0/{face}/0/{row}_{column}.jpg","colCount":18},{"class":"TiledImageResourceLevel","height":1024,"width":6144,"tags":"ondemand","rowCount":2,"url":"media/panorama_EE8D2AB0_E229_D7BC_41EC_38DBFAD27F34_0/{face}/1/{row}_{column}.jpg","colCount":12},{"class":"TiledImageResourceLevel","height":512,"width":3072,"tags":["ondemand","preload"],"rowCount":1,"url":"media/panorama_EE8D2AB0_E229_D7BC_41EC_38DBFAD27F34_0/{face}/2/{row}_{column}.jpg","colCount":6}]},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_EE8D2AB0_E229_D7BC_41EC_38DBFAD27F34_t.jpg"}],"label":trans('panorama_EE8D2AB0_E229_D7BC_41EC_38DBFAD27F34.label'),"hfov":360,"vfov":180,"hfovMin":"150%","thumbnailUrl":"media/panorama_EE8D2AB0_E229_D7BC_41EC_38DBFAD27F34_t.jpg","hfovMax":130,"class":"Panorama","data":{"label":"IMG_20230114_110854_00_104"},"id":"panorama_EE8D2AB0_E229_D7BC_41EC_38DBFAD27F34"},{"class":"IconButton","data":{"name":"Collapse"},"backgroundOpacity":0,"rollOverIconURL":"skin/IconButton_128BCB90_1C86_7907_41B3_46B5B135C181_rollover.png","minHeight":0,"minWidth":0,"iconURL":"skin/IconButton_128BCB90_1C86_7907_41B3_46B5B135C181.png","pressedIconURL":"skin/IconButton_128BCB90_1C86_7907_41B3_46B5B135C181_pressed.png","paddingTop":0,"transparencyActive":true,"paddingBottom":0,"click":"var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_0A30489F_1C86_6738_41A8_2722230A2E2F, 'hideEffect', false)}.bind(this); invisibleFunc(this.Container_10BF264C_1C81_AB18_418E_C228A2BBA487); invisibleFunc(this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839); var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_3061B548_231D_5DCD_41B4_93FF66204E67, 'showEffect', false)}.bind(this); visibleFunc(this.IconButton_3BD6FE66_1C9E_9B08_41AE_65363919CAD0); visibleFunc(this.IconButton_069AFCF9_1C9E_98F8_41AA_EDF2EF9939E8); visibleFunc(this.IconButton_3BF02F26_1C9E_990B_419B_60D4788D76C9)","horizontalAlign":"center","paddingLeft":0,"width":46,"paddingRight":0,"height":46,"verticalAlign":"middle","propagateClick":false,"id":"IconButton_128BCB90_1C86_7907_41B3_46B5B135C181"},{"class":"FadeOutEffect","duration":200,"id":"effect_0D94FAD4_1C86_9B08_41A8_2DB4814C41C5"},{"class":"FadeInEffect","duration":200,"id":"effect_0D9B8AD4_1C86_9B08_41AD_E3E797295AC7"},{"class":"IconButton","data":{"name":"Up"},"backgroundOpacity":0,"rollOverIconURL":"skin/IconButton_11799103_1C9E_A909_418E_09A8EA6A7B64_rollover.png","minHeight":0,"minWidth":0,"iconURL":"skin/IconButton_11799103_1C9E_A909_418E_09A8EA6A7B64.png","pressedIconURL":"skin/IconButton_11799103_1C9E_A909_418E_09A8EA6A7B64_pressed.png","paddingTop":0,"transparencyActive":true,"paddingBottom":0,"horizontalAlign":"center","paddingLeft":0,"width":46,"paddingRight":0,"height":46,"verticalAlign":"middle","propagateClick":false,"id":"IconButton_11799103_1C9E_A909_418E_09A8EA6A7B64"},{"class":"IconButton","data":{"name":"Zoom Out"},"backgroundOpacity":0,"rollOverIconURL":"skin/IconButton_138E31DC_1C9E_A93F_4194_059FF78E4793_rollover.png","minHeight":0,"minWidth":0,"iconURL":"skin/IconButton_138E31DC_1C9E_A93F_4194_059FF78E4793.png","pressedIconURL":"skin/IconButton_138E31DC_1C9E_A93F_4194_059FF78E4793_pressed.png","paddingTop":0,"transparencyActive":true,"paddingBottom":0,"horizontalAlign":"center","paddingLeft":0,"width":46,"paddingRight":0,"height":46,"verticalAlign":"middle","propagateClick":false,"id":"IconButton_138E31DC_1C9E_A93F_4194_059FF78E4793"},{"class":"PanoramaCameraSequence","id":"sequence_E99F14CD_E229_33E4_41BF_146F4589618A","movements":[{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_in"},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_out"}]}],"children":["this.MainViewer","this.Container_10BF264C_1C81_AB18_418E_C228A2BBA487","this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839","this.IconButton_069AFCF9_1C9E_98F8_41AA_EDF2EF9939E8","this.IconButton_3BD6FE66_1C9E_9B08_41AE_65363919CAD0","this.IconButton_3BF02F26_1C9E_990B_419B_60D4788D76C9"],"paddingTop":0,"scrollBarMargin":2,"buttonToggleFullscreen":"this.IconButton_138AC8EB_1C81_A718_41B9_C0E861AF42F4","paddingBottom":0,"paddingLeft":0,"backgroundColorRatios":[0],"paddingRight":0,"vrPolyfillScale":0.5,"height":"100%","propagateClick":false};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var a = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return a;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2022.2.0.js.map
})();
//Generated with v2022.2.0, Tue Jan 24 2023