describe("Emerson", function() {
  it("is defined", function() {
    expect(Emerson).toBeDefined();
  });

  it("is the expected version", function() {
    expect(Emerson.VERSION).toEqual('0.0.0');
  });

  describe(".init", function() {
    it("calls module.init for registered modules", function() {
      _.each(['util', 'view'], function(mod) {
        spyOn(Emerson[mod], 'init');
      });

      Emerson.init();
      expect(Emerson.util.init).toHaveBeenCalled();
      expect(Emerson.view.init).toHaveBeenCalled();
    });
  });
});
