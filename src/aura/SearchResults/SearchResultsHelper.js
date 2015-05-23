({
	searched : function(component, event) {
        var searchedTerm=event.getParam("term");
        component.set('v.msg', 
                      'You searched for the term [' + searchedTerm +
                      '] - if I had an Apex controller, ' + 
                      ' I might find some matching records');
	}
})