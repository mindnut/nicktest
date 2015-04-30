
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){var prefix="panel";var index=1;var symbolDefns=sym.getComposition().symbolDefns;for(var key in symbolDefns){if(symbolDefns.hasOwnProperty(key)&&key.search(new RegExp(prefix+"[0-9]{1,2}"))!=-1){var button=sym.createChildSymbol("button","navigation");button.setVariable("panelId",key);button.$("btnLabel").html(+index++);$button=button.getSymbolElement();$button.css({float:"left",margin:"0px 0 0px 0px"});}}
$(".custom-button").mouseleave(function(evt){$(evt.currentTarget).css({"background-color":"rgba(229, 233, 233,0)"});});$(".custom-button").mouseenter(function(evt){$(evt.currentTarget).css({"background-color":"rgb(237, 241, 241)"});});$(".custom-button").mousedown(function(evt){$(evt.currentTarget).css({"background-color":"rgb(224,240,250)"});});});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'large1'
(function(symbolName){})("panel1");
//Edge symbol end:'panel1'

//=========================================================

//Edge symbol: 'button'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_btnBase}","click",function(sym,e){sym.getParentSymbol().$("base").empty();sym.getParentSymbol().createChildSymbol(sym.getVariable("panelId"),"base");});
//Edge binding end
})("button");
//Edge symbol end:'button'

//=========================================================

//Edge symbol: 'large1_1'
(function(symbolName){})("panel2");
//Edge symbol end:'panel2'

//=========================================================

//Edge symbol: 'large2_1'
(function(symbolName){})("panel3");
//Edge symbol end:'panel3'

//=========================================================

//Edge symbol: 'photos'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",20000,function(sym,e){sym.play(1000);});
//Edge binding end
})("photos");
//Edge symbol end:'photos'
})(jQuery,AdobeEdge,"EDGE-260752881");