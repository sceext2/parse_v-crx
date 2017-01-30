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

//# sourceMappingURL=msg.js.map
