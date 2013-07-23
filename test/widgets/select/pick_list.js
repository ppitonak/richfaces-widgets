describe("The pick list component", function () {

  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = "/base/test/widgets/select";
    loadFixtures("pick_list.html");
  });

  it("should be visible", function () {
    $("#pickList").pickList();
    expect($("#pickList")).toBeVisible();
  });

  it("should contain 8 items in the left list", function () {
    $("#pickList").pickList();
    expect($("#pickList div.left li")).toHaveLength(8);
  });
  
  it("should contain 1 item in the right list", function () {
    $("#pickList").pickList();
    expect($("#pickList div.right li")).toHaveLength(1);
  });
});

