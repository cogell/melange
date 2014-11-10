// currently all templates are gathered by a plugin and added to $templateCache in the "templates" module.  This is not cool cause it puts all templates in one scope which could cause name conflicts and is not very moduluar.  The hope is to later replace that plugin with some homebrew (or newer community plugin) that better supports moduluar template definitions.

angular
.module('templates',[

]);

