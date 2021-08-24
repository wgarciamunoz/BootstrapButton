function BootstrapButton($) {
  this.show = function() {
    var spc = '';
    var btn = 'bt' + Math.floor((Math.random() * 100) + 1);

    this.default();

    var html = '';

    html = '<button id="' +
      btn +
      '" type="button" alt="' +
      this.Tooltiptext +
      '" class="btn ' +
      this.Style +
      this.Outline +
      ' ' +
      this.Active +
      ' ' +
      this.Size +
      ' ' +
      this.Block +
      '" ' +
      this.Disabled + '>';
    if (this.Glyphicon != '') {
      html += '<span class="glyphicon ' +
        this.Glyphicon +
        '">' +
        '</span>';
      spc = '&nbsp;';
    }

    html += spc + this.Caption;

    if (this.Badge != 0) {
      html += '&nbsp;<span class="badge">' +
        this.Badge +
        '</span>';
    }
    html += '</button>';
    this.setHtml(html);

    var myThis(html) = this;

		$('#' + btn).click(function() {
      myThis.Click();
    });
  }

  this.default = function() {
    this.Style = (this.Style == '') ? "btn-primary" : this.Style;
    this.Size = (this.Size == '') ? "btn-sm" : this.Size;
    this.Disabled = (this.Disabled) ? "disabled" : "";
    this.Active = (this.Active) ? "active" : "";
    this.Block = (this.Block) ? "btn-block" : "";
    this.Outline = (this.Outline) ? "-outline" : "";
  }

  this.destroy = function() {}
}
