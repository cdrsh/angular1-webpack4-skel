module.exports = {
    setCookie: (cname, cvalue, exdays) => {
        var d = new Date();
        d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    },
    getCookie: cname => {
        var name = cname + "=";
        var ca = document.cookie.split(";");
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == " ") c = c.substring(1);
            if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
        }
        return "";
    }
    /*
	,
	ru:{
		TEXT1:'Текст-1-ru',
		RU:'Рус',
		EN:'Анг',
		DE:'Нем'
	},
	en:{
		TEXT1:'Text-1-en',
		RU:'Rus',
		EN:'Eng',
		DE:'Ger'
	},
	de:{
		TEXT1:'Text-1-de',
		RU:'Rus',
		EN:'Eng',
		DE:'Deu'
	}
	'
	*/
};
