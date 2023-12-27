'use client';

import Link from "next/link";

import DayHeader from '../../components/dayHeader/dayHeader.component';
import CodeBlock from '../../components/codeBlock/codeBlock.component';


export default function Page() {

  const testInput = `px{a<2006:qkq,m>2090:A,rfg}
  pv{a>1716:R,A}
  lnx{m>1548:A,A}
  rfg{s<537:gd,x>2440:R,A}
  qs{s>3448:A,lnx}
  qkq{x<1416:A,crn}
  crn{x>2662:A,R}
  in{s<1351:px,qqz}
  qqz{s>2770:qs,m<1801:hdj,R}
  gd{a>3333:R,R}
  hdj{m>838:A,pv}
  
  {x=787,m=2655,a=1222,s=2876}
  {x=1679,m=44,a=2067,s=496}
  {x=2036,m=264,a=79,s=2244}
  {x=2461,m=1339,a=466,s=291}
  {x=2127,m=1623,a=2188,s=1013}`;

  const realInput = `tp{m>2826:R,R}
  bh{x<2396:sv,x<2996:ccd,a>2397:cll,hcv}
  hsh{x>3195:R,A}
  vh{a<2697:R,a<2806:xxn,s>1203:pp,R}
  xdq{m<1248:tgh,s<1720:hp,m>1401:hkk,zn}
  xpd{m<313:R,a<924:A,R}
  ph{m>1988:qzv,m<1031:mzb,xxh}
  ng{a>960:A,R}
  bdd{x>3121:R,m<853:R,A}
  fxr{x<3445:gvp,dkc}
  gtg{x<3459:rz,a>1604:A,x<3794:A,R}
  mv{m>925:R,s>3630:R,R}
  hst{a<1998:A,s>3483:R,a>2040:R,A}
  pns{x>1740:snb,nmz}
  tcg{m>2108:R,A}
  tln{m>92:A,m<50:A,A}
  fj{s>2317:bc,A}
  rcq{a<1967:nzp,a<2141:prf,a<2283:np,zjj}
  nmz{a>921:kq,m>1301:xt,x>967:dsb,vz}
  kbn{a<2143:R,hv}
  lkv{s>1135:A,x<3237:A,fqm}
  rnv{x<472:R,s<3099:A,x<666:R,R}
  xdn{m<1491:A,x>1982:A,s>547:R,R}
  jmm{x<915:R,fm}
  mjs{a>1720:R,A}
  pl{s>1882:btg,ktl}
  sbq{s>3419:R,grz}
  sm{m>2593:fhj,x>3559:kh,s>866:jq,fv}
  zbx{a<2662:A,s>838:A,a>2717:R,A}
  rr{s>2431:R,a<563:A,x<1798:A,R}
  sgz{x<2936:pm,m<1451:jzh,A}
  tbg{x<893:R,A}
  jzh{m<1392:A,s<3334:R,R}
  rng{m<1339:R,m>1454:A,R}
  pjr{a>2546:A,a>2438:R,A}
  zpf{a<2995:R,a<3120:R,x>3735:R,R}
  hlg{s<2409:cpx,x>3284:kll,qfm}
  gd{s<2471:R,a<892:R,s<3085:A,R}
  mnr{a<2651:A,s<1101:R,A}
  gnm{m>3582:A,m<3417:R,m>3506:A,A}
  tkv{s<3179:A,s<3605:A,R}
  qzk{s<973:R,s<1150:A,A}
  nc{a>427:R,s<2198:A,R}
  khm{m<3350:cpj,scm}
  snb{a>928:qfp,x>2681:nk,ll}
  ktn{x>912:R,x<343:A,s<1365:R,A}
  qxj{a>2115:R,x>2842:R,x<2797:A,A}
  mhs{x<2389:hjs,jcp}
  ln{s<633:R,m>1391:A,A}
  gjv{a>998:lkd,s<726:ddq,m>3165:R,R}
  lxd{x<1216:R,A}
  kz{a>2340:A,A}
  cqg{x<2558:R,s<2854:R,s>3400:R,R}
  zp{a<929:bcn,m<2829:R,A}
  qld{s>2287:A,R}
  zv{a<2567:A,R}
  lf{s<2457:R,x>3376:A,a<1150:A,A}
  qnk{x<3486:R,s<339:A,x>3788:R,A}
  rzn{a<391:R,s<3170:A,R}
  gnb{x<2577:bzf,m>1746:A,zrg}
  sqj{s<1044:A,x>2031:A,A}
  kj{a>946:A,a>884:A,A}
  gh{s<1468:cb,zzv}
  zsp{m>2592:R,cgl}
  lnt{s<3555:R,m<1355:A,a<3628:A,R}
  ftf{s<2665:R,qh}
  cx{a>3042:A,A}
  rb{a<364:A,R}
  ss{a<2360:A,m<3751:A,m<3855:A,A}
  xv{x<1290:R,A}
  zxh{x>2582:zzn,x<2559:qbt,s>1335:fj,dzz}
  ll{x>2208:zdc,frc}
  jmj{x<3078:A,s>1547:R,s>1183:A,R}
  msb{m<1033:bfb,s>1607:dz,xbc}
  xx{x<779:R,kbc}
  ktl{m<3129:R,A}
  jxc{x<1598:R,x<2767:R,s>1944:kcl,qn}
  knr{x<2012:dtp,m<116:R,R}
  frc{x<1987:A,R}
  fv{x<3318:zzc,bxx}
  mz{m<1974:A,s>2251:A,R}
  fqm{m>1415:R,R}
  nz{x<3169:R,m<882:A,s>619:R,A}
  vzt{a<3085:R,x>3300:R,x>3160:R,R}
  xg{a<737:A,s>3113:R,m<2413:R,A}
  pf{m<3702:hk,a>1034:A,dk}
  bs{a>3501:R,x<917:A,x<1638:A,A}
  zcg{m>3536:A,R}
  tn{a<3038:qxj,R}
  tzx{m<658:jmm,a<3650:ddj,s<1847:ml,mpq}
  msh{s<1013:A,x>3317:gxd,rvm}
  zl{s>2905:R,a>250:A,x<3516:A,A}
  rsp{a<303:ns,m<464:qxg,tjj}
  tkm{s>1816:A,m<985:R,m<1030:A,A}
  ns{s<2123:R,a<174:mzr,m<421:jg,zl}
  vfk{s<587:A,sqj}
  th{a>3893:A,s>3044:A,s>2563:R,R}
  cd{a>505:R,s>2490:A,R}
  rjx{s>719:R,m<1172:A,x>2571:A,A}
  hv{m>1796:A,m<628:R,R}
  xcd{s>1239:R,m<1000:R,R}
  rbc{s<2028:fc,spz}
  xbc{s<808:qj,cq}
  kbg{m>1645:zh,x<1233:ldg,cg}
  gt{a<406:nms,s<849:A,A}
  pfl{m<1474:A,m<1555:R,A}
  hzq{a>2083:R,hst}
  rgc{a<1422:R,m>242:mhz,tln}
  fvn{x>2708:A,s<3603:A,s<3831:A,R}
  gm{x<394:ccx,lrp}
  tc{m<1057:A,m>1164:R,x>1867:R,R}
  rp{s>3372:A,a<1317:A,a>1331:tgc,zvx}
  ks{x>2630:A,s>1901:R,s>1635:fq,R}
  zh{x>1081:R,A}
  pq{s>2955:A,m>400:R,s<2270:A,A}
  mkn{a<909:R,A}
  mrm{m>2652:R,A}
  bzl{x>1884:A,a<483:rt,A}
  rvm{s>1095:R,a<3388:R,x<3175:A,R}
  dsv{m>1432:dxf,s>3469:R,x>3296:R,bdd}
  jcp{s>1446:R,A}
  mkk{m>3217:R,R}
  xlh{m<3669:zcg,a<3339:ggl,a>3621:lxd,cm}
  hpv{s<2600:A,R}
  nx{a>968:A,m>2608:hn,a>853:A,A}
  dq{m<179:R,m<284:R,m>394:jj,jpv}
  plz{s<3310:A,A}
  pz{a<492:R,a<616:R,x<1989:R,A}
  mn{a>1196:cfr,m>741:ftf,x<1367:pq,pn}
  qzv{s>2247:A,s<933:kbs,sdc}
  ld{s<2432:A,s>2969:zbp,x>3044:A,R}
  xt{a<879:R,x>1097:pcc,A}
  qtf{x<3413:R,x<3485:R,a>3701:R,R}
  dms{s>1965:tn,a>2353:tl,a<1872:mjs,jtj}
  gcn{x>3734:R,m<147:A,R}
  cl{x>3354:R,x<3148:A,a>3465:R,R}
  sbl{s<2594:A,R}
  db{x>2562:R,R}
  njh{x>2588:tjg,a<2368:rjx,m<1102:pjr,lh}
  kbc{s>932:R,m<240:A,x<1023:R,R}
  frg{x>1459:tkm,A}
  kt{a<639:R,s<3318:A,A}
  fb{x<2929:A,s>2906:A,R}
  gv{a>2235:prp,x>3389:vfn,s>2188:mh,zk}
  tjg{m<1087:R,s>961:R,x<2620:R,R}
  ngv{m<3484:R,a>388:A,a>335:R,A}
  qh{s>3270:A,x<1781:R,a<1155:R,R}
  pd{m>2333:A,R}
  sdc{m>2721:R,a<2532:A,R}
  mzx{x<1624:ldv,m<3267:R,x<1722:R,lb}
  dk{m<3858:A,a>835:R,x>2205:A,R}
  ldt{x<2874:A,x<3411:R,a>312:ql,R}
  flt{m<1211:R,R}
  tzb{s<1921:A,R}
  ggl{s<2594:R,s<3426:R,R}
  cpx{a<2127:A,R}
  kmg{a<3151:dsr,slj}
  ck{a<1006:R,x<2273:R,a>1056:A,R}
  xr{x<737:R,a<1772:R,R}
  mh{s>2798:hzq,x>3217:hlg,s<2444:cqn,ht}
  bg{m<1052:sh,dzx}
  ccj{m<1244:R,a>1352:A,m<1299:A,R}
  cll{s>1539:bhj,sm}
  hnh{x>1744:A,R}
  txm{x>3303:R,m<1658:zkg,tkv}
  kq{m>1455:R,a>970:ljn,s>1698:vds,A}
  vt{a<664:A,s>3338:R,A}
  bzf{a>3458:R,a<3037:R,m<1844:A,A}
  cjp{s<829:qnk,sp}
  cf{m>1862:A,A}
  qfm{a>2087:A,s>2591:R,A}
  lnq{s<2772:ccf,m<1333:xm,a<1349:rp,sgz}
  lzg{s>2594:A,m<1966:A,x>3133:R,R}
  lpz{x>422:R,a>695:A,A}
  pv{a>183:A,x>1056:A,s>3395:A,R}
  vfn{m<2203:rbc,pl}
  rql{a>1324:rk,s>1748:sl,x>1412:fh,A}
  jvg{a<1458:hnh,x<1522:lhq,nnl}
  nms{x<1217:A,s<953:A,s<1289:R,A}
  vjd{x>3256:gnm,xz}
  vm{x>890:A,a<3860:R,A}
  tqj{a>1079:R,m>164:A,A}
  prf{x>1161:tx,bnr}
  bc{a<1841:R,A}
  csb{a<1342:gxg,bj}
  dcc{a<866:R,R}
  cq{a>1378:dts,sc}
  sx{m<1473:R,A}
  xb{m<1332:R,R}
  kp{m<3147:R,m>3675:R,a>453:vfx,ngv}
  krt{m<452:tck,s>536:cnk,s<196:A,jr}
  tl{a<3246:R,m<1921:R,m>2897:A,dkn}
  pp{a>2874:A,x>3248:A,s>1353:R,R}
  nf{s<1169:R,x>1591:lhr,s<1759:xr,ppd}
  qxq{x<3820:R,s<1017:R,A}
  jcv{s<2586:jql,a<3255:dsv,txm}
  gn{m<1028:R,A}
  thx{a<695:tkp,x<983:lp,xg}
  dd{s>2269:cd,s>1866:R,pfj}
  fnb{a<345:R,a<547:dgv,a<670:nrm,A}
  zjj{a>2341:lr,m>2599:gh,a<2316:vjz,kbg}
  fgx{s>1967:hd,zmg}
  cv{a>1082:R,a>1069:A,A}
  gxg{x<1329:R,A}
  tql{s<2843:pz,s>3418:A,x>2290:zz,sx}
  vnt{m>2458:khm,a<1142:dh,m<2044:pr,vlt}
  nl{a<334:R,A}
  vjn{s<1193:dcm,m<3613:vth,vnf}
  bkn{s>1339:R,a>3130:R,sbj}
  vc{s<2402:mhs,rn}
  vfb{m>2693:jxc,tf}
  hd{a<2538:jd,s<2716:zsp,s<3303:ffj,hmq}
  pj{m<2447:npr,x<3846:zpf,R}
  hcv{a>1933:gv,vdq}
  rn{m>767:qq,A}
  bxx{m<1364:lrm,a<3401:A,s<527:A,qtf}
  pr{x>2051:R,a>1271:cdv,m<1809:A,A}
  tzl{s>346:A,A}
  nsj{m>321:rnv,R}
  mpq{a>3774:th,R}
  zzc{a<3328:R,fdj}
  qp{x>3394:mxs,ld}
  lhr{a>1800:R,s>1582:A,A}
  cdv{m<1803:R,A}
  prp{s>2212:tq,s>959:nd,m>2353:lq,zg}
  ppd{s>1933:A,m>1876:R,A}
  sbj{a>2741:A,R}
  rtk{a>1099:R,x<1563:R,a>947:A,R}
  hhf{s<700:R,s<746:nzt,lzc}
  xk{s<1431:A,x<2600:A,x<2623:R,R}
  np{s>2091:vhj,pd}
  js{m>1669:tj,a<852:bq,a<1297:nh,msb}
  xrl{s>2752:R,s>2337:A,x<1339:A,R}
  jj{a<930:A,x>2363:A,A}
  ndg{s<2389:A,A}
  bfb{m>608:vc,x<1444:kd,kdl}
  dgv{s<1165:A,x<1639:R,a>466:A,R}
  bzm{s<3318:rgz,fxr}
  bf{a<2375:A,s>673:R,s<532:R,R}
  zkg{a<3544:R,A}
  bnr{a>2068:R,A}
  vz{m>1178:A,m>1136:gd,x>486:R,A}
  pfj{x>2373:R,R}
  ddq{s>401:A,a>895:A,m<3261:A,A}
  dhl{s>2790:mp,s>2026:vnt,s>1853:vfb,qs}
  zzn{m>919:R,A}
  xxq{x>1478:A,x>951:A,bp}
  nd{a>2328:R,m>2496:R,bkd}
  kmj{m>1300:R,m>1275:R,s>1448:A,A}
  lr{m<2554:A,m<3408:A,ss}
  nfk{s>223:A,A}
  cnk{m>624:R,R}
  frf{s<913:A,a<3544:R,a<3622:A,A}
  tz{x<3223:R,a<1468:R,A}
  vtv{s<3876:R,x<2163:R,m<1295:R,R}
  lcb{m<842:xbt,x>2299:br,frg}
  vdq{s<2074:xrm,bzm}
  scm{a<1200:R,x<1749:R,s>2404:R,A}
  mzr{m>385:A,x<3475:A,A}
  vqc{m<262:php,a>656:xn,jtd}
  rz{x<3153:A,x<3348:A,R}
  zsc{x<3691:A,a>399:R,R}
  cg{a<2331:A,x<1750:R,a<2335:R,R}
  gl{a<491:R,R}
  bt{a>2823:R,m<1086:zbx,s>672:A,zv}
  tdn{a<1090:R,x>2860:R,R}
  nvj{a<290:hj,x<1706:mb,x>2799:qp,mpk}
  zbp{x<3094:A,a>475:R,A}
  bhj{x>3618:mhl,jcv}
  bnc{s<1708:R,A}
  qcs{x<2762:ph,dms}
  pm{m>1503:A,a>1376:A,R}
  fdj{s>526:A,A}
  xh{x>2704:R,x<2664:R,m<234:A,A}
  cfr{s>3027:mv,s<2080:A,A}
  fn{s>3574:A,s<3227:A,m<1429:A,R}
  cpj{a>1112:R,x>1367:A,m<2875:R,R}
  jtl{a<574:A,m<2145:A,m<2362:R,R}
  ldg{s<2505:A,x<779:A,s>3011:A,R}
  sh{s<1603:A,mss}
  cjm{m>1834:A,s>2686:R,a<591:A,R}
  ccd{x>2641:qcs,x<2543:fgx,a<2640:nlt,pg}
  kh{a<3379:bt,a<3671:ts,s<749:tfp,xrq}
  jql{m>1883:mkk,m<1054:vzt,x>3377:cx,R}
  qz{x<2698:R,m>1333:A,A}
  smx{a<3375:R,s>3797:A,x>1180:A,R}
  lbr{s<820:cf,m<2258:mjk,s<1236:vb,R}
  mmn{x<1865:A,a>2999:A,A}
  hjv{x<2257:A,A}
  tqd{m>2054:jnf,a>3450:sdl,gn}
  dzz{s>643:A,x>2570:sq,x<2566:db,R}
  lhq{x<672:rng,A}
  hmq{a<3082:A,lnt}
  ttx{x>3141:A,s<807:sk,jmj}
  br{m>922:ng,s<1337:nz,x>3388:hfd,pt}
  cs{m>1202:R,R}
  dkc{a<1761:A,A}
  kd{s<1779:xx,s>2936:hc,rgc}
  gjf{x>3237:A,m<903:R,x>3121:R,R}
  rk{a>1439:A,m<2597:R,A}
  lh{s>722:A,x>2560:A,m>1247:R,A}
  nh{a>1019:rg,m>1058:pns,xlk}
  xcq{x<1158:R,R}
  zrg{x<2592:A,s>950:A,x<2602:A,R}
  mx{m>2571:A,A}
  rf{x>929:nb,m<3429:R,lpz}
  vfx{x<2246:A,m>3399:A,R}
  dtp{x>1209:A,s<786:A,A}
  hmv{x<2394:R,s<2485:A,x>3356:A,R}
  bp{s>3633:A,s<3455:A,a>1379:A,R}
  ds{a<1913:R,a<2320:A,s>957:A,R}
  tk{x>617:cv,R}
  vth{x<3836:R,a>3134:R,s>1332:A,R}
  tj{s<1623:dpx,a>772:dhl,nvj}
  ccx{x>174:A,a>448:A,A}
  td{x<2038:R,A}
  zvx{s<3041:A,s<3189:A,a>1323:A,A}
  tfb{s<2160:R,x<1963:rr,R}
  rbf{a>559:kt,x<2136:A,a<388:nl,gl}
  jlq{s<2838:kz,qdr}
  ndq{m>2424:R,R}
  cb{a<2316:R,s<881:R,R}
  mpk{m>2581:kp,s>2607:rbf,x>2113:dd,tfb}
  vxf{s>868:gpz,A}
  vds{s<2594:R,A}
  vhj{a<2204:R,m<2148:R,xrl}
  lz{m<1334:vtv,a>393:R,dxk}
  ddj{a<3548:bs,R}
  rs{s<601:A,s>970:R,R}
  ffj{a<3344:R,pbj}
  bn{s<412:A,x>1160:A,R}
  slj{a<3510:A,m>1778:R,m<946:R,A}
  hfd{a<948:R,m<874:R,m>894:R,A}
  qt{x<2626:tqd,kmg}
  zbj{s>2639:A,a>3059:A,m>1466:R,R}
  qbt{a>1776:R,A}
  mjk{a>2432:R,R}
  xbm{m>627:gjf,cl}
  nlc{a<359:A,s<3516:A,a<635:A,R}
  hkk{m<1536:tql,vlf}
  jzv{s<679:A,R}
  jr{s>393:R,A}
  bk{m>235:R,x>547:A,x<364:A,A}
  zc{x<1883:A,nm}
  grz{m>1318:R,x>3218:A,s>3246:A,R}
  kpg{s<3101:A,m<401:A,A}
  ccf{s>2353:hsh,x>2883:A,m>1352:R,A}
  qj{s>502:hhf,bm}
  tck{x<2393:A,x<3056:R,x<3398:R,R}
  hcc{m>1608:cz,a<3455:bg,tzx}
  hq{x<2655:sbk,a<541:rsp,vqc}
  xrm{a<1744:gtg,cjp}
  tf{x<2416:rtk,a>1096:tzb,xj}
  fm{s>2470:A,R}
  tgh{s<2636:fnb,dpj}
  tq{s<3145:A,m<1384:R,s>3432:A,R}
  mhz{m<469:A,m>559:A,A}
  kll{x>3349:A,x>3316:R,R}
  xm{x<3034:flt,m<1178:xhn,ccj}
  tfp{a>3880:A,m>1087:R,R}
  gxd{a<3511:R,A}
  pb{m>1574:A,R}
  vrq{s>2608:R,m<3487:xk,ds}
  jbf{a<98:A,R}
  cqn{a>2101:mng,s<2309:mz,x>3124:A,R}
  dr{m<3795:R,R}
  npr{s>3057:R,m<1236:R,A}
  nnl{a>1480:A,x>2353:tz,jl}
  xsk{s>2235:dq,m>219:xpd,knr}
  ht{a<2075:sbl,a<2138:lzg,a>2200:R,A}
  gkf{m>996:tdn,s>3147:fvn,m<368:tqj,fb}
  nq{a>3480:lc,x<2592:zbj,A}
  dh{x>1370:cdg,x>711:A,mkn}
  qd{a>577:A,a>492:A,A}
  kcl{x>3425:A,s>1976:A,a<1039:R,A}
  dcm{m<3716:R,x<3805:A,m<3818:R,A}
  lgs{s>2973:A,x>3781:lnm,R}
  ql{m>2399:A,m<2068:R,a<467:A,R}
  mph{a<355:pv,x<1165:A,m<1333:qd,vt}
  cgl{s>2388:R,R}
  pcc{a>895:R,m>1533:R,a>886:R,A}
  gvp{m>1505:R,A}
  cz{m<2884:tbg,m>3388:xlh,s>1779:sb,vxf}
  rt{x<691:A,a>415:A,a<385:R,R}
  bj{s<2748:R,fn}
  thr{s<886:tzl,m>1361:A,s>1294:kmj,xcq}
  rtc{x>3835:R,s>1256:R,s<941:R,A}
  pxs{x<2435:A,x<3468:R,R}
  mhl{a>3212:lgs,a>2716:pj,vl}
  bz{x>1304:A,s<2636:A,x>1108:A,A}
  hp{x>2297:lkv,m<1432:thr,rhd}
  sxj{s<1191:A,m<995:A,R}
  sc{a>1338:td,a>1316:A,xb}
  vlt{a<1354:A,a>1431:R,hmv}
  zj{m<1624:A,A}
  tx{a>2067:tpx,x<1844:R,A}
  mjx{x<3281:R,A}
  lp{x>353:A,R}
  lzc{m<1312:R,R}
  gg{x>3173:R,a>292:A,A}
  xz{a>3178:A,m>3621:R,m>3395:R,R}
  jg{x>3346:R,a>217:R,x<2889:R,A}
  qn{m>3410:A,R}
  nlt{m>1403:gf,a<2010:zxh,tr}
  mb{a<543:mx,a<639:fkd,m<2822:thx,rf}
  ltr{x<2119:R,m<3463:R,A}
  rmm{m<2139:A,a<3494:A,a<3731:cqg,zrv}
  nk{a>884:A,s<1738:R,dcc}
  lc{a<3661:A,R}
  xxh{x<2703:R,a<2448:A,a<3350:bnc,thg}
  pn{x<2447:mrd,lf}
  thg{x<2733:R,m<1524:A,A}
  hf{x>1514:A,m<2956:R,A}
  xf{m<3344:A,s>1253:A,gg}
  qfp{a>968:R,x<2674:R,bl}
  kb{a>1434:jv,s<1448:A,A}
  cjh{x>2808:A,m<1038:A,s>1150:A,R}
  fc{a>2070:A,a>1995:A,R}
  qv{m<2890:vfk,m>3532:pf,gjv}
  bcn{s<1726:R,s>1802:A,R}
  jz{s<2631:R,x>1955:rzn,nlc}
  dt{s>1463:R,s<1331:A,R}
  cdg{a<913:A,a>1021:A,s>2497:A,A}
  mng{a<2169:R,s>2274:A,s>2229:R,A}
  ldv{x>1343:A,A}
  zd{m<3112:tp,m>3560:bb,a<3254:R,R}
  xrq{a>3853:rtc,qxq}
  fz{a<1442:A,R}
  rhd{s>772:pb,bn}
  ljn{m>1248:R,s<1893:R,x>584:R,R}
  rkz{m<865:krt,ppf}
  cm{x>1225:R,a>3445:A,A}
  tjj{m<617:R,x>3505:R,A}
  bb{x<3567:A,s>432:A,R}
  sv{a<2379:rcq,hcc}
  qxg{m<294:nc,R}
  shc{s>3452:A,s>2950:R,R}
  tpx{m>2342:A,a>2113:R,A}
  dsb{a<884:xv,bz}
  vlf{s>2815:R,x>1435:ndg,s<2189:R,zj}
  lb{m<3649:R,m>3837:R,R}
  fx{s>505:R,m<869:A,a<3879:A,A}
  sbk{s<1876:gt,x>974:jz,nsj}
  sdl{s>2011:R,s>767:R,m>945:R,A}
  zm{a<357:zc,s<566:bzl,kl}
  xn{m>443:R,x>3234:A,A}
  pt{x<3025:R,a<942:A,A}
  lq{s<374:nfk,a>2334:bf,A}
  zmg{x>2467:kf,lbr}
  zz{m<1485:A,a<443:A,x>3339:R,R}
  qdr{m>1122:A,a>2278:A,m<1010:A,R}
  sl{s>1812:R,A}
  nb{m<3276:A,s>2869:A,a<703:A,A}
  xhn{s>3512:R,x<3674:A,m>1085:A,R}
  kl{m>2779:ltr,jtl}
  rgz{s<2498:qld,a>1762:ndq,dm}
  lrm{x>3408:R,m>459:A,A}
  bm{s>264:R,m>1361:pfl,cs}
  mzb{a>2481:xst,m<451:xh,R}
  kr{m>767:R,s>3283:R,m<405:R,R}
  vjz{a<2296:ktn,a>2306:R,A}
  sb{s<3250:zsz,s>3663:smx,s<3441:R,lzq}
  mp{s<3301:tqh,a>1113:xxq,m<2641:zvm,ntr}
  trs{a<653:R,R}
  gf{m>2532:vrq,tcg}
  hj{a>185:hf,jbf}
  mbh{x>339:R,s>2514:A,x>141:R,A}
  php{x<3535:R,gcn}
  vb{s<1056:R,m>3057:A,R}
  xxn{a>2747:A,x>3285:A,R}
  zvm{s>3608:R,a>935:ck,R}
  sq{m>687:R,x<2575:R,A}
  dts{s>1253:R,qzk}
  dzx{x>1183:mmn,R}
  jd{x>2479:sg,a>1892:A,m<1398:jjj,A}
  xbt{s<1984:R,m<606:R,R}
  rg{s<1355:rkz,a<1114:fg,mn}
  ntr{m>3393:kj,R}
  hn{x<2980:A,s>1751:A,m>3438:R,A}
  jtd{s>2616:shc,s>1730:R,A}
  dpx{a>700:qv,s<987:zm,x<1899:qr,dc}
  fh{x<3012:R,m<2501:R,A}
  mss{x>1427:R,x<878:A,x<1238:R,R}
  vrl{s<1255:A,x<1406:R,m<2393:R,dt}
  dc{m<2846:ldt,x>2708:xf,s>1203:rb,zpn}
  dkn{m<2408:A,A}
  zgp{x<3783:A,R}
  jjj{m<730:A,m<993:R,m>1187:R,R}
  jpv{m<352:A,s<2840:R,R}
  nrm{s<1204:R,m>1053:A,x<1370:R,R}
  jl{a>1466:R,s<2978:A,s<3574:A,A}
  qs{a>1212:rql,x>1733:nx,zp}
  dld{s<1844:gnb,x<2567:rmm,nq}
  zpn{m<3484:hjv,s<1062:dr,A}
  btg{s>3108:A,s>2539:A,m<3011:A,A}
  kf{x<2517:A,m>1529:R,m<521:mnr,sxj}
  kbs{s>517:R,x<2719:A,R}
  zdc{x>2393:A,R}
  jtj{m>1906:A,x>2856:xcd,cjh}
  vnf{a<3038:A,R}
  jnf{x<2615:A,A}
  qq{a<1396:A,s>3080:R,s<2849:R,A}
  tqh{a<1232:R,x>1379:vzz,A}
  sg{a>2166:A,a>1779:A,a<1610:A,R}
  jv{s<1306:A,R}
  tr{m<903:hpv,s>2060:jlq,njh}
  lkd{s<758:A,a<1328:A,m>3201:A,A}
  lrp{a>255:R,m<2578:A,m>3230:R,A}
  zk{a>2053:kbn,ttx}
  fhj{s<957:zd,m<3278:bkn,x<3566:vjd,vjn}
  kdl{s<2246:kb,kpg}
  tgc{m<1540:A,m>1626:A,A}
  nzp{s<2142:nf,plz}
  zzv{a>2317:R,s<2737:R,A}
  zg{a>2325:A,a<2285:A,s<354:R,ln}
  ppf{m<1250:rs,xdn}
  bkd{a<2279:A,a>2301:R,s<1610:R,R}
  spz{x<3677:A,a<2115:A,A}
  sp{s>1655:R,a>1855:A,m<2541:R,A}
  ml{s>919:vm,m<1236:fx,a<3800:A,A}
  xlk{m<451:xsk,lcb}
  dpj{s<3528:tc,R}
  mrd{s>2249:R,s>1828:R,A}
  hjs{a<1398:A,A}
  hk{s<683:R,m>3629:A,A}
  dz{a>1392:jvg,x<2212:csb,lnq}
  bq{m>728:xdq,hq}
  fkd{m>2610:A,x>927:R,m>2091:mbh,cjm}
  dsr{a<2858:A,R}
  fq{x>1054:A,x<364:A,R}
  lnm{s>2404:R,A}
  zrv{s>3278:R,R}
  qr{x<1118:gm,m>2820:mzx,vrl}
  vzz{m<2505:R,a<1420:A,s<2966:A,A}
  qrx{x<1584:R,s<2184:qz,pxs}
  dxf{a>2951:R,m>3130:A,R}
  bl{m<1326:A,s>2035:A,x>3337:A,R}
  nm{m>3222:A,x<3043:R,m<2517:R,R}
  dxk{s>3867:A,s<3785:A,R}
  dm{a>1682:R,R}
  lzq{a<3452:R,m>3181:R,x>1400:A,A}
  zn{s<3091:qrx,s>3659:lz,x<2616:mph,sbq}
  nzt{a<1379:A,A}
  hc{m<401:bk,fz}
  ts{m>1546:frf,a<3560:jzv,A}
  fg{s<2660:ks,a<1055:kr,x<1340:tk,gkf}
  jq{a<2933:vh,m<1334:xbm,s<1167:msh,mjx}
  tkp{m>2242:R,R}
  mxs{s<2542:mrm,a>586:trs,zsc}
  pg{x>2607:qt,dld}
  xj{m<2313:R,a<952:A,a>1037:A,R}
  gpz{x>1505:A,x<823:A,m<3111:A,A}
  sk{x>3048:A,R}
  zsz{m<3133:R,A}
  xst{x>2684:A,R}
  vl{s<2780:zgp,s<3405:R,R}
  in{a<1523:js,bh}
  pbj{a>3587:A,R}
  
  {x=555,m=1815,a=230,s=2491}
  {x=1020,m=854,a=3295,s=1367}
  {x=451,m=677,a=39,s=2723}
  {x=3422,m=118,a=259,s=2205}
  {x=142,m=105,a=268,s=1511}
  {x=2031,m=1285,a=174,s=1047}
  {x=3015,m=1547,a=1689,s=1731}
  {x=341,m=3346,a=2147,s=3154}
  {x=169,m=175,a=1057,s=555}
  {x=2576,m=1737,a=266,s=86}
  {x=243,m=712,a=2245,s=2227}
  {x=83,m=933,a=235,s=2365}
  {x=1729,m=562,a=56,s=685}
  {x=818,m=178,a=1283,s=761}
  {x=3160,m=169,a=538,s=2864}
  {x=872,m=603,a=129,s=1919}
  {x=1216,m=11,a=1852,s=763}
  {x=192,m=1169,a=1282,s=405}
  {x=328,m=2149,a=1432,s=2248}
  {x=592,m=136,a=606,s=1321}
  {x=295,m=3404,a=305,s=1527}
  {x=1788,m=2023,a=1312,s=302}
  {x=1590,m=1121,a=371,s=2355}
  {x=809,m=66,a=30,s=1947}
  {x=1557,m=81,a=46,s=996}
  {x=225,m=504,a=870,s=461}
  {x=1522,m=3527,a=1354,s=3346}
  {x=545,m=73,a=2550,s=1649}
  {x=265,m=2752,a=5,s=1095}
  {x=2055,m=834,a=571,s=132}
  {x=638,m=698,a=819,s=1302}
  {x=2384,m=3012,a=2719,s=52}
  {x=82,m=2819,a=1637,s=1671}
  {x=92,m=1015,a=660,s=1089}
  {x=2895,m=52,a=3441,s=204}
  {x=1519,m=544,a=603,s=278}
  {x=122,m=8,a=1633,s=641}
  {x=127,m=3043,a=2786,s=1655}
  {x=1642,m=1203,a=1673,s=1819}
  {x=776,m=816,a=2033,s=1279}
  {x=946,m=3354,a=205,s=517}
  {x=2519,m=1004,a=1153,s=474}
  {x=851,m=734,a=1418,s=2567}
  {x=272,m=1175,a=262,s=834}
  {x=255,m=762,a=1837,s=1837}
  {x=192,m=1068,a=313,s=613}
  {x=135,m=1262,a=1737,s=361}
  {x=234,m=254,a=167,s=1237}
  {x=629,m=683,a=1046,s=740}
  {x=1,m=196,a=672,s=1}
  {x=686,m=1105,a=379,s=1611}
  {x=2933,m=1953,a=79,s=2065}
  {x=92,m=77,a=61,s=2122}
  {x=1362,m=166,a=365,s=360}
  {x=1086,m=1226,a=1202,s=1228}
  {x=20,m=325,a=73,s=352}
  {x=430,m=75,a=2045,s=1373}
  {x=228,m=2602,a=1338,s=611}
  {x=744,m=2034,a=1534,s=509}
  {x=2114,m=729,a=1677,s=1056}
  {x=1153,m=493,a=1322,s=106}
  {x=2747,m=1458,a=1918,s=461}
  {x=110,m=676,a=1418,s=491}
  {x=992,m=2309,a=202,s=2577}
  {x=1058,m=620,a=2983,s=1393}
  {x=1153,m=1558,a=296,s=258}
  {x=1902,m=568,a=238,s=29}
  {x=942,m=450,a=1234,s=1494}
  {x=762,m=514,a=166,s=329}
  {x=160,m=8,a=493,s=76}
  {x=1399,m=3267,a=204,s=266}
  {x=791,m=1706,a=3163,s=2500}
  {x=1715,m=1313,a=483,s=165}
  {x=393,m=2508,a=1666,s=44}
  {x=628,m=568,a=176,s=57}
  {x=324,m=1454,a=2848,s=1810}
  {x=784,m=1366,a=275,s=378}
  {x=651,m=1676,a=13,s=1959}
  {x=1315,m=465,a=205,s=1325}
  {x=257,m=950,a=800,s=614}
  {x=351,m=463,a=107,s=259}
  {x=297,m=145,a=567,s=2980}
  {x=192,m=137,a=2446,s=559}
  {x=168,m=974,a=1212,s=761}
  {x=2236,m=1137,a=934,s=1312}
  {x=1532,m=251,a=194,s=948}
  {x=317,m=192,a=941,s=2403}
  {x=1099,m=1087,a=400,s=350}
  {x=2008,m=26,a=3164,s=3440}
  {x=558,m=1879,a=3121,s=264}
  {x=2836,m=236,a=12,s=533}
  {x=770,m=165,a=1623,s=2282}
  {x=845,m=396,a=162,s=1934}
  {x=301,m=235,a=1202,s=4}
  {x=1843,m=1928,a=29,s=216}
  {x=2428,m=48,a=159,s=3097}
  {x=2603,m=169,a=553,s=637}
  {x=263,m=1431,a=59,s=1568}
  {x=350,m=3589,a=1502,s=401}
  {x=2686,m=1873,a=944,s=608}
  {x=833,m=1364,a=583,s=1}
  {x=815,m=2658,a=522,s=3811}
  {x=256,m=379,a=969,s=931}
  {x=3117,m=9,a=722,s=2281}
  {x=54,m=154,a=146,s=2411}
  {x=516,m=2044,a=1979,s=394}
  {x=222,m=2932,a=509,s=884}
  {x=1055,m=1020,a=139,s=2389}
  {x=1397,m=136,a=2639,s=1744}
  {x=150,m=1380,a=1538,s=299}
  {x=1087,m=29,a=620,s=48}
  {x=384,m=1315,a=1149,s=2158}
  {x=203,m=1426,a=898,s=910}
  {x=374,m=949,a=90,s=1590}
  {x=54,m=535,a=1323,s=277}
  {x=1290,m=221,a=33,s=824}
  {x=513,m=1852,a=2405,s=746}
  {x=1921,m=2065,a=2462,s=471}
  {x=276,m=3118,a=87,s=575}
  {x=1350,m=1019,a=114,s=1185}
  {x=108,m=74,a=1786,s=845}
  {x=344,m=947,a=383,s=525}
  {x=1564,m=1728,a=241,s=144}
  {x=3,m=2100,a=153,s=433}
  {x=669,m=20,a=327,s=2413}
  {x=1515,m=2689,a=194,s=497}
  {x=423,m=2640,a=408,s=1281}
  {x=3182,m=1187,a=3006,s=1496}
  {x=1035,m=206,a=1206,s=70}
  {x=627,m=2510,a=993,s=718}
  {x=1118,m=1333,a=167,s=2034}
  {x=1440,m=2179,a=501,s=3306}
  {x=3032,m=520,a=1689,s=2348}
  {x=1327,m=205,a=193,s=939}
  {x=1695,m=1809,a=639,s=569}
  {x=153,m=560,a=220,s=25}
  {x=1009,m=134,a=749,s=708}
  {x=80,m=237,a=1877,s=208}
  {x=319,m=1275,a=419,s=966}
  {x=638,m=3294,a=1649,s=389}
  {x=1234,m=1931,a=658,s=5}
  {x=392,m=343,a=1342,s=1313}
  {x=138,m=599,a=1715,s=440}
  {x=1016,m=340,a=466,s=461}
  {x=1014,m=2503,a=325,s=270}
  {x=3044,m=330,a=719,s=1652}
  {x=1109,m=411,a=864,s=1156}
  {x=394,m=1978,a=1150,s=1879}
  {x=40,m=1401,a=2222,s=606}
  {x=188,m=1198,a=40,s=3552}
  {x=357,m=466,a=4,s=1144}
  {x=2,m=443,a=1263,s=1126}
  {x=1113,m=1334,a=771,s=170}
  {x=2403,m=128,a=480,s=1454}
  {x=626,m=1534,a=35,s=76}
  {x=480,m=985,a=166,s=1034}
  {x=449,m=2606,a=861,s=985}
  {x=1682,m=2057,a=1158,s=207}
  {x=11,m=446,a=795,s=464}
  {x=417,m=963,a=400,s=93}
  {x=1380,m=2953,a=258,s=389}
  {x=2117,m=1346,a=21,s=135}
  {x=891,m=913,a=319,s=1175}
  {x=1353,m=460,a=56,s=128}
  {x=1058,m=468,a=1500,s=597}
  {x=1515,m=2049,a=1770,s=268}
  {x=237,m=1009,a=1168,s=2820}
  {x=1012,m=37,a=159,s=71}
  {x=131,m=2044,a=530,s=1114}
  {x=175,m=1567,a=5,s=781}
  {x=187,m=1472,a=336,s=1436}
  {x=309,m=78,a=639,s=3}
  {x=241,m=2764,a=3918,s=396}
  {x=341,m=651,a=185,s=258}
  {x=39,m=19,a=96,s=217}
  {x=3305,m=1274,a=9,s=2140}
  {x=1365,m=457,a=381,s=693}
  {x=16,m=124,a=1010,s=254}
  {x=726,m=120,a=1535,s=822}
  {x=1979,m=266,a=223,s=271}
  {x=2127,m=634,a=194,s=1622}
  {x=219,m=660,a=465,s=1592}
  {x=1145,m=2497,a=1282,s=1500}
  {x=1383,m=357,a=1053,s=1632}
  {x=689,m=748,a=97,s=103}
  {x=80,m=13,a=1680,s=2460}
  {x=2266,m=570,a=871,s=1729}
  {x=576,m=780,a=700,s=197}
  {x=1043,m=427,a=488,s=695}
  {x=179,m=865,a=504,s=1932}
  {x=684,m=198,a=10,s=2744}
  {x=754,m=3,a=1583,s=452}
  {x=8,m=1657,a=2036,s=538}
  {x=245,m=229,a=318,s=2451}
  {x=913,m=9,a=495,s=669}
  {x=1393,m=1317,a=2366,s=1241}
  {x=7,m=825,a=2255,s=796}
  {x=376,m=1369,a=164,s=1003}
  {x=1210,m=286,a=3800,s=523}
  {x=23,m=390,a=1715,s=2743}`;

  const inputToUse = realInput;
  const inputLines = inputToUse.split(/\n/);
  // console.log('inputLines',inputLines);
  var workflowsLogged = false;

  const workflows = [];
  const parts = [];

  inputLines.forEach(function(line){
    const cleanLine = line.trim();
    // console.log('cleanLine',cleanLine);

    if( !cleanLine.length ) {
      workflowsLogged = true;
    } else {
      if( workflowsLogged ) {
        // ! - it's a part
        const trimLine = cleanLine.slice(1,cleanLine.length-1);
        // console.log('trimLine',trimLine);
        // partLines.push(trimLine);

        const partStatLines = trimLine.split(',');
        // console.log('partStatLines',partStatLines);
        let statObj = {};
        partStatLines.forEach(function(statLine) {
          const statArr = statLine.split('=');
          // console.log('statArr',statArr);

          statObj = {
            ...statObj,
            [statArr[0]]:statArr[1]
          }
        });

        // console.log('statObj',statObj);
        parts.push(statObj);

      } else {
        // ! - it's a workflow
        // workflowLines.push(cleanLine);
        const workflowArr = cleanLine.split('{');
        const name = workflowArr[0];

        const wfLine = workflowArr[1].slice(0, workflowArr[1].length-1);
        // console.log('wfLine',wfLine);
        
        const rulesArr = wfLine.split(',');

        const wfRules = [];

        // console.log('rules',rules);
        rulesArr.forEach(function(rule){
          // console.log('rule',rule);

          var wf = {};

          if( rule.includes(':') ) {
            const ruleArr = rule.split(':');
            // console.log('ruleArr',ruleArr);
  
            const condition = ruleArr[0];
            
            var condObj = {};
                      
            if( condition.includes('>') || condition.includes('<') ) {
              let conditionName = '';
              let conditionType = '';
              let conditionValue = '';

              if( condition.includes('>') ) {
                conditionType = '>';
                const arr = condition.split('>');
                conditionName = arr[0];
                conditionValue = arr[1];
              } else {
                conditionType = '<';
                const arr = condition.split('<');
                conditionName = arr[0];
                conditionValue = arr[1];
              }

              condObj = {
                conditionName: conditionName,
                type: conditionType,
                value: conditionValue
              }
            }

            // console.log('condObj',condObj);
            const outcome = ruleArr[1];
            // console.log('outcome',outcome);

            wf = {
              condition: condObj,
              outcome: outcome
            }
          } else {
            wf = {
              outcome:rule
            }
          }

          wfRules.push(wf);
        });

        const wfObj = {
          name: name,
          rules: wfRules
        }
        workflows.push(wfObj);
      }
    }


  });

  console.log('workflows',workflows);
  console.log('parts',parts);

  const acceptedParts = [];
  parts.forEach(function(part){
    // console.log('---- NEW PART');
    console.log(part);
    var inLimbo = true;
    var currentWorkflowName = 'in';
    const passedThru = [];

    while( inLimbo ) {
      // console.log('currentWorkflowName',currentWorkflowName);
      passedThru.push(currentWorkflowName);
      // find workflow with current name
      const currentWorkflow = Object.values(workflows).find((obj) => {
        return obj.name === currentWorkflowName
      });
      // console.log('currentWorkflow',currentWorkflow);
      const rules = currentWorkflow.rules;
      for( var i=0; i<rules.length; i++ ) {
        const rule = rules[i];
        console.log('NEW rule',rule);
        const condition = rule.condition;
        // console.log('condition',condition);
        if( condition ) {
          const conditionName = condition.conditionName;
          const ruleType = condition.type;
          console.log('ruleType',ruleType);
          const ruleVal = parseFloat(condition.value);
          console.log('ruleVal',ruleVal);
          
          const partValue = parseFloat(part[conditionName]);
          console.log('partValue',partValue);

          if( ruleType === '>' ) {
            if( partValue > ruleVal ) {
              const outcome = rule.outcome;
              if( outcome === 'R' ) {
                console.log('REJECTED');
                inLimbo = false;
                break;
              } else if( outcome === 'A' ) {
                console.log('ACCEPTED');
                acceptedParts.push(part);
                inLimbo = false;
                break;
              } else {
                currentWorkflowName = outcome;
                break;
              }
            }
          } else if( ruleType === '<' ) {
            if( partValue < ruleVal ) {
              const outcome = rule.outcome;

              if( outcome === 'R' ) {
                console.log('REJECTED');
                inLimbo = false;
                break;
              } else if( outcome === 'A' ) {
                console.log('ACCEPTED');
                acceptedParts.push(part);
                inLimbo = false;
                break;
              } else {
                currentWorkflowName = outcome;
                break;
              }
            }
          }
        } else {
          const outcome = rule.outcome;
          // console.log('outcome', outcome);
          if( outcome === 'R' ) {
            inLimbo = false;
            break;
          } else if( outcome === 'A' ) {
            acceptedParts.push(part);
            inLimbo = false;
            break;
          } else {
            currentWorkflowName = outcome;
            break;
          }
        }
      }

    }

    console.log('passedThru',passedThru);
  });

  console.log('acceptedParts',acceptedParts);

  var ratingTotal = 0;
  acceptedParts.forEach(function(part) {
    var partTotal = 0;

    for( const [key, value] of Object.entries(part) ) {
      const val = parseFloat(value);
      partTotal = partTotal + val;
    }

    // console.log('partTotal', partTotal);
    ratingTotal = ratingTotal + partTotal;

  }); 

  console.log('ratingTotal',ratingTotal);

  const codeToShow = `
  const inputToUse = realInput;
  const inputLines = inputToUse.split(/\\n/);
  // console.log('inputLines',inputLines);
  var workflowsLogged = false;

  const workflows = [];
  const parts = [];

  inputLines.forEach(function(line){
    const cleanLine = line.trim();
    // console.log('cleanLine',cleanLine);

    if( !cleanLine.length ) {
      workflowsLogged = true;
    } else {
      if( workflowsLogged ) {
        // ! - it's a part
        const trimLine = cleanLine.slice(1,cleanLine.length-1);
        // console.log('trimLine',trimLine);
        // partLines.push(trimLine);

        const partStatLines = trimLine.split(',');
        // console.log('partStatLines',partStatLines);
        let statObj = {};
        partStatLines.forEach(function(statLine) {
          const statArr = statLine.split('=');
          // console.log('statArr',statArr);

          statObj = {
            ...statObj,
            [statArr[0]]:statArr[1]
          }
        });

        // console.log('statObj',statObj);
        parts.push(statObj);

      } else {
        // ! - it's a workflow
        // workflowLines.push(cleanLine);
        const workflowArr = cleanLine.split('{');
        const name = workflowArr[0];

        const wfLine = workflowArr[1].slice(0, workflowArr[1].length-1);
        // console.log('wfLine',wfLine);
        
        const rulesArr = wfLine.split(',');

        const wfRules = [];

        // console.log('rules',rules);
        rulesArr.forEach(function(rule){
          // console.log('rule',rule);

          var wf = {};

          if( rule.includes(':') ) {
            const ruleArr = rule.split(':');
            // console.log('ruleArr',ruleArr);
  
            const condition = ruleArr[0];
            
            var condObj = {};
                      
            if( condition.includes('>') || condition.includes('<') ) {
              let conditionName = '';
              let conditionType = '';
              let conditionValue = '';

              if( condition.includes('>') ) {
                conditionType = '>';
                const arr = condition.split('>');
                conditionName = arr[0];
                conditionValue = arr[1];
              } else {
                conditionType = '<';
                const arr = condition.split('<');
                conditionName = arr[0];
                conditionValue = arr[1];
              }

              condObj = {
                conditionName: conditionName,
                type: conditionType,
                value: conditionValue
              }
            }

            // console.log('condObj',condObj);
            const outcome = ruleArr[1];
            // console.log('outcome',outcome);

            wf = {
              condition: condObj,
              outcome: outcome
            }
          } else {
            wf = {
              outcome:rule
            }
          }

          wfRules.push(wf);
        });

        const wfObj = {
          name: name,
          rules: wfRules
        }
        workflows.push(wfObj);
      }
    }


  });

  console.log('workflows',workflows);
  console.log('parts',parts);

  const acceptedParts = [];
  parts.forEach(function(part){
    // console.log('---- NEW PART');
    console.log(part);
    var inLimbo = true;
    var currentWorkflowName = 'in';
    const passedThru = [];

    while( inLimbo ) {
      // console.log('currentWorkflowName',currentWorkflowName);
      passedThru.push(currentWorkflowName);
      // find workflow with current name
      const currentWorkflow = Object.values(workflows).find((obj) => {
        return obj.name === currentWorkflowName
      });
      // console.log('currentWorkflow',currentWorkflow);
      const rules = currentWorkflow.rules;
      for( var i=0; i<rules.length; i++ ) {
        const rule = rules[i];
        console.log('NEW rule',rule);
        const condition = rule.condition;
        // console.log('condition',condition);
        if( condition ) {
          const conditionName = condition.conditionName;
          const ruleType = condition.type;
          console.log('ruleType',ruleType);
          const ruleVal = parseFloat(condition.value);
          console.log('ruleVal',ruleVal);
          
          const partValue = parseFloat(part[conditionName]);
          console.log('partValue',partValue);

          if( ruleType === '>' ) {
            if( partValue > ruleVal ) {
              const outcome = rule.outcome;
              if( outcome === 'R' ) {
                console.log('REJECTED');
                inLimbo = false;
                break;
              } else if( outcome === 'A' ) {
                console.log('ACCEPTED');
                acceptedParts.push(part);
                inLimbo = false;
                break;
              } else {
                currentWorkflowName = outcome;
                break;
              }
            }
          } else if( ruleType === '<' ) {
            if( partValue < ruleVal ) {
              const outcome = rule.outcome;

              if( outcome === 'R' ) {
                console.log('REJECTED');
                inLimbo = false;
                break;
              } else if( outcome === 'A' ) {
                console.log('ACCEPTED');
                acceptedParts.push(part);
                inLimbo = false;
                break;
              } else {
                currentWorkflowName = outcome;
                break;
              }
            }
          }
        } else {
          const outcome = rule.outcome;
          // console.log('outcome', outcome);
          if( outcome === 'R' ) {
            inLimbo = false;
            break;
          } else if( outcome === 'A' ) {
            acceptedParts.push(part);
            inLimbo = false;
            break;
          } else {
            currentWorkflowName = outcome;
            break;
          }
        }
      }

    }

    console.log('passedThru',passedThru);
  });

  console.log('acceptedParts',acceptedParts);

  var ratingTotal = 0;
  acceptedParts.forEach(function(part) {
    var partTotal = 0;

    for( const [key, value] of Object.entries(part) ) {
      const val = parseFloat(value);
      partTotal = partTotal + val;
    }

    // console.log('partTotal', partTotal);
    ratingTotal = ratingTotal + partTotal;

  }); 

  console.log('ratingTotal',ratingTotal);`;

  return (
    <main>
      <div>
        <DayHeader
          title='Day 19: Aplenty'
          starCount={1}
          puzzleLink='https://adventofcode.com/2023/day/19'
        />

        <p>I found this quite difficult although have solved part one after quite a while. The problem seemed simple enough but once I got into the details of the code it became quite confusing and muddled, with naming as well. After a long time looking deeply at an aspect of the code it is easy to get hypnotised and confused. It might also be because it is Christmas and people are talking around me. It is a bit difficult to focus, but in general I need to get better at not getting confused with this kind of problem, and start learning about automated testing in the new year.</p>
        
        <CodeBlock 
          codeToShow={codeToShow}
        />

        <Link href="/">All days</Link>
      </div>
    </main>
  )
}