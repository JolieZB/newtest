Validator = {	Require : /.+/,
	Email : /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
	Phone : /^((\(\d{2,3}\))|(\d{3}\-))?(\(0\d{2,3}\)|0\d{2,3}-)?[1-9]\d{6,7}(\-\d{1,4})?$/,
	Mobile : /^(13[0-9]{9})|(18[0-9]{9})|(15[0-9]{9})|(176[0-9]{8})$/,
	Url : /^http:\/\/[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/,
	IdCard : "this.IsIdCard(value)",
	Currency : /^\d+(\.\d+)?$/,
	Number : /^\d+$/,
	Numberlimit : /^[0-9]\d{1,19}$/,
	Zip : /^[1-9]\d{5}$/,
	QQ : /^[1-9]\d{4,10}$/,
	NumberWord : /^[a-zA-Z0-9|]{1,20}$/,
	Integer : /^[-\+]?\d+$/,
	Double : /^[-\+]?\d+(\.\d+)?$/,
	English : /^[A-Za-z]+$/,
	Chinese : /^[\u0391-\uFFE5]+$/,
	Username : /^[a-z]\w{3,}$/i,
	UnSafe : /^(([A-Z]*|[a-z]*|\d*|[-_\~!@#\$%\^&\*\.\(\)\[\]\{\}<>\?\\\/\'\"]*)|.{0,5})$|\s/,
	IsSafe : function(str) {
		return !this.UnSafe.test(str);
	},
	SafeString : "this.IsSafe(value)",
	Filter : "this.DoFilter(value, getAttribute('accept'))",
	Limit : "this.limit(this.LenB(value),getAttribute('min'), getAttribute('max'))",
	LimitB : "this.limit(this.LenB(value), getAttribute('min'), getAttribute('max'))",
	LimitA : "this.limitA(this.LenB(value), getAttribute('min'), getAttribute('max'))",
	LimitC : "this.limitA(this.LenC(value), getAttribute('min'), getAttribute('max'))",
	Date : "this.IsDate(value, getAttribute('min'), getAttribute('format'))",
	Repeat : "value == document.getElementsByName(getAttribute('to'))[0].value",
	Range : "getAttribute('min') <= (value|0) && (value|0) <= getAttribute('max')",
	Compare : "this.compare(value,getAttribute('operator'),getAttribute('to'))",
	CompareOther : "this.compare(value,getAttribute('operator'),document.getElementsByName(getAttribute('to'))[0].value)",
	Custom : "this.Exec(value, getAttribute('regexp'))",
	Group : "this.MustChecked(getAttribute('name'), getAttribute('min'), getAttribute('max'))",
	ErrorItem : [ document.forms[0] ],
	ErrorMessage : [],
	Validate : function(theForm, mode) {
		var obj = theForm || event.srcElement;
		var count = obj.elements.length;
		this.ErrorMessage.length = 1;
		this.ErrorItem.length = 1;
		this.ErrorItem[0] = obj;
		for ( var i = 0; i < count; i++) {
			with (obj.elements[i]) {
				var _dataType = getAttribute("dataType");
				if (typeof (_dataType) == "object"
						|| typeof (this[_dataType]) == "undefined")
					continue;
				this.ClearState(obj.elements[i]);
				if (getAttribute("require") == "false"
						&& value.replace(/\s+/gm, "") == "")
					continue;
				switch (_dataType) {
				case "IdCard":
				case "Date":
				case "Repeat":
				case "Range":
				case "Compare":
				case "Custom":
				case "Group":
				case "Limit":
				case "LimitB":
				case "SafeString":
				case "Filter":
				case "CompareOther":
					if (_dataType == "CompareOther") {
						if (!new RegExp(getAttribute("regexp"), "g")
								.test(value)) {
							this.AddError(i, getAttribute("regexpMsg"));
							break;
						}
						if (document.getElementsByName(getAttribute('to'))[0].value == '') {
							break;
						}
					}
				case "LimitA":
					if (!eval(this[_dataType])) {
						this.AddError(i, getAttribute("msg"));
					}
					break;
				case "LimitC":
					if (!eval(this[_dataType])) {
						this.AddError(i, getAttribute("msg"));
					}
					break;
				default:
					if (!this[_dataType].test(value.replace(/\s+/gm, ""))) {
						this.AddError(i, getAttribute("msg"));
					}
					break;
				}
			}
		}
		if (this.ErrorMessage.length > 1) {
			mode = mode || 1;
			var errCount = this.ErrorItem.length;
			var rowNum = this.ErrorMessage.length + 1;
			var maxLen = this.getMaxLen(this.ErrorMessage);
			
			// 根据模式设置提示信息
			switch (mode) {
			case 2:
				for ( var i = 1; i < errCount; i++)
					this.ErrorItem[i].style.color = "red";
			case 1:
				//top.layer.alert(this.ErrorMessage.join("<br/>"), 8); 
				$.toptip(this.ErrorMessage[1], 'warning'); 
				//alertEmptyInfoForValidator(this.ErrorMessage.join("<br/>"),btnId,maxLen*9,rowNum*32);
				break;
			case 3:
				for ( var i = 1; i < errCount; i++) {
					try {
						var span = document.createElement("SPAN");
						span.id = "__ErrorMessagePanel";
						span.style.color = "red";
						this.ErrorItem[i].parentNode.appendChild(span);
						span.innerHTML = this.ErrorMessage[i].replace(/\d+:/,"*");
					} catch (e) {
						layer.alert(e.description, 8); 
						//alertEmptyInfoForValidator(e.description,btnId,400,400);
					}
				}
				this.ErrorItem[1].focus();
				break;
			case 4:
				break;
			default:
				//layer.alert(this.ErrorMessage.join("<br/>"), 8); 
				$.toptip(this.ErrorMessage[1], 'warning'); 
				//alertEmptyInfoForValidator(this.ErrorMessage.join("<br/>"),btnId,maxLen*9,rowNum*32);
				break;
			}
			return false;
		}
		return true;
	},
	limit : function(len, min, max) {
		min = min || 0;
		max = max || Number.MAX_VALUE;
		if (len == 0) 
			return true;
		return min <= len && len <= max;
	},
	limitA : function(len, min, max) {
		min = min || 0;
		max = max || Number.MAX_VALUE;
		return min <= len && len <= max && len != 0;
	},
	limitC : function(len, min, max) {
		min = min || 0;
		max = max || Number.MAX_VALUE;
		return min <= len && len <= max && len != 0;
	},
	LenC : function(str) {
		return str.length;
	},
	LenB : function(str) {
		//return str.replace(/\s+/gm, "").replace(/[^\x00-\xff]/g, "**").length;
		return str.replace(/[^\x00-\xff]/g, "**").length;
	},
	getMaxLen : function() {
		var maxLen = 0;
		for (var i in this.ErrorMessage){
			var str = this.ErrorMessage[i];
			str = str.replace(/&nbsp;/g, "");
			var thisLen = this.LenB(str);
			if (thisLen > maxLen) maxLen = thisLen;
			if (i == 0){
				this.ErrorMessage[i] = "&nbsp;&nbsp;" + str;
			} else {
				this.ErrorMessage[i] = "&nbsp;&nbsp;&nbsp;&nbsp;" + str;
			}
		}
		if (maxLen < 30) maxLen = 30;
		return maxLen;
	},
	ClearState : function(elem) {
		with (elem) {
			if (style.color == "red")
				style.color = "";
			var lastNode = parentNode.childNodes[parentNode.childNodes.length - 1];
			if (lastNode.id == "__ErrorMessagePanel")
				parentNode.removeChild(lastNode);
		}
	},
	AddError : function(index, str) {
		this.ErrorItem[this.ErrorItem.length] = this.ErrorItem[0].elements[index];
		//this.ErrorMessage[this.ErrorMessage.length] = this.ErrorMessage.length
		//		+ ":" + str;
		this.ErrorMessage[this.ErrorMessage.length] = str;
	},
	Exec : function(op, reg) {
		return new RegExp(reg, "g").test(op);
	},
	compare : function(op1, operator, op2) {
		//将字符串解析为浮点数，这样可以比较小数 modified by deng 2012-08-30
		op1 = parseFloat(op1);
		op2 = parseFloat(op2);
		switch (operator) {
		case "NotEqual":
			return (op1 != op2);
		case "GreaterThan":
			return (op1 > op2);
		case "GreaterThanEqual":
			return (op1 >= op2);
		case "LessThan":
			return (op1 < op2);
		case "LessThanEqual":
			return (op1 <= op2);
		default:
			return (op1 == op2);
		}
	},
	MustChecked : function(name, min, max) {
		var groups = document.getElementsByName(name);
		var hasChecked = 0;
		min = min || 1;
		max = max || groups.length;
		for ( var i = groups.length - 1; i >= 0; i--)
			if (groups[i].checked)
				hasChecked++;
		return min <= hasChecked && hasChecked <= max;
	},
	DoFilter : function(input, filter) {
		return new RegExp("^.+\.(?=EXT)(EXT)$".replace(/EXT/g, filter.split(
				/\s*,\s*/).join("|")), "gi").test(input);
	},
	IsIdCard : function(num) {
		var date, Ai;
		var number=num.toLowerCase();
		var verify = "10x98765432";
		var Wi = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ];
		var area = [ '', '', '', '', '', '', '', '', '', '', '', '北京', '天津',
				'河北', '山西', '内蒙古', '', '', '', '', '', '辽宁', '吉林', '黑龙江', '',
				'', '', '', '', '', '', '上海', '江苏', '浙江', '安微', '福建', '江西',
				'山东', '', '', '', '河南', '湖北', '湖南', '广东', '广西', '海南', '', '',
				'', '重庆', '四川', '贵州', '云南', '西藏', '', '', '', '', '', '', '陕西',
				'甘肃', '青海', '宁夏', '新疆', '', '', '', '', '', '台湾', '', '', '',
				'', '', '', '', '', '', '香港', '澳门', '', '', '', '', '', '', '',
				'', '国外' ];
		var re = number
				.match(/^(\d{2})\d{4}(((\d{2})(\d{2})(\d{2})(\d{3}))|((\d{4})(\d{2})(\d{2})(\d{3}[x\d])))$/i);
		if (re == null)
			return false;
		if (re[1] >= area.length || area[re[1]] == "")
			return false;
		if (re[2].length == 12) {
			Ai = number.substr(0, 17);
			date = [ re[9], re[10], re[11] ].join("-");
		} else {
			Ai = number.substr(0, 6) + "19" + number.substr(6);
			date = [ "19" + re[4], re[5], re[6] ].join("-");
		}
		if (!this.IsDate(date, "ymd"))
			return false;
		var sum = 0;
		for ( var i = 0; i <= 16; i++) {
			sum += Ai.charAt(i) * Wi[i];
		}
		Ai += verify.charAt(sum % 11);
		return (number.length == 15 || number.length == 18 && number == Ai);
	},
	IsDate : function(op, formatString) {
		formatString = formatString || "ymd";
		var m, year, month, day;
		switch (formatString) {
		case "ymd":
			m = op.match(new RegExp(
					"^((\\d{4})|(\\d{2}))([-./])(\\d{1,2})\\4(\\d{1,2})$"));
			if (m == null)
				return false;
			day = m[6];
			month = m[5] * 1;
			year = (m[2].length == 4) ? m[2] : GetFullYear(parseInt(m[3], 10));
			break;
		case "dmy":
			m = op.match(new RegExp(
					"^(\\d{1,2})([-./])(\\d{1,2})\\2((\\d{4})|(\\d{2}))$"));
			if (m == null)
				return false;
			day = m[1];
			month = m[3] * 1;
			year = (m[5].length == 4) ? m[5] : GetFullYear(parseInt(m[6], 10));
			break;
		default:
			break;
		}
		if (!parseInt(month))
			return false;
		month = month == 0 ? 12 : month;
		var date = new Date(year, month - 1, day);
		return (typeof (date) == "object" && year == date.getFullYear()
				&& month == (date.getMonth() + 1) && day == date.getDate());
		function GetFullYear(y) {
			return ((y < 30 ? "20" : "19") + y) | 0;
		}
	}
};
