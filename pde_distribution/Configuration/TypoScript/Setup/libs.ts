lib.field_topmenu = HMENU
lib.field_topmenu {
	entryLevel = 0
	1 = TMENU
	1 {
		wrap = <ul class="nav navbar-nav"> | </ul>
		noBlur = 1
		NO = 1
		NO {
			wrapItemAndSub = <li>|</li>
			stdWrap.htmlSpecialChars = 1
			ATagTitle.field = title
		}
		ACT <.NO
		ACT {
			wrapItemAndSub = <li class="active">|</li>
		}
	}
}

lib.field_submenu = HMENU
lib.field_submenu {
	entryLevel = 1
	1 = TMENU
	1 {
		expAll = 1
		wrap = <ul class="nav navbar-nav"> | </ul>
		noBlur = 1
		NO = 1
		NO {
			wrapItemAndSub = <li>|</li>
			stdWrap.htmlSpecialChars = 1
			ATagTitle.field = title
		}
		ACT <.NO
		ACT {
			wrapItemAndSub = <li class="active">|</li>
		}
		IFSUB <.NO
		IFSUB {
			allWrap = <!!==:>|
			wrapItemAndSub = <li class="dropdown">|</li>
			ATagBeforeWrap = 1
			linkWrap = |&nbsp;<b class="caret"></b>
			ATagParams = class="dropdown-toggle" data-toggle="dropdown"
		}
		ACTIFSUB < .IFSUB
		ACTIFSUB {
			allWrap = <!!==:>|
		}
	}
	2 = TMENU
	2 {
		wrap = <ul class="dropdown-menu" role="menu" aria-labelledby="dLable">|</ul>
		expAll = 1
		
		NO = 1
		NO {
			allWrap = <li>|</li>
			stdWrap.htmlSpecialChars = 1
		}
		
		ACT < .NO
		ACT {
			ATagParams = class="active"
			allWrap = <li class="active">|</li>
		}
	}
}