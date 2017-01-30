// Generated by CoffeeScript 1.12.3
(function() {
  var draw_ui, get_current_state, get_current_tab_id, log, msg, popup_init, start_flush;

  log = require('./log');

  msg = require('./msg');

  get_current_tab_id = function() {
    return chrome.tabs.query({
      active: true,
      currentWindow: true
    }, function(result) {
      var tab_id;
      tab_id = result[0].id;
      return get_current_state(tab_id);
    });
  };

  get_current_state = function(tab_id) {
    log.d("current tab_id == " + tab_id + " ");
    return msg.send(msg.t.get_state, {
      tab_id: tab_id
    }, function(result) {
      return draw_ui(result, tab_id);
    });
  };

  draw_ui = function(info, tab_id) {
    var b, div, p;
    log.d("current state == " + (JSON.stringify(info)) + " ");
    $('#main_init_place_holder').remove();
    div = $('#popup_main_ui');
    b = $('<button type="button" >重新检测</button>');
    div.append(b);
    b.on('click', function() {
      msg.send_to_content(msg.t.check_support, null, null, tab_id);
      return log.d('popup: send check_support msg to content.js ');
    });
    if (info === null) {
      return div.append($('<p>错误: 不支持此页面 :-( </p>'));
    }
    div.append($('<h2>当前页面</h2>'));
    p = $('<p></p>');
    p.text("site: " + info.site);
    div.append(p);
    p = $('<p></p>');
    p.text("标题: " + info.title);
    div.append(p);
    p = $('<p></p>');
    p.text("URL: " + info.url);
    div.append(p);
    if (!info.playing) {
      div.append($('<hr />'));
      return div.append($('<p>请等待视频开始正常播放 .. . </p>'));
    } else {
      div.append($('<h2>视频信息</h2>'));
      p = $('<p></p>');
      p.text("视频标题: " + info.title_video + "_" + info.title_sub);
      div.append(p);
      p = $('<p></p>');
      p.text("清晰度: " + info.size);
      div.append(p);
      p = $('<p></p>');
      p.text("总时长: " + info.max_time_s + " 秒");
      div.append(p);
      b = $('<button type="button" >开始</button>');
      div.append(b);
      return b.on('click', function() {
        return start_flush(tab_id, div);
      });
    }
  };

  start_flush = function(tab_id, div) {
    msg.on(function(info) {
      var b;
      switch (info.type) {
        case msg.t.flush_done:
          div.append($('<hr /><p>获取分段文件, 结束. </p>'));
          b = $('<button type="button" >更多</button>');
          div.append(b);
          return b.on('click', function() {
            log.d('open (more) window ');
            return window.open('dl.html', '_blank');
          });
      }
    });
    return msg.send(msg.t.start_flush, {
      tab_id: tab_id
    });
  };

  popup_init = function() {
    log.d('popup.js: start init ');
    return get_current_tab_id();
  };

  popup_init();

}).call(this);

//# sourceMappingURL=popup.js.map
