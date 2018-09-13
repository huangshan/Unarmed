Page({
  //dateTime: new Date(),
  data: {
    //currentDate: dateTime.getFullYear.toString()+'-'+dateTime.getMonth().toString()+'-'+dateTime.getDay().toString(),
    dateStart:'2018-09-01',
    dateEnd:'2018-09-11',
    dateSelected: '2018-09-11',
    timeStart: '08:01',
    timeEnd: '09:01',
    address: '训练地点',
    title: '摘要'
  },
  bindDateChange: function (e) {
    this.setData({
      dateSelected: e.detail.value
    })
  },
  bindTimeStartChange: function (e) {
    this.setData({
      timeStart: e.detail.value
    })
  },
  bindTimeEndChange: function (e) {
    this.setData({
      timeEnd: e.detail.value
    })
  }
})
