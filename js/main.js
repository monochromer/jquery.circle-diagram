$(function() {

	$('#diagram-id-1').circleDiagram();

	$('#diagram-id-2').circleDiagram({
		"percent": "65%",
		"size": "280",
		"borderWidth": "4",
		"bgFill": "#e2e2e2",
		"frFill": "#06c",
		"textSize": "56",
		"textColor": "#585858"
	});
});