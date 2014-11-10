(function() {

  var sys = window.ngSystem,
    ker_mods = {};
  delete window.ngSystem;

  sys.ker_mods_names.forEach(function(ker_mod_name) {
    console.log('ker_mod..:', ker_mod_name);
    var conf = sys.ker_mods_def[ker_mod_name],
      path = sys.path_app('kernel', ker_mod_name);

    console.log('path..:', path);
    ker_mods[ker_mod_name] = sys.require(path)(angular, conf);
  });

  console.log('ngsystem..:', sys.ker_mods_names);
  // var sysrequire_apps = sys.ker_mods_names.concat(sys.usr_mods_names);
  // console.log(sysrequire_apps);
  // angular.module('ng-system', sysrequire_apps);
})();