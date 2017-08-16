function cut(str, cutStart, cutEnd){
  return str.substr(0,cutStart) + str.substr(cutEnd+1);
}

filename = window.location.pathname.substring(window.location.pathname.lastIndexOf('/')+1);
filename = cut(filename, filename.length - 5, filename.length)
images = {
  "christine": ["http://i.imgur.com/nfVVcJr.jpg", "http://i.imgur.com/skX0Ojr.jpg", "http://i.imgur.com/vD9cD0d.jpg", "http://i.imgur.com/gIbJCoV.jpg", "http://i.imgur.com/ADTkYAC.jpg", "http://i.imgur.com/9gTbVqk.jpg", "http://i.imgur.com/lTOBDrR.jpg", "http://i.imgur.com/3gVgtX5.jpg", "http://i.imgur.com/O1CHxGV.jpg", "http://i.imgur.com/qolTHxv.jpg", "http://i.imgur.com/O7iBxS0.jpg", "http://i.imgur.com/qAkmFhW.jpg", "http://i.imgur.com/lKOzb7N.jpg", "http://i.imgur.com/QTm8HAo.jpg", "http://i.imgur.com/bt3WYuj.jpg", "http://i.imgur.com/GGiZdmZ.jpg", "http://i.imgur.com/Ab4WRJE.jpg", "http://i.imgur.com/sLBEOz6.jpg", "http://i.imgur.com/7rCkZoY.jpg", "http://i.imgur.com/1oRpi0k.jpg", "http://i.imgur.com/Nfn4cfc.jpg", "http://i.imgur.com/elwM6O8.jpg", "http://i.imgur.com/3Wjpuhv.jpg", "http://i.imgur.com/k2M7M1Q.jpg", "http://i.imgur.com/yE5Eztr.jpg", "http://i.imgur.com/U9bE521.jpg", "http://i.imgur.com/ao0ycc2.jpg", "http://i.imgur.com/Ls2m8ME.jpg", "http://i.imgur.com/IDtLuAv.jpg", "http://i.imgur.com/2Ne6vtW.jpg"],
  "benyu": ["http://i.imgur.com/1XEzHSg.jpg", "http://i.imgur.com/2qonZla.jpg", "http://i.imgur.com/JWLlyTi.jpg", "http://i.imgur.com/aXTCqqV.jpg", "http://i.imgur.com/QFHlLSJ.jpg", "http://i.imgur.com/HQ6QdlD.jpg", "http://i.imgur.com/GPfe9LS.jpg", "http://i.imgur.com/2vu8JUJ.jpg", "http://i.imgur.com/Id2ElIj.png", "http://i.imgur.com/bvwVwmb.jpg", "http://i.imgur.com/3uOkq52.jpg", "http://i.imgur.com/JDZRAG6.jpg", "http://i.imgur.com/2ITGAAn.png", "http://i.imgur.com/1yKKlWt.png", "http://i.imgur.com/80TtYI3.jpg", "http://i.imgur.com/QWry8Cw.png", "http://i.imgur.com/l2EyvPf.jpg", "http://i.imgur.com/0mOfA5U.png", "http://i.imgur.com/ag7wnjk.png", "http://i.imgur.com/OTEufkY.jpg", "http://i.imgur.com/9reczVs.png", "http://i.imgur.com/ZqG6IK7.jpg", "http://i.imgur.com/iZSTefD.png", "http://i.imgur.com/TWr8MEV.png", "http://i.imgur.com/DzDwCQc.png", "http://i.imgur.com/3YaDTBv.png", "http://i.imgur.com/PIR918Z.png", "http://i.imgur.com/STHm0J5.png", "http://i.imgur.com/ebwHq6r.png", "http://i.imgur.com/Oty3QWL.png"],
  "hoda": ["http://i.imgur.com/3lnNAvU.jpg", "http://i.imgur.com/g8wZN0h.jpg", "http://i.imgur.com/2HW8KS4.jpg", "http://i.imgur.com/TNnRUvc.jpg", "http://i.imgur.com/cJVJAR6.jpg", "http://i.imgur.com/kN7iUJ4.jpg", "http://i.imgur.com/5LnCQOT.png", "http://i.imgur.com/bB1TgMz.png", "http://i.imgur.com/Id2ElIj.png", "http://i.imgur.com/Oqz0Tyr.png", "http://i.imgur.com/B0JS7gL.jpg", "http://i.imgur.com/VsMIOJT.png", "http://i.imgur.com/2ITGAAn.png", "http://i.imgur.com/1yKKlWt.png", "http://i.imgur.com/Obh3XKo.png", "http://i.imgur.com/QWry8Cw.png", "http://i.imgur.com/j4ilYeZ.png", "http://i.imgur.com/0mOfA5U.png", "http://i.imgur.com/ag7wnjk.png", "http://i.imgur.com/LMAJliZ.png", "http://i.imgur.com/9reczVs.png", "http://i.imgur.com/FL3LiFc.png", "http://i.imgur.com/iZSTefD.png", "http://i.imgur.com/TWr8MEV.png", "http://i.imgur.com/DzDwCQc.png", "http://i.imgur.com/3YaDTBv.png", "http://i.imgur.com/PIR918Z.png", "http://i.imgur.com/STHm0J5.png", "http://i.imgur.com/ebwHq6r.png", "http://i.imgur.com/Oty3QWL.png"],
  "aryan": ["http://i.imgur.com/OA93fQL.jpg", "http://i.imgur.com/xX0XRVe.jpg", "http://i.imgur.com/tfwBhWf.jpg", "http://i.imgur.com/Q3IQwcK.jpg", "http://i.imgur.com/o2ySrza.jpg", "http://i.imgur.com/mMAA2d7.jpg", "http://i.imgur.com/k5cBLk7.jpg", "http://i.imgur.com/3OZxIri.jpg", "http://i.imgur.com/Zfu1DdF.jpg", "http://i.imgur.com/myExsDx.jpg", "http://i.imgur.com/vorg3I1.jpg", "http://i.imgur.com/u7d70h1.jpg", "http://i.imgur.com/Z76N95p.jpg", "http://i.imgur.com/1yKKlWt.png", "http://i.imgur.com/YjiyHHA.jpg", "http://i.imgur.com/NJPT1Zy.jpg", "http://i.imgur.com/488ek9M.jpg", "http://i.imgur.com/9XdAEbN.jpg", "http://i.imgur.com/wRMNoOe.jpg", "http://i.imgur.com/4bOVMS7.jpg", "http://i.imgur.com/pKVmIIe.jpg", "http://i.imgur.com/3cL7ANT.jpg", "http://i.imgur.com/F4v2iYK.jpg", "http://i.imgur.com/TWr8MEV.png", "http://i.imgur.com/jXdTG0c.jpg", "http://i.imgur.com/M2q1baW.jpg", "http://i.imgur.com/TL7VIK3.jpg", "http://i.imgur.com/STHm0J5.png", "http://i.imgur.com/ebwHq6r.png", "http://i.imgur.com/Oty3QWL.png"],
  "benye": ["http://i.imgur.com/mAhH0C5.png", "http://i.imgur.com/OY5KZL2.jpg", "http://i.imgur.com/n92bcOx.jpg", "http://i.imgur.com/cPrRrzo.jpg", "http://i.imgur.com/RTRUwXM.jpg", "http://i.imgur.com/1l1oU0I.jpg", "http://i.imgur.com/5LnCQOT.png", "http://i.imgur.com/wVDNpKE.jpg", "http://i.imgur.com/Id2ElIj.png", "http://i.imgur.com/Oqz0Tyr.png", "http://i.imgur.com/rEslX5v.png", "http://i.imgur.com/VsMIOJT.png", "http://i.imgur.com/2ITGAAn.png", "http://i.imgur.com/1yKKlWt.png", "http://i.imgur.com/Obh3XKo.png",  "http://i.imgur.com/QWry8Cw.png", "http://i.imgur.com/j4ilYeZ.png", "http://i.imgur.com/0mOfA5U.png", "http://i.imgur.com/ag7wnjk.png", "http://i.imgur.com/LMAJliZ.png", "http://i.imgur.com/9reczVs.png", "http://i.imgur.com/FL3LiFc.png", "http://i.imgur.com/iZSTefD.png", "http://i.imgur.com/TWr8MEV.png", "http://i.imgur.com/DzDwCQc.png", "http://i.imgur.com/3YaDTBv.png", "http://i.imgur.com/PIR918Z.png", "http://i.imgur.com/STHm0J5.png", "http://i.imgur.com/ebwHq6r.png", "http://i.imgur.com/Oty3QWL.png"]
}
currentImage = 0;

function initImages() {
  document.getElementById("main-image").src = images[filename][currentImage];
  document.getElementById("background-image").style.background = `#000000 url("${images[filename][currentImage]}")`

  if (window.innerWidth < window.innerHeight) {
    alert("Hey, it looks like you're running on mobile (or just a weird vertical monitor)! This website is designed to run in landscape mode so it's highly recommended you turn your phone (or monitor).");
  }
}

function nextImage() {
  if (currentImage != images[filename].length - 1) {
    currentImage++;
    document.getElementById("main-image").src = images[filename][currentImage];
    document.getElementById("background-image").style.background = `#000000 url("${images[filename][currentImage]}")`;
  } else {
    return;
  }
}

function previousImage() {
  if (currentImage != 0) {
    currentImage--;
    document.getElementById("main-image").src = images[filename][currentImage];
    document.getElementById("background-image").style.background = `#000000 url("${images[filename][currentImage]}")`;
  } else {
    return;
  }
}
