$.getJSON("data.json", function (data) {
    $.each(data, function (index, spot) {
        $("table").append(
            `<tr>
                <td>${spot.name}</td>
                <td>${spot.description}</td>
                <td><a id="map-btn" href="https://www.google.com/maps?q=${spot.location[0]}},${spot.location[1]}">Open in Google Maps</a></td>
            </tr>`
        );
    });
});
