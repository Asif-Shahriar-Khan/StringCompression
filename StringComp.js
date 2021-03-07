function stringCompression (S) {
    if (S.length == 0) {
      console.log('Please enter valid string');
      return;
    }

    var output = '';
    var count = 0;
    for (var i = 0; i < S.length; i++) {
      count++;
      if (S[i] != S[i+1]) {
        output += S[i] + count;
        count = 0;
      }
    }

    console.log(output);
  }
  
  stringCompression(''); //Please enter valid string.
  stringCompression('aabccaaa'); //a2b1c2a3
  stringCompression('aajjjfzzi'); //a2j3f1z2i1
  stringCompression('aaaabccaadd'); //a4b1c2a2d2
  