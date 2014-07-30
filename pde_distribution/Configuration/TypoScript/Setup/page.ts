page = PAGE
#page.config.metaCharset = utf-8
page {
	config {
		metaCharset = utf-8
		additionalHeaders = Content-Type:text/html;charset=utf-8
	}
	
	includeCSS.bootstrap = EXT:pde_distribution/Resources/Public/Bootstrap/css/bootstrap.min.css
	includeCSS.bootstratheme = EXT:pde_distribution/Resources/Public/Bootstrap/css/bootstrap-theme.min.css
	includeCSS.bootstrapcustom = EXT:pde_distribution/Resources/Public/Css/custom.css
	
	includeJS.bootstrap = EXT:pde_distribution/Resources/Public/Bootstrap/js/bootstrap.min.js
	
	10 = FLUIDTEMPLATE
	10 {
		file = EXT:pde_distribution/Resources/Private/Template/index.html
		layoutRootPath = EXT:pde_distribution/Resources/Private/Layouts/
		partialRootPath = EXT:pde_distribution/Resources/Private/Partials/
		variables {
			hallo = TEXT
			hallo.value = HALLO WELT!
			content < styles.content.get
		}
	}
	
}
