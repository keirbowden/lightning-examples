({
	doSearch : function(component) {
        try
        {
	        var searchTerm=component.get("v.term");
			$A.get("e.bblightning:SearchEvent").
		    	    		setParams({term: searchTerm}).fire();
            
        }
        catch (e)
        {
            alert('Exception : '  + e);
        }
	}
})