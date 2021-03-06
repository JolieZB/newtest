$(function() {
  iniBandIndexPage(); //初始化界面
  bindBandIndexEvent(); //对界面事件绑定
});
var charttype = "line";
var chartcolor = "#65B5EE";
var areacolor = "#A5D1F0";
if (localStorage["charttype"] != undefined) {
  charttype = localStorage["charttype"];
  chartcolor = localStorage["chartcolor"];
  areacolor = localStorage["areacolor"];
}
function iniBandIndexPage() {
  getBandIndexData();
  if (charttype == "line") {
    getBandMyHeartStatiData();
  } else {
    getMyData("7days");
  }
}
function bindBandIndexEvent() {}
function getBandIndexData() {
  var json = {
    data: {
      maxStep: 13584,
      thisDay: "2018-11-06",
      sport7daysList: [
        {
          f_CALORIE: "188",
          f_STEPS: "4173",
          DATE: "2018-10-30",
          f_DISTANCE: "2962.83"
        },
        {
          f_CALORIE: "321",
          f_STEPS: "7143",
          DATE: "2018-10-31",
          f_DISTANCE: "5071.53"
        },
        {
          f_CALORIE: "194",
          f_STEPS: "4306",
          DATE: "2018-11-01",
          f_DISTANCE: "3057.26"
        },
        {
          f_CALORIE: "192",
          f_STEPS: "4276",
          DATE: "2018-11-02",
          f_DISTANCE: "3035.96"
        },
        {
          f_CALORIE: "134",
          f_STEPS: "2982",
          DATE: "2018-11-03",
          f_DISTANCE: "2117.22"
        },
        {
          f_CALORIE: "43",
          f_STEPS: "959",
          DATE: "2018-11-04",
          f_DISTANCE: "680.89"
        },
        {
          f_CALORIE: "432",
          f_STEPS: "9603",
          DATE: "2018-11-05",
          f_DISTANCE: "7682"
        }
      ],
      sportList: [
        {
          DISTANCE: "826",
          BANDID: "C7:5A:E6:61:1B:81",
          CALORIE: "46",
          DATE: "2018-11-06",
          BATTERY: "36%",
          ACTIVITYTIME: "0",
          STEPS: "1032",
          LASTHEARTBEAT: "78",
          HEARTBEAT: "78",
          REPORTTIME: "2018-11-06 09:19:47"
        }
      ]
    },
    code: "0000",
    msg: "数据获取成功"
  };
  var code = json.code;
  var data = json.data;
  var msg = json.msg;
  if (code == "0000") {
    var maxStep = jutils.getNotNullValue(data.maxStep); //最大步数
    var sportList = data.sportList;
    var steps = "0",
      distince = "0",
      actime = "0",
      calorie = "0",
      s_date = "";
    s_date = jutils.getNotNullValue(data.thisDay);
    if (sportList != null && sportList.length > 0) {
      var mapSport = sportList[0];
      steps = jutils.getNotNullValue(mapSport.STEPS); //步数
      distince = jutils.getNotNullValue(mapSport.DISTANCE); //距离
      distince = distince == "" ? "0" : (distince / 1000).toFixed(2);
      actime = jutils.getNotNullValue(mapSport.ACTIVITYTIME); //分钟
      calorie = jutils.getNotNullValue(mapSport.CALORIE); //卡路里
    }
    $("#indexMaxStep").html("最高" + maxStep + "步");
    $("#indexStep").html(
      steps == "" ? "0<span>步</span>" : steps + "<span>步</span>"
    );
    $("#indexDistance").html(distince + "公里");
    $("#indexKcai").html((calorie == "" ? "0" : calorie) + "卡");
    $("#indexDay").html(s_date);

    //7天数据
    var sport7daysList = data.sport7daysList;
    var html7days = "";
    if (sport7daysList != null && sport7daysList.length > 0) {
      //swiper-wrapper
      for (var i = 0; i < sport7daysList.length; i++) {
        var f_steps = "0",
          f_distance = "0",
          f_calorie = "0",
          f_date = "";
        var mapSport = sport7daysList[i];
        f_steps = jutils.getNotNullValue(mapSport.f_STEPS); //步数
        f_distance = jutils.getNotNullValue(mapSport.f_DISTANCE); //距离
        f_distance = f_distance == "" ? "0" : (f_distance / 1000).toFixed(2);
        f_calorie = jutils.getNotNullValue(mapSport.f_CALORIE); //卡路里
        f_date = jutils.getNotNullValue(mapSport.DATE);

        html7days += "<div class='jqm-round-wrap swiper-slide'>";
        html7days += "<div class='jqm-round-bg'></div>";
        html7days +=
          "<canvas id='jqm-round-sector" +
          (i + 1) +
          "' class='jqm-round-sector' width='200' height='200'></canvas>";
        html7days += "<div class='jqm-round-circle'>";
        html7days +=
          "<p style='text-indent: -99999px;line-height: 15px;'>50%</p>";
        html7days += "<div class='wrap'>";
        html7days +=
          "<p >步数</p><p class='import' id='indexStep" +
          (i + 1) +
          "' >" +
          f_steps +
          "<span>步</span></p>";
        html7days +=
          "<p class='detail'><span id='indexDistance" +
          (i + 1) +
          "'>" +
          f_distance +
          "公里</span><span id='indexKcai" +
          (i + 1) +
          "'>" +
          f_calorie +
          "卡</span></p>";
        html7days +=
          "<p class='detail' id='indexMaxStep" +
          (i + 1) +
          "'>最高" +
          maxStep +
          "步</p>";
        html7days +=
          "<div class='time' id='indexDay" +
          (i + 1) +
          "' >" +
          f_date +
          "</div>";
        html7days += "</div></div></div>";
      }
    }
    //判断是否为safari浏览器， safari不添加左右滑动事件
    /*var userAgent = navigator.userAgent;
				if ((/Safari/.test(navigator.userAgent) || /Apple/.test(navigator.userAgent))&& !/Chrome/.test(navigator.userAgent)) {
			    } else{*/
    $(".swiper-wrapper").prepend(html7days);
    //}

    //有多个圈时添加滑动事件
    var len = $(".jqm-round-wrap").length;
    if (len > 1) {
      var swiper = new Swiper(".swiper-container", {
        initialSlide: len - 1,
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: "17%",
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        on: {
          slideChange: function() {
            var p = 0;
            if (this.activeIndex == len - 1) {
              p = 0;
            } else {
              p = this.activeIndex + 1;
            }

            var rate = (steps * 100) / 11000;
            if (rate > 100) {
              rate = 100;
            }
            if (p != 0) {
              rate = (sport7daysList[p - 1].f_STEPS * 100) / 11000;
              if (rate > 100) {
                rate = 100;
              }
            }
            var k = percentTofloat(rate + "%");
            pie.run({
              id: "jqm-round-sector" + p,
              percent: k,
              onBefore: function(ctx, weight, height) {
                ctx.fillStyle = "#6acb3e";
                ctx.beginPath();
                ctx.moveTo(weight / 2, height / 2);
                ctx.arc(weight / 2, height / 2, height / 2, 0, Math.PI * 2);
                ctx.fill();
              }
            });
          }
        }
      });
    } else {
      var rate = (steps * 100) / 11000;
      if (rate > 100) {
        rate = 100;
      }
      var k = percentTofloat(rate + "%");
      pie.run({
        id: "jqm-round-sector0",
        percent: k,
        onBefore: function(ctx, weight, height) {
          ctx.fillStyle = "#6acb3e";
          ctx.beginPath();
          ctx.moveTo(weight / 2, height / 2);
          ctx.arc(weight / 2, height / 2, height / 2, 0, Math.PI * 2);
          ctx.fill();
        }
      });
    }
  } else {
    mui.alert("处理超时,请重新操作！", " ", null);
  }
}
var dataLineChart = "";
var dataBarChart = "";
function getBandMyHeartStatiData() {
  var json = {
    data: {
      dataLineChart: [
        { heartbeat: "80", seconde: "08:45" },
        { heartbeat: "81", seconde: "08:46" },
        { heartbeat: "81", seconde: "08:47" },
        { heartbeat: "81", seconde: "08:48" },
        { heartbeat: "83", seconde: "08:49" },
        { heartbeat: "78", seconde: "08:50" },
        { heartbeat: "78", seconde: "08:51" },
        { heartbeat: "78", seconde: "08:52" },
        { heartbeat: "78", seconde: "08:53" },
        { heartbeat: "78", seconde: "08:54" },
        { heartbeat: "78", seconde: "08:55" },
        { heartbeat: "78", seconde: "08:56" },
        { heartbeat: "78", seconde: "08:57" },
        { heartbeat: "78", seconde: "08:58" },
        { heartbeat: "78", seconde: "08:59" },
        { heartbeat: "78", seconde: "09:00" },
        { heartbeat: "78", seconde: "09:01" },
        { heartbeat: "78", seconde: "09:02" },
        { heartbeat: "78", seconde: "09:03" },
        { heartbeat: "78", seconde: "09:04" },
        { heartbeat: "78", seconde: "09:05" },
        { heartbeat: "78", seconde: "09:06" },
        { heartbeat: "78", seconde: "09:07" },
        { heartbeat: "78", seconde: "09:08" },
        { heartbeat: "78", seconde: "09:09" },
        { heartbeat: "78", seconde: "09:10" },
        { heartbeat: "78", seconde: "09:11" },
        { heartbeat: "78", seconde: "09:12" },
        { heartbeat: "78", seconde: "09:13" },
        { heartbeat: "78", seconde: "09:14" },
        { heartbeat: "78", seconde: "09:15" },
        { heartbeat: "78", seconde: "09:16" },
        { heartbeat: "78", seconde: "09:17" },
        { heartbeat: "78", seconde: "09:18" }
      ]
    },
    code: "0000",
    msg: "数据获取成功"
  };
  var code = json.code;
  var data = json.data;
  var msg = json.msg;
  if (code == "0000") {
    dataLineChart = data.dataLineChart;
    initEcharts(dataLineChart);
  } else {
    mui.alert("处理超时,请重新操作！", " ", null);
  }
}

var domain = window.location.host;
var toolbox = {
  itemSize: 20,
  show: true,
  feature: {
    magicType: {
      show: true
    },
    mytool1: {
      show: true,
      title: "折线图",
      icon: "image://http://" + domain + ctp + "/images/linechart.png",
      onclick: function() {
        charttype = "line";
        chartcolor = "#65B5EE";
        areacolor = "#A5D1F0";

        localStorage["charttype"] = charttype;
        localStorage["chartcolor"] = chartcolor;
        localStorage["areacolor"] = areacolor;

        if (dataLineChart == "") {
          getBandMyHeartStatiData();
        } else {
          initEcharts(dataLineChart);
        }
      }
    },
    mytool2: {
      show: true,
      title: "柱图",
      icon: "image://http://" + domain + ctp + "/images/barchart.png",
      onclick: function() {
        charttype = "bar";
        chartcolor = "#7ce281";
        areacolor = "#c7f5c9";

        localStorage["charttype"] = charttype;
        localStorage["chartcolor"] = chartcolor;
        localStorage["areacolor"] = areacolor;

        if (dataBarChart == "") {
          getMyData("7days");
        } else {
          getLineCharts(dataBarChart);
        }
      }
    }
  }
};
function initEcharts(dataLineChart) {
  var xArray = [];
  var yArray = [];
  $.each(dataLineChart, function(i, info) {
    xArray.push(info.seconde);
    yArray.push(info.heartbeat);
  });

  var dom = document.getElementById("linecharts");
  var lineEcharts = echarts.init(dom);
  option = {
    toolbox: toolbox,
    tooltip: {
      trigger: "axis",
      position: function(pt) {
        if (pt[0] > document.body.clientWidth / 2) {
          return [pt[0] - 65, "10%"];
        } else {
          return [pt[0], "10%"];
        }
      },
      formatter: function(datas) {
        console.log(datas);
        var res = datas[0].name + "<br/>",
          val;
        val = datas[0].value;
        res += val + "次/分钟<br/>";
        return res;
      }
    },
    grid: {
      x: "35",
      x2: "30",
      y: "15",
      y2: "25"
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: xArray,
      axisLabel: {
        textStyle: {
          color: "#8f8f94",
          fontSize: "12"
        }
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      }
    },
    yAxis: {
      type: "value",
      splitLine: {
        show: false
      },
      axisLabel: {
        textStyle: {
          color: "#8f8f94",
          fontSize: "12"
        }
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      }
    },
    series: [
      {
        name: "心率",
        type: charttype,
        smooth: true,
        symbol: "none",
        sampling: "average",
        itemStyle: {
          normal: {
            color: chartcolor
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: areacolor
              },
              {
                offset: 1,
                color: areacolor
              }
            ])
          }
        },
        data: yArray
      } /*,
			
			 {
	            name:'今日心率',
	            type:'pie',
	            tooltip : {
	                trigger: 'item',
	                formatter: '{a} <br/>{b}分钟 : {c} ({d}%)'
	            },
	            center: [140,95],
	            radius : [0, 35],
	            itemStyle :　{
	                normal : {
	                    labelLine : {
	                        length : 0
	                    }
	                }
	            },
	            data:[
	                {value:600, name:'静息心率',itemStyle:{color:"#f4d455"}},
	                {value:30, name:'轻微运动',itemStyle:{color:"#7bca6e"}},
	                {value:30, name:'有氧运动',itemStyle:{color:"#3dc69e"}},
	                {value:10, name:'激烈运动',itemStyle:{color:"#37bcd4"}}
	            ]
	        }*/
    ]
  };
  lineEcharts.setOption(option);
}

//统计数据总数
function getMyData(dataType) {
  $.ajax({
    url: ctp + "/bandController/bandMyData.shtml",
    data: {
      dataType: dataType
    },
    type: "POST",
    dataType: "json",
    success: function(json) {
      var code = json.code;
      var data = json.data;
      var msg = json.msg;
      if (code == "0000") {
        var dataCount = data.dataCount;
        dataBarChart = data.dataLineChart;
        var calorieCount = jutils.getNotNullValue(dataCount.calorieCount);
        var disCount = jutils.getNotNullValue(dataCount.disCount);
        var stepCount = jutils.getNotNullValue(dataCount.stepCount);
        disCount = disCount == "" ? "0" : (disCount / 1000).toFixed(2);
        //统计图
        getLineCharts(dataBarChart);
      } else {
        mui.alert("处理超时,请重新操作！", " ", null);
      }
    },
    error: function() {
      jutils.cloading2();
      mui.alert("处理超时,请重新操作！", " ", null);
    }
  });
}
//柱状图
function getLineCharts(dataLineChart) {
  var xArray = [];
  var yArray = [];
  $.each(dataLineChart, function(i, info) {
    xArray.push(info.day);
    yArray.push(info.STEPS);
  });
  var dom = document.getElementById("linecharts");
  var myChart = echarts.init(dom);
  var option = null;
  option = {
    toolbox: toolbox,
    color: ["#7ce281"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
      },
      position: function(pt) {
        if (pt[0] > document.body.clientWidth / 2) {
          return [pt[0] - 65, "10%"];
        } else {
          return [pt[0], "10%"];
        }
      },
      formatter: function(datas) {
        console.log(datas);
        var res = datas[0].name + "<br/>",
          val;
        val = datas[0].value;
        res += val + "步<br/>";
        return res;
      }
    },
    grid: {
      x: "50",
      x2: "20",
      y: "15",
      y2: "25"
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: xArray,
      axisLabel: {
        textStyle: {
          color: "#8f8f94",
          fontSize: "12"
        }
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      }
    },
    yAxis: {
      type: "value",
      boundaryGap: false,
      data: yArray,
      axisLabel: {
        textStyle: {
          color: "#8f8f94",
          fontSize: "12"
        }
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      }
    },
    series: [
      {
        name: "STEPS",
        type: "bar",
        barWidth: "70%",
        data: yArray
      }
    ]
  };
  myChart.setOption(option, true);
}
