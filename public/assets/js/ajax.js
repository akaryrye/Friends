$(function () {
  $(".change").on("click", function (event) {
    var id = $(this).data("id");
    var newGender = $(this).data("change");
    console.log("newGender: " + newGender);
    var newGenderState = {
      male : newGender
    };

    $.ajax("/api/friend/" + id, {
      type: "PUT",
      data: newGenderState
    }).then(
      function () {
        console.log("changed gender to" + newGender);
        location.reload();
      }
    );
  });

  function formatScore() {
    let score = "";
    for (let i = 0; i < 9; i++) {
      score += $(`#score${i}`).val().trim() + ','
    }
    score += $(`#score9`).val().trim();
    return score;
  }

  $(".create-form").on("submit", function (event) {
    event.preventDefault();
    var newFriend = {
      name: $("#myName").val().trim(),
      male: $("[name=male]:checked").val().trim(),
      score: formatScore()
    };
    console.log(newFriend);
    $.ajax("/api/friend", {
      type: "POST",
      data: newFriend
    }).then(
      function () {
        console.log("created new friend");
        location.reload();
      }
    );
  });

  $(".delete").on("click", function (event) {
    var id = $(this).data("id");

    $.ajax("/api/friend/" + id, {
      type: "DELETE"
    }).then(
      function () {
        console.log("deleted friend", id);
        location.reload();
      }
    );
  });
});
