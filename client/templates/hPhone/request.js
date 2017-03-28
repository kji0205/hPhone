Template.hphone.events({
  'submit form': function(e) {
    e.preventDefault();

    var post = {
      rType: $(e.target).find('[name=rType]').val(),
      rGubun: $(e.target).find('[name=rGubun]').val(),
      rName: $(e.target).find('[name=rName]').val(),
      rJumin1: $(e.target).find('[name=rBirth]').val(),
      rJumin2: $(e.target).find('[name=rSex]').val(),
      rPhone: $(e.target).find('[name=rPhone]').val(),
    };

    if (!post.rGubun) {
      alert("고객구분을 선택하세요");
      $(e.target).find('[name=rGubun]').focus();
      return false;
    }
    if (!post.rName) {
      alert("이름을 입력하세요");
      $(e.target).find('[name=rName]').focus();
      return false;
    }
    if (!post.rJumin1) {
      alert("생년월일을 입력하세요");
      $(e.target).find('[name=rBirth]').focus();
      return false;
    }
    if (!post.rJumin2) {
      alert("성별을 선택하세요");
      return false;
    }

    hphone._id = hphone.insert(post);
    // hphone.update();
    //Router.go('hphonelist', post);
    alert("신청해주셔서 감사합니다.");
  }
});