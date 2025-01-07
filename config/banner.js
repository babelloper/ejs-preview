module.exports = function(site, mode) {
  var banner = [
    '██████╗  ██████╗ ██████╗ ██╗   ██╗███████╗██████╗ ██╗███████╗███╗   ██╗██████╗',
    '██╔══██╗██╔═══██╗██╔══██╗╚██╗ ██╔╝██╔════╝██╔══██╗██║██╔════╝████╗  ██║██╔══██╗',
    '██████╔╝██║   ██║██║  ██║ ╚████╔╝ █████╗  ██████╔╝██║█████╗  ██╔██╗ ██║██║  ██║',
    '██╔══██╗██║   ██║██║  ██║  ╚██╔╝  ██╔══╝  ██╔══██╗██║██╔══╝  ██║╚██╗██║██║  ██║' + site.siteName,
    '██████╔╝╚██████╔╝██████╔╝   ██║   ██║     ██║  ██║██║███████╗██║ ╚████║██████╔╝' + site.company + ' ' + site.team,
    '╚═════╝  ╚═════╝ ╚═════╝    ╚═╝   ╚═╝     ╚═╝  ╚═╝╚═╝╚══════╝╚═╝  ╚═══╝╚═════╝' + 'v' + site.version
  ];

  var additionalMsg = {
    dev: [
      'ATTENTION!',
      'THIS IS ONLY INTENDED FOR DEVELOPMENT,',
      'AND SHOULD NEVER BE USED IN PRODUCTION!'
    ],
    preview: [
      'ATTENTION!',
      'THIS IS ONLY INTENDED FOR UI-PREVIEW,',
      'AND SHOULD NEVER BE USED IN PRODUCTION!'
    ]
  };

  if (mode in additionalMsg) {
    banner = banner.concat('', additionalMsg[mode]);
  }

  banner.unshift('');
  banner.push('\n');
  return banner.join('\n');
};
