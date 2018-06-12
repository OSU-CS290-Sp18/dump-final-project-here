(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['park_card'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.escapeExpression, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=helpers.helperMissing, alias4="function";

  return "				<img class=\"photo_slot\" src = "
    + alias1(container.lambda(depth0, depth0))
    + "   alt= "
    + alias1(((helper = (helper = helpers.park_name || (depth0 != null ? depth0.park_name : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"park_name","hash":{},"data":data}) : helper)))
    + " "
    + alias1(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"index","hash":{},"data":data}) : helper)))
    + ". ></img>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "      <article class=\"single-park\">\r\n          <div class=\"park-name\"> "
    + ((stack1 = ((helper = (helper = helpers.park_name || (depth0 != null ? depth0.park_name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"park_name","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + " N.P. </div>\r\n		  <div class=\"park-content\">\r\n		  \r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.thumbnails : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				\r\n			\r\n        </div>\r\n      </article>";
},"useData":true});
})();