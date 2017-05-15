// CLick on textbox
$("#txtbxInput").focus(function() {
	$(this).val("");
});

// Press enter to create table
$("#txtbxInput").keypress(function(ev) {
	if(ev.keyCode == 13) 
	{
		ev.preventDefault();
		if($(this).val() != "")
		{
			$("#tableStylingForm").css("display", "inline-block");
			createTable();
			$(this).val("");
		}
	}
});

// Click button to create table
$("#btnCreateTable").click(function() {
	$("#tableStylingForm").css("display", "inline-block");
	createTable();
});

// Creates new table
function createTable() {
	$("tr").remove();

	var numOfRows = parseInt($("#txtbxInput").val(), 10);
	for(var i = 1; i <= numOfRows; i++)
	{
		var newRow = $("<tr></tr>");
		newRow.append("<td>" + i + "</td><td>Dylan</td>");
		$("table").append(newRow);
	}
};

// Shade every other row
$("#btnShadeBoxes").click(function() {
	$("tr:nth-child(even)").css("background-color", "#DDD");
});

// Darken bottom line of every 10th row
$("#btnDarkenLines").click(function() {
	$("tr:nth-child(10n)").css("border-bottom", "5px solid black");
});

// Reset table styles
$("#btnReset").click(function() {
	$("tr").css("background-color", "white");
	$("tr").css("border-bottom", "1px solid black");
});

