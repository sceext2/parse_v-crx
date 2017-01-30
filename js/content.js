(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.pv_content = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// Generated by CoffeeScript 1.12.3
(function() {
  var I, log, m271,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  log = require('../log');

  I = require('./I');

  m271 = (function(superClass) {
    extend(m271, superClass);

    function m271() {
      return m271.__super__.constructor.apply(this, arguments);
    }

    m271.prototype.init = function() {
      this.site = '271';
      this._p = window.flash;
      return log.c('c_m/271: init done. ');
    };

    m271.prototype.get_info = function() {
      var o, pi, vi;
      o = m271.__super__.get_info.call(this);
      vi = this._video_info();
      pi = this._player_info();
      o.title_video = vi.vn;
      o.title_sub = vi.subt;
      o.size = pi.width + "x" + pi.height;
      o.max_time_s = pi.totalDuration / 1e3;
      return o;
    };

    m271.prototype.get_time = function() {
      var pi;
      pi = this._player_info();
      return pi.currentTime / 1e3;
    };

    m271.prototype.set_time = function(time_s) {
      return this._player_seek(time_s);
    };

    m271.prototype.pause = function() {
      return this._player_pause();
    };

    m271.prototype._video_info = function() {
      return JSON.parse(this._p['getQiyiVideoInfo']());
    };

    m271.prototype._player_info = function() {
      return JSON.parse(this._p['getQiyiPlayerInfo']());
    };

    m271.prototype._player_log = function() {
      return this._p['getQiyiPlayerLog']();
    };

    m271.prototype._player_seek = function(time_s) {
      return this._p['seekQiyiVideo'](time_s);
    };

    m271.prototype._player_pause = function() {
      return this._p['pauseQiyiVideo']();
    };

    return m271;

  })(I);

  module.exports = m271;

}).call(this);



},{"../log":7,"./I":2}],2:[function(require,module,exports){
// Generated by CoffeeScript 1.12.3
(function() {
  var I;

  I = (function() {
    function I() {
      this.site = '#unknow';
      return;
    }

    I.prototype.init = function() {};

    I.prototype.get_info = function() {
      return {
        site: this.site,
        url: document.URL,
        title: $('title').text(),
        title_video: '#video_title',
        title_sub: '#sub_title',
        size: '#unknow_size',
        max_time_s: '#unknow_max_time_s'
      };
    };

    I.prototype.set_time = function(time_s) {};

    I.prototype.get_time = function() {
      return -1;
    };

    I.prototype.pause = function() {};

    return I;

  })();

  module.exports = I;

}).call(this);



},{}],3:[function(require,module,exports){
// Generated by CoffeeScript 1.12.3
(function() {
  var I, log, m_vqq,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  log = require('../log');

  I = require('./I');

  m_vqq = (function(superClass) {
    extend(m_vqq, superClass);

    function m_vqq() {
      return m_vqq.__super__.constructor.apply(this, arguments);
    }

    m_vqq.prototype.init = function() {
      this.site = 'vqq';
      return log.c('c_m/vqq: init done. ');
    };

    m_vqq.prototype.get_info = function() {
      var o;
      o = m_vqq.__super__.get_info.call(this);
      return o;
    };

    m_vqq.prototype.get_time = function() {};

    m_vqq.prototype.set_time = function(time_s) {};

    m_vqq.prototype.pause = function() {};

    return m_vqq;

  })(I);

  module.exports = m_vqq;

}).call(this);



},{"../log":7,"./I":2}],4:[function(require,module,exports){
// Generated by CoffeeScript 1.12.3
(function() {
  var I, log, m_youku,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  log = require('../log');

  I = require('./I');

  m_youku = (function(superClass) {
    extend(m_youku, superClass);

    function m_youku() {
      return m_youku.__super__.constructor.apply(this, arguments);
    }

    m_youku.prototype.init = function() {
      this.site = 'youku';
      return log.c('c_m/youku: init done. ');
    };

    m_youku.prototype.get_info = function() {
      var o;
      o = m_youku.__super__.get_info.call(this);
      return o;
    };

    m_youku.prototype.get_time = function() {};

    m_youku.prototype.set_time = function(time_s) {};

    m_youku.prototype.pause = function() {};

    return m_youku;

  })(I);

  module.exports = m_youku;

}).call(this);



},{"../log":7,"./I":2}],5:[function(require,module,exports){
// Generated by CoffeeScript 1.12.3
(function() {
  module.exports = {
    check_init_max_wait_s: 20,
    check_video_play_count_s: 5,
    flush_delta_s: 60,
    flush_reserve_s: 120
  };

}).call(this);



},{}],6:[function(require,module,exports){
// Generated by CoffeeScript 1.12.3
(function() {
  var check_list, check_playing, check_site_support, config, content_init, etc, init_msg, log, m271, m_vqq, m_youku, msg, start_check;

  log = require('./log');

  msg = require('./msg');

  config = require('./config');

  m271 = require('./c_m/271');

  m_vqq = require('./c_m/vqq');

  m_youku = require('./c_m/youku');

  check_list = {
    '271': function() {
      var e;
      try {
        window.flash['getQiyiPlayerInfo']();
        return m271;
      } catch (error) {
        e = error;
        return false;
      }
    },
    'vqq': function() {
      var e, i;
      try {
        i = $('object', $('#tenvideo_player')).attr('id');
        window[i]['getFPInfo']();
        return m_vqq;
      } catch (error) {
        e = error;
        return false;
      }
    },
    'youku': function() {
      var e;
      try {
        window.movie_player['getPlayerState']();
        return m_youku;
      } catch (error) {
        e = error;
        return false;
      }
    }
  };

  etc = {
    m_worker: null
  };

  check_site_support = function() {
    var Worker, i;
    for (i in check_list) {
      log.c("checking " + i + " .. . ");
      Worker = check_list[i]();
      if (Worker !== false) {
        log.c("[ OK ] yes! this is " + i + " ;-) ");
        setTimeout(function() {
          return msg.send(msg.t.found, {
            site: etc.m_worker.site,
            url: document.URL,
            title: $('title').text()
          });
        }, 0);
        etc.m_worker = new Worker();
        etc.m_worker.init();
        check_playing();
        return true;
      }
    }
    return false;
  };

  start_check = function() {
    var _check, check_max_s, count;
    count = {
      i: 0
    };
    check_max_s = config.check_init_max_wait_s;
    _check = function() {
      var result;
      result = check_site_support();
      if (result) {
        return log.c("found supported site (page) after " + count.i + "s");
      } else {
        count.i += 1;
        if (count.i > check_max_s) {
          return log.c("give up, check support after " + count.i + "s");
        } else {
          return setTimeout(_check, 1e3);
        }
      }
    };
    log.c('start check page (site support)');
    return setTimeout(_check, 0);
  };

  check_playing = function() {
    var _check_play, count, count_max, w;
    count = {
      i: 0,
      old: null
    };
    count_max = config.check_video_play_count_s;
    w = etc.m_worker;
    _check_play = function() {
      var now;
      now = w.get_time();
      if (now !== count.old) {
        count.i += 1;
      } else {
        count.i = 0;
      }
      count.old = now;
      if (count.i > count_max) {
        log.c("video is now playing .. . (" + count_max + "s)");
        return msg.send(msg.t.playing, w.get_info());
      } else {
        return setTimeout(_check_play, 1e3);
      }
    };
    log.c('start check video playing .. . ');
    return setTimeout(_check_play, 0);
  };

  init_msg = function() {
    return msg.on(function(info) {
      log.c("DEBUG: got msg, type == " + info.type + ", data == " + (JSON.stringify(info.data)) + " ");
      switch (info.type) {
        case msg.t.check_support:
          log.c('check_support, again');
          return start_check();
        case msg.t.get_info:
          return info.callback(etc.m_worker.get_info());
        case msg.t.set_time:
          return setTimeout(function() {
            var s;
            s = info.data.time_s;
            log.c("set_time, s == " + s + " ");
            etc.m_worker.set_time(s);
            if (info.data.pause) {
              return etc.m_worker.pause();
            }
          }, 0);
        default:
          return log.c("FIXME: unknow msg, type == " + info.type + " ");
      }
    });
  };

  content_init = function() {
    init_msg();
    return start_check();
  };

  content_init();

}).call(this);



},{"./c_m/271":1,"./c_m/vqq":3,"./c_m/youku":4,"./config":5,"./log":7,"./msg":8}],7:[function(require,module,exports){
// Generated by CoffeeScript 1.12.3
(function() {
  var log_p;

  log_p = function(text) {
    return console.log(module.exports.prefix + text);
  };

  module.exports = {
    prefix: 'parse_v-crx: ',
    d: function(text) {
      return log_p('DEBUG: ' + text);
    },
    c: function(text) {
      return log_p('content script: ' + text);
    }
  };

}).call(this);



},{}],8:[function(require,module,exports){
// Generated by CoffeeScript 1.12.3
(function() {
  var msg_type_check_support, msg_type_flush_done, msg_type_found, msg_type_get_all, msg_type_get_info, msg_type_get_one_file, msg_type_get_state, msg_type_playing, msg_type_set_time, msg_type_start_flush, msg_version, parse_v_mark, send_msg, send_to_content, set_on_msg;

  parse_v_mark = 'uuid=ec9680e6-da5e-4971-ac5f-25d971bf6366';

  msg_version = '0.1.0-1';

  msg_type_found = 'content_found';

  msg_type_playing = 'content_playing';

  msg_type_get_info = 'content_get_info';

  msg_type_check_support = 'content_check_support';

  msg_type_set_time = 'content_set_time';

  msg_type_get_state = 'popup_get_state';

  msg_type_start_flush = 'popup_start_flush';

  msg_type_flush_done = 'popup_flush_done';

  msg_type_get_all = 'dl_get_all';

  msg_type_get_one_file = 'dl_get_one_file';

  set_on_msg = function(callback) {
    return chrome.runtime.onMessage.addListener(function(msg, sender, send_res) {
      var e;
      try {
        if (!((msg.mark === parse_v_mark) && (msg.version === msg_version))) {
          return;
        }
      } catch (error) {
        e = error;
        return;
      }
      callback({
        mark: msg.mark,
        version: msg.version,
        type: msg.type,
        data: msg.data,
        sender: sender,
        callback: send_res
      });
      return true;
    });
  };

  send_msg = function(msg_type, data, callback) {
    var msg;
    msg = {
      mark: parse_v_mark,
      version: msg_version,
      type: msg_type,
      data: data
    };
    return chrome.runtime.sendMessage(null, msg, callback);
  };

  send_to_content = function(msg_type, data, callback, tab_id) {
    var msg;
    msg = {
      mark: parse_v_mark,
      version: msg_version,
      type: msg_type,
      data: data
    };
    return chrome.tabs.sendMessage(tab_id, msg, callback);
  };

  module.exports = {
    mark: parse_v_mark,
    version: msg_version,
    t: {
      found: msg_type_found,
      playing: msg_type_playing,
      get_info: msg_type_get_info,
      check_support: msg_type_check_support,
      set_time: msg_type_set_time,
      get_state: msg_type_get_state,
      start_flush: msg_type_start_flush,
      flush_done: msg_type_flush_done,
      get_all: msg_type_get_all,
      get_one_file: msg_type_get_one_file
    },
    on: set_on_msg,
    send: send_msg,
    send_to_content: send_to_content
  };

}).call(this);



},{}]},{},[6])(6)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkaXN0L3MvY19tLzI3MS5qcyIsImRpc3Qvcy9jX20vSS5qcyIsImRpc3Qvcy9jX20vdnFxLmpzIiwiZGlzdC9zL2NfbS95b3VrdS5qcyIsImRpc3Qvcy9jb25maWcuanMiLCJkaXN0L3MvY29udGVudC5qcyIsImRpc3Qvcy9sb2cuanMiLCJkaXN0L3MvbXNnLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLy8gR2VuZXJhdGVkIGJ5IENvZmZlZVNjcmlwdCAxLjEyLjNcbihmdW5jdGlvbigpIHtcbiAgdmFyIEksIGxvZywgbTI3MSxcbiAgICBleHRlbmQgPSBmdW5jdGlvbihjaGlsZCwgcGFyZW50KSB7IGZvciAodmFyIGtleSBpbiBwYXJlbnQpIHsgaWYgKGhhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH0sXG4gICAgaGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5O1xuXG4gIGxvZyA9IHJlcXVpcmUoJy4uL2xvZycpO1xuXG4gIEkgPSByZXF1aXJlKCcuL0knKTtcblxuICBtMjcxID0gKGZ1bmN0aW9uKHN1cGVyQ2xhc3MpIHtcbiAgICBleHRlbmQobTI3MSwgc3VwZXJDbGFzcyk7XG5cbiAgICBmdW5jdGlvbiBtMjcxKCkge1xuICAgICAgcmV0dXJuIG0yNzEuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgbTI3MS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5zaXRlID0gJzI3MSc7XG4gICAgICB0aGlzLl9wID0gd2luZG93LmZsYXNoO1xuICAgICAgcmV0dXJuIGxvZy5jKCdjX20vMjcxOiBpbml0IGRvbmUuICcpO1xuICAgIH07XG5cbiAgICBtMjcxLnByb3RvdHlwZS5nZXRfaW5mbyA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIG8sIHBpLCB2aTtcbiAgICAgIG8gPSBtMjcxLl9fc3VwZXJfXy5nZXRfaW5mby5jYWxsKHRoaXMpO1xuICAgICAgdmkgPSB0aGlzLl92aWRlb19pbmZvKCk7XG4gICAgICBwaSA9IHRoaXMuX3BsYXllcl9pbmZvKCk7XG4gICAgICBvLnRpdGxlX3ZpZGVvID0gdmkudm47XG4gICAgICBvLnRpdGxlX3N1YiA9IHZpLnN1YnQ7XG4gICAgICBvLnNpemUgPSBwaS53aWR0aCArIFwieFwiICsgcGkuaGVpZ2h0O1xuICAgICAgby5tYXhfdGltZV9zID0gcGkudG90YWxEdXJhdGlvbiAvIDFlMztcbiAgICAgIHJldHVybiBvO1xuICAgIH07XG5cbiAgICBtMjcxLnByb3RvdHlwZS5nZXRfdGltZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHBpO1xuICAgICAgcGkgPSB0aGlzLl9wbGF5ZXJfaW5mbygpO1xuICAgICAgcmV0dXJuIHBpLmN1cnJlbnRUaW1lIC8gMWUzO1xuICAgIH07XG5cbiAgICBtMjcxLnByb3RvdHlwZS5zZXRfdGltZSA9IGZ1bmN0aW9uKHRpbWVfcykge1xuICAgICAgcmV0dXJuIHRoaXMuX3BsYXllcl9zZWVrKHRpbWVfcyk7XG4gICAgfTtcblxuICAgIG0yNzEucHJvdG90eXBlLnBhdXNlID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcGxheWVyX3BhdXNlKCk7XG4gICAgfTtcblxuICAgIG0yNzEucHJvdG90eXBlLl92aWRlb19pbmZvID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZSh0aGlzLl9wWydnZXRRaXlpVmlkZW9JbmZvJ10oKSk7XG4gICAgfTtcblxuICAgIG0yNzEucHJvdG90eXBlLl9wbGF5ZXJfaW5mbyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIEpTT04ucGFyc2UodGhpcy5fcFsnZ2V0UWl5aVBsYXllckluZm8nXSgpKTtcbiAgICB9O1xuXG4gICAgbTI3MS5wcm90b3R5cGUuX3BsYXllcl9sb2cgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9wWydnZXRRaXlpUGxheWVyTG9nJ10oKTtcbiAgICB9O1xuXG4gICAgbTI3MS5wcm90b3R5cGUuX3BsYXllcl9zZWVrID0gZnVuY3Rpb24odGltZV9zKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcFsnc2Vla1FpeWlWaWRlbyddKHRpbWVfcyk7XG4gICAgfTtcblxuICAgIG0yNzEucHJvdG90eXBlLl9wbGF5ZXJfcGF1c2UgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9wWydwYXVzZVFpeWlWaWRlbyddKCk7XG4gICAgfTtcblxuICAgIHJldHVybiBtMjcxO1xuXG4gIH0pKEkpO1xuXG4gIG1vZHVsZS5leHBvcnRzID0gbTI3MTtcblxufSkuY2FsbCh0aGlzKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9MjcxLmpzLm1hcFxuIiwiLy8gR2VuZXJhdGVkIGJ5IENvZmZlZVNjcmlwdCAxLjEyLjNcbihmdW5jdGlvbigpIHtcbiAgdmFyIEk7XG5cbiAgSSA9IChmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiBJKCkge1xuICAgICAgdGhpcy5zaXRlID0gJyN1bmtub3cnO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIEkucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbigpIHt9O1xuXG4gICAgSS5wcm90b3R5cGUuZ2V0X2luZm8gPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHNpdGU6IHRoaXMuc2l0ZSxcbiAgICAgICAgdXJsOiBkb2N1bWVudC5VUkwsXG4gICAgICAgIHRpdGxlOiAkKCd0aXRsZScpLnRleHQoKSxcbiAgICAgICAgdGl0bGVfdmlkZW86ICcjdmlkZW9fdGl0bGUnLFxuICAgICAgICB0aXRsZV9zdWI6ICcjc3ViX3RpdGxlJyxcbiAgICAgICAgc2l6ZTogJyN1bmtub3dfc2l6ZScsXG4gICAgICAgIG1heF90aW1lX3M6ICcjdW5rbm93X21heF90aW1lX3MnXG4gICAgICB9O1xuICAgIH07XG5cbiAgICBJLnByb3RvdHlwZS5zZXRfdGltZSA9IGZ1bmN0aW9uKHRpbWVfcykge307XG5cbiAgICBJLnByb3RvdHlwZS5nZXRfdGltZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH07XG5cbiAgICBJLnByb3RvdHlwZS5wYXVzZSA9IGZ1bmN0aW9uKCkge307XG5cbiAgICByZXR1cm4gSTtcblxuICB9KSgpO1xuXG4gIG1vZHVsZS5leHBvcnRzID0gSTtcblxufSkuY2FsbCh0aGlzKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9SS5qcy5tYXBcbiIsIi8vIEdlbmVyYXRlZCBieSBDb2ZmZWVTY3JpcHQgMS4xMi4zXG4oZnVuY3Rpb24oKSB7XG4gIHZhciBJLCBsb2csIG1fdnFxLFxuICAgIGV4dGVuZCA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoaGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfSxcbiAgICBoYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5cbiAgbG9nID0gcmVxdWlyZSgnLi4vbG9nJyk7XG5cbiAgSSA9IHJlcXVpcmUoJy4vSScpO1xuXG4gIG1fdnFxID0gKGZ1bmN0aW9uKHN1cGVyQ2xhc3MpIHtcbiAgICBleHRlbmQobV92cXEsIHN1cGVyQ2xhc3MpO1xuXG4gICAgZnVuY3Rpb24gbV92cXEoKSB7XG4gICAgICByZXR1cm4gbV92cXEuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgbV92cXEucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuc2l0ZSA9ICd2cXEnO1xuICAgICAgcmV0dXJuIGxvZy5jKCdjX20vdnFxOiBpbml0IGRvbmUuICcpO1xuICAgIH07XG5cbiAgICBtX3ZxcS5wcm90b3R5cGUuZ2V0X2luZm8gPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBvO1xuICAgICAgbyA9IG1fdnFxLl9fc3VwZXJfXy5nZXRfaW5mby5jYWxsKHRoaXMpO1xuICAgICAgcmV0dXJuIG87XG4gICAgfTtcblxuICAgIG1fdnFxLnByb3RvdHlwZS5nZXRfdGltZSA9IGZ1bmN0aW9uKCkge307XG5cbiAgICBtX3ZxcS5wcm90b3R5cGUuc2V0X3RpbWUgPSBmdW5jdGlvbih0aW1lX3MpIHt9O1xuXG4gICAgbV92cXEucHJvdG90eXBlLnBhdXNlID0gZnVuY3Rpb24oKSB7fTtcblxuICAgIHJldHVybiBtX3ZxcTtcblxuICB9KShJKTtcblxuICBtb2R1bGUuZXhwb3J0cyA9IG1fdnFxO1xuXG59KS5jYWxsKHRoaXMpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD12cXEuanMubWFwXG4iLCIvLyBHZW5lcmF0ZWQgYnkgQ29mZmVlU2NyaXB0IDEuMTIuM1xuKGZ1bmN0aW9uKCkge1xuICB2YXIgSSwgbG9nLCBtX3lvdWt1LFxuICAgIGV4dGVuZCA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoaGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfSxcbiAgICBoYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5cbiAgbG9nID0gcmVxdWlyZSgnLi4vbG9nJyk7XG5cbiAgSSA9IHJlcXVpcmUoJy4vSScpO1xuXG4gIG1feW91a3UgPSAoZnVuY3Rpb24oc3VwZXJDbGFzcykge1xuICAgIGV4dGVuZChtX3lvdWt1LCBzdXBlckNsYXNzKTtcblxuICAgIGZ1bmN0aW9uIG1feW91a3UoKSB7XG4gICAgICByZXR1cm4gbV95b3VrdS5fX3N1cGVyX18uY29uc3RydWN0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICBtX3lvdWt1LnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLnNpdGUgPSAneW91a3UnO1xuICAgICAgcmV0dXJuIGxvZy5jKCdjX20veW91a3U6IGluaXQgZG9uZS4gJyk7XG4gICAgfTtcblxuICAgIG1feW91a3UucHJvdG90eXBlLmdldF9pbmZvID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgbztcbiAgICAgIG8gPSBtX3lvdWt1Ll9fc3VwZXJfXy5nZXRfaW5mby5jYWxsKHRoaXMpO1xuICAgICAgcmV0dXJuIG87XG4gICAgfTtcblxuICAgIG1feW91a3UucHJvdG90eXBlLmdldF90aW1lID0gZnVuY3Rpb24oKSB7fTtcblxuICAgIG1feW91a3UucHJvdG90eXBlLnNldF90aW1lID0gZnVuY3Rpb24odGltZV9zKSB7fTtcblxuICAgIG1feW91a3UucHJvdG90eXBlLnBhdXNlID0gZnVuY3Rpb24oKSB7fTtcblxuICAgIHJldHVybiBtX3lvdWt1O1xuXG4gIH0pKEkpO1xuXG4gIG1vZHVsZS5leHBvcnRzID0gbV95b3VrdTtcblxufSkuY2FsbCh0aGlzKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9eW91a3UuanMubWFwXG4iLCIvLyBHZW5lcmF0ZWQgYnkgQ29mZmVlU2NyaXB0IDEuMTIuM1xuKGZ1bmN0aW9uKCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBjaGVja19pbml0X21heF93YWl0X3M6IDIwLFxuICAgIGNoZWNrX3ZpZGVvX3BsYXlfY291bnRfczogNSxcbiAgICBmbHVzaF9kZWx0YV9zOiA2MCxcbiAgICBmbHVzaF9yZXNlcnZlX3M6IDEyMFxuICB9O1xuXG59KS5jYWxsKHRoaXMpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb25maWcuanMubWFwXG4iLCIvLyBHZW5lcmF0ZWQgYnkgQ29mZmVlU2NyaXB0IDEuMTIuM1xuKGZ1bmN0aW9uKCkge1xuICB2YXIgY2hlY2tfbGlzdCwgY2hlY2tfcGxheWluZywgY2hlY2tfc2l0ZV9zdXBwb3J0LCBjb25maWcsIGNvbnRlbnRfaW5pdCwgZXRjLCBpbml0X21zZywgbG9nLCBtMjcxLCBtX3ZxcSwgbV95b3VrdSwgbXNnLCBzdGFydF9jaGVjaztcblxuICBsb2cgPSByZXF1aXJlKCcuL2xvZycpO1xuXG4gIG1zZyA9IHJlcXVpcmUoJy4vbXNnJyk7XG5cbiAgY29uZmlnID0gcmVxdWlyZSgnLi9jb25maWcnKTtcblxuICBtMjcxID0gcmVxdWlyZSgnLi9jX20vMjcxJyk7XG5cbiAgbV92cXEgPSByZXF1aXJlKCcuL2NfbS92cXEnKTtcblxuICBtX3lvdWt1ID0gcmVxdWlyZSgnLi9jX20veW91a3UnKTtcblxuICBjaGVja19saXN0ID0ge1xuICAgICcyNzEnOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBlO1xuICAgICAgdHJ5IHtcbiAgICAgICAgd2luZG93LmZsYXNoWydnZXRRaXlpUGxheWVySW5mbyddKCk7XG4gICAgICAgIHJldHVybiBtMjcxO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgZSA9IGVycm9yO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSxcbiAgICAndnFxJzogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgZSwgaTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGkgPSAkKCdvYmplY3QnLCAkKCcjdGVudmlkZW9fcGxheWVyJykpLmF0dHIoJ2lkJyk7XG4gICAgICAgIHdpbmRvd1tpXVsnZ2V0RlBJbmZvJ10oKTtcbiAgICAgICAgcmV0dXJuIG1fdnFxO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgZSA9IGVycm9yO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSxcbiAgICAneW91a3UnOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBlO1xuICAgICAgdHJ5IHtcbiAgICAgICAgd2luZG93Lm1vdmllX3BsYXllclsnZ2V0UGxheWVyU3RhdGUnXSgpO1xuICAgICAgICByZXR1cm4gbV95b3VrdTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGUgPSBlcnJvcjtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBldGMgPSB7XG4gICAgbV93b3JrZXI6IG51bGxcbiAgfTtcblxuICBjaGVja19zaXRlX3N1cHBvcnQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgV29ya2VyLCBpO1xuICAgIGZvciAoaSBpbiBjaGVja19saXN0KSB7XG4gICAgICBsb2cuYyhcImNoZWNraW5nIFwiICsgaSArIFwiIC4uIC4gXCIpO1xuICAgICAgV29ya2VyID0gY2hlY2tfbGlzdFtpXSgpO1xuICAgICAgaWYgKFdvcmtlciAhPT0gZmFsc2UpIHtcbiAgICAgICAgbG9nLmMoXCJbIE9LIF0geWVzISB0aGlzIGlzIFwiICsgaSArIFwiIDstKSBcIik7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIG1zZy5zZW5kKG1zZy50LmZvdW5kLCB7XG4gICAgICAgICAgICBzaXRlOiBldGMubV93b3JrZXIuc2l0ZSxcbiAgICAgICAgICAgIHVybDogZG9jdW1lbnQuVVJMLFxuICAgICAgICAgICAgdGl0bGU6ICQoJ3RpdGxlJykudGV4dCgpXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sIDApO1xuICAgICAgICBldGMubV93b3JrZXIgPSBuZXcgV29ya2VyKCk7XG4gICAgICAgIGV0Yy5tX3dvcmtlci5pbml0KCk7XG4gICAgICAgIGNoZWNrX3BsYXlpbmcoKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBzdGFydF9jaGVjayA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBfY2hlY2ssIGNoZWNrX21heF9zLCBjb3VudDtcbiAgICBjb3VudCA9IHtcbiAgICAgIGk6IDBcbiAgICB9O1xuICAgIGNoZWNrX21heF9zID0gY29uZmlnLmNoZWNrX2luaXRfbWF4X3dhaXRfcztcbiAgICBfY2hlY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciByZXN1bHQ7XG4gICAgICByZXN1bHQgPSBjaGVja19zaXRlX3N1cHBvcnQoKTtcbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgcmV0dXJuIGxvZy5jKFwiZm91bmQgc3VwcG9ydGVkIHNpdGUgKHBhZ2UpIGFmdGVyIFwiICsgY291bnQuaSArIFwic1wiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvdW50LmkgKz0gMTtcbiAgICAgICAgaWYgKGNvdW50LmkgPiBjaGVja19tYXhfcykge1xuICAgICAgICAgIHJldHVybiBsb2cuYyhcImdpdmUgdXAsIGNoZWNrIHN1cHBvcnQgYWZ0ZXIgXCIgKyBjb3VudC5pICsgXCJzXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBzZXRUaW1lb3V0KF9jaGVjaywgMWUzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgbG9nLmMoJ3N0YXJ0IGNoZWNrIHBhZ2UgKHNpdGUgc3VwcG9ydCknKTtcbiAgICByZXR1cm4gc2V0VGltZW91dChfY2hlY2ssIDApO1xuICB9O1xuXG4gIGNoZWNrX3BsYXlpbmcgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgX2NoZWNrX3BsYXksIGNvdW50LCBjb3VudF9tYXgsIHc7XG4gICAgY291bnQgPSB7XG4gICAgICBpOiAwLFxuICAgICAgb2xkOiBudWxsXG4gICAgfTtcbiAgICBjb3VudF9tYXggPSBjb25maWcuY2hlY2tfdmlkZW9fcGxheV9jb3VudF9zO1xuICAgIHcgPSBldGMubV93b3JrZXI7XG4gICAgX2NoZWNrX3BsYXkgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBub3c7XG4gICAgICBub3cgPSB3LmdldF90aW1lKCk7XG4gICAgICBpZiAobm93ICE9PSBjb3VudC5vbGQpIHtcbiAgICAgICAgY291bnQuaSArPSAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY291bnQuaSA9IDA7XG4gICAgICB9XG4gICAgICBjb3VudC5vbGQgPSBub3c7XG4gICAgICBpZiAoY291bnQuaSA+IGNvdW50X21heCkge1xuICAgICAgICBsb2cuYyhcInZpZGVvIGlzIG5vdyBwbGF5aW5nIC4uIC4gKFwiICsgY291bnRfbWF4ICsgXCJzKVwiKTtcbiAgICAgICAgcmV0dXJuIG1zZy5zZW5kKG1zZy50LnBsYXlpbmcsIHcuZ2V0X2luZm8oKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChfY2hlY2tfcGxheSwgMWUzKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGxvZy5jKCdzdGFydCBjaGVjayB2aWRlbyBwbGF5aW5nIC4uIC4gJyk7XG4gICAgcmV0dXJuIHNldFRpbWVvdXQoX2NoZWNrX3BsYXksIDApO1xuICB9O1xuXG4gIGluaXRfbXNnID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIG1zZy5vbihmdW5jdGlvbihpbmZvKSB7XG4gICAgICBsb2cuYyhcIkRFQlVHOiBnb3QgbXNnLCB0eXBlID09IFwiICsgaW5mby50eXBlICsgXCIsIGRhdGEgPT0gXCIgKyAoSlNPTi5zdHJpbmdpZnkoaW5mby5kYXRhKSkgKyBcIiBcIik7XG4gICAgICBzd2l0Y2ggKGluZm8udHlwZSkge1xuICAgICAgICBjYXNlIG1zZy50LmNoZWNrX3N1cHBvcnQ6XG4gICAgICAgICAgbG9nLmMoJ2NoZWNrX3N1cHBvcnQsIGFnYWluJyk7XG4gICAgICAgICAgcmV0dXJuIHN0YXJ0X2NoZWNrKCk7XG4gICAgICAgIGNhc2UgbXNnLnQuZ2V0X2luZm86XG4gICAgICAgICAgcmV0dXJuIGluZm8uY2FsbGJhY2soZXRjLm1fd29ya2VyLmdldF9pbmZvKCkpO1xuICAgICAgICBjYXNlIG1zZy50LnNldF90aW1lOlxuICAgICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIHM7XG4gICAgICAgICAgICBzID0gaW5mby5kYXRhLnRpbWVfcztcbiAgICAgICAgICAgIGxvZy5jKFwic2V0X3RpbWUsIHMgPT0gXCIgKyBzICsgXCIgXCIpO1xuICAgICAgICAgICAgZXRjLm1fd29ya2VyLnNldF90aW1lKHMpO1xuICAgICAgICAgICAgaWYgKGluZm8uZGF0YS5wYXVzZSkge1xuICAgICAgICAgICAgICByZXR1cm4gZXRjLm1fd29ya2VyLnBhdXNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgMCk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIGxvZy5jKFwiRklYTUU6IHVua25vdyBtc2csIHR5cGUgPT0gXCIgKyBpbmZvLnR5cGUgKyBcIiBcIik7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgY29udGVudF9pbml0ID0gZnVuY3Rpb24oKSB7XG4gICAgaW5pdF9tc2coKTtcbiAgICByZXR1cm4gc3RhcnRfY2hlY2soKTtcbiAgfTtcblxuICBjb250ZW50X2luaXQoKTtcblxufSkuY2FsbCh0aGlzKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29udGVudC5qcy5tYXBcbiIsIi8vIEdlbmVyYXRlZCBieSBDb2ZmZWVTY3JpcHQgMS4xMi4zXG4oZnVuY3Rpb24oKSB7XG4gIHZhciBsb2dfcDtcblxuICBsb2dfcCA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgICByZXR1cm4gY29uc29sZS5sb2cobW9kdWxlLmV4cG9ydHMucHJlZml4ICsgdGV4dCk7XG4gIH07XG5cbiAgbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgcHJlZml4OiAncGFyc2Vfdi1jcng6ICcsXG4gICAgZDogZnVuY3Rpb24odGV4dCkge1xuICAgICAgcmV0dXJuIGxvZ19wKCdERUJVRzogJyArIHRleHQpO1xuICAgIH0sXG4gICAgYzogZnVuY3Rpb24odGV4dCkge1xuICAgICAgcmV0dXJuIGxvZ19wKCdjb250ZW50IHNjcmlwdDogJyArIHRleHQpO1xuICAgIH1cbiAgfTtcblxufSkuY2FsbCh0aGlzKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bG9nLmpzLm1hcFxuIiwiLy8gR2VuZXJhdGVkIGJ5IENvZmZlZVNjcmlwdCAxLjEyLjNcbihmdW5jdGlvbigpIHtcbiAgdmFyIG1zZ190eXBlX2NoZWNrX3N1cHBvcnQsIG1zZ190eXBlX2ZsdXNoX2RvbmUsIG1zZ190eXBlX2ZvdW5kLCBtc2dfdHlwZV9nZXRfYWxsLCBtc2dfdHlwZV9nZXRfaW5mbywgbXNnX3R5cGVfZ2V0X29uZV9maWxlLCBtc2dfdHlwZV9nZXRfc3RhdGUsIG1zZ190eXBlX3BsYXlpbmcsIG1zZ190eXBlX3NldF90aW1lLCBtc2dfdHlwZV9zdGFydF9mbHVzaCwgbXNnX3ZlcnNpb24sIHBhcnNlX3ZfbWFyaywgc2VuZF9tc2csIHNlbmRfdG9fY29udGVudCwgc2V0X29uX21zZztcblxuICBwYXJzZV92X21hcmsgPSAndXVpZD1lYzk2ODBlNi1kYTVlLTQ5NzEtYWM1Zi0yNWQ5NzFiZjYzNjYnO1xuXG4gIG1zZ192ZXJzaW9uID0gJzAuMS4wLTEnO1xuXG4gIG1zZ190eXBlX2ZvdW5kID0gJ2NvbnRlbnRfZm91bmQnO1xuXG4gIG1zZ190eXBlX3BsYXlpbmcgPSAnY29udGVudF9wbGF5aW5nJztcblxuICBtc2dfdHlwZV9nZXRfaW5mbyA9ICdjb250ZW50X2dldF9pbmZvJztcblxuICBtc2dfdHlwZV9jaGVja19zdXBwb3J0ID0gJ2NvbnRlbnRfY2hlY2tfc3VwcG9ydCc7XG5cbiAgbXNnX3R5cGVfc2V0X3RpbWUgPSAnY29udGVudF9zZXRfdGltZSc7XG5cbiAgbXNnX3R5cGVfZ2V0X3N0YXRlID0gJ3BvcHVwX2dldF9zdGF0ZSc7XG5cbiAgbXNnX3R5cGVfc3RhcnRfZmx1c2ggPSAncG9wdXBfc3RhcnRfZmx1c2gnO1xuXG4gIG1zZ190eXBlX2ZsdXNoX2RvbmUgPSAncG9wdXBfZmx1c2hfZG9uZSc7XG5cbiAgbXNnX3R5cGVfZ2V0X2FsbCA9ICdkbF9nZXRfYWxsJztcblxuICBtc2dfdHlwZV9nZXRfb25lX2ZpbGUgPSAnZGxfZ2V0X29uZV9maWxlJztcblxuICBzZXRfb25fbXNnID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICByZXR1cm4gY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKGZ1bmN0aW9uKG1zZywgc2VuZGVyLCBzZW5kX3Jlcykge1xuICAgICAgdmFyIGU7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoISgobXNnLm1hcmsgPT09IHBhcnNlX3ZfbWFyaykgJiYgKG1zZy52ZXJzaW9uID09PSBtc2dfdmVyc2lvbikpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBlID0gZXJyb3I7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNhbGxiYWNrKHtcbiAgICAgICAgbWFyazogbXNnLm1hcmssXG4gICAgICAgIHZlcnNpb246IG1zZy52ZXJzaW9uLFxuICAgICAgICB0eXBlOiBtc2cudHlwZSxcbiAgICAgICAgZGF0YTogbXNnLmRhdGEsXG4gICAgICAgIHNlbmRlcjogc2VuZGVyLFxuICAgICAgICBjYWxsYmFjazogc2VuZF9yZXNcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gIH07XG5cbiAgc2VuZF9tc2cgPSBmdW5jdGlvbihtc2dfdHlwZSwgZGF0YSwgY2FsbGJhY2spIHtcbiAgICB2YXIgbXNnO1xuICAgIG1zZyA9IHtcbiAgICAgIG1hcms6IHBhcnNlX3ZfbWFyayxcbiAgICAgIHZlcnNpb246IG1zZ192ZXJzaW9uLFxuICAgICAgdHlwZTogbXNnX3R5cGUsXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfTtcbiAgICByZXR1cm4gY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UobnVsbCwgbXNnLCBjYWxsYmFjayk7XG4gIH07XG5cbiAgc2VuZF90b19jb250ZW50ID0gZnVuY3Rpb24obXNnX3R5cGUsIGRhdGEsIGNhbGxiYWNrLCB0YWJfaWQpIHtcbiAgICB2YXIgbXNnO1xuICAgIG1zZyA9IHtcbiAgICAgIG1hcms6IHBhcnNlX3ZfbWFyayxcbiAgICAgIHZlcnNpb246IG1zZ192ZXJzaW9uLFxuICAgICAgdHlwZTogbXNnX3R5cGUsXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfTtcbiAgICByZXR1cm4gY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UodGFiX2lkLCBtc2csIGNhbGxiYWNrKTtcbiAgfTtcblxuICBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBtYXJrOiBwYXJzZV92X21hcmssXG4gICAgdmVyc2lvbjogbXNnX3ZlcnNpb24sXG4gICAgdDoge1xuICAgICAgZm91bmQ6IG1zZ190eXBlX2ZvdW5kLFxuICAgICAgcGxheWluZzogbXNnX3R5cGVfcGxheWluZyxcbiAgICAgIGdldF9pbmZvOiBtc2dfdHlwZV9nZXRfaW5mbyxcbiAgICAgIGNoZWNrX3N1cHBvcnQ6IG1zZ190eXBlX2NoZWNrX3N1cHBvcnQsXG4gICAgICBzZXRfdGltZTogbXNnX3R5cGVfc2V0X3RpbWUsXG4gICAgICBnZXRfc3RhdGU6IG1zZ190eXBlX2dldF9zdGF0ZSxcbiAgICAgIHN0YXJ0X2ZsdXNoOiBtc2dfdHlwZV9zdGFydF9mbHVzaCxcbiAgICAgIGZsdXNoX2RvbmU6IG1zZ190eXBlX2ZsdXNoX2RvbmUsXG4gICAgICBnZXRfYWxsOiBtc2dfdHlwZV9nZXRfYWxsLFxuICAgICAgZ2V0X29uZV9maWxlOiBtc2dfdHlwZV9nZXRfb25lX2ZpbGVcbiAgICB9LFxuICAgIG9uOiBzZXRfb25fbXNnLFxuICAgIHNlbmQ6IHNlbmRfbXNnLFxuICAgIHNlbmRfdG9fY29udGVudDogc2VuZF90b19jb250ZW50XG4gIH07XG5cbn0pLmNhbGwodGhpcyk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1zZy5qcy5tYXBcbiJdfQ==
