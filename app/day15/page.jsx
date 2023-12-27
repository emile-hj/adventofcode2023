'use client';

import Link from "next/link";

import DayHeader from '../../components/dayHeader/dayHeader.component';
import CodeBlock from '../../components/codeBlock/codeBlock.component';


export default function Page() {
  // reflector dish

  // const testInput = `HASH,other`;
  const testInput = `rn=1,cm-,qp=3,cm=2,qp-,pc=4,ot=9,ab=5,pc-,pc=6,ot=7`;

  const realInput = `ddl=5,fl-,mvgv-,knb-,lxb-,sg=9,kv=7,cmntsd-,ghp=5,jpn=9,np-,lxb=1,ppj-,qdg=6,mlpj=4,qq-,lp-,qjr=6,jpn=4,dfx=3,xhshr-,cqtffb-,msln=1,hg-,mcz=2,vxrsf-,jp=7,dbb=8,rvvssc-,nvn-,kj-,klxt-,sx=7,pv=6,dbb=3,kxp=1,zpxxz-,hpx=1,txt=7,vf=2,ncfnf-,zxj=3,nfk=6,rnv=6,vl-,hd=9,fdn-,tgvc-,rdk-,sxs-,jfrj-,lk=9,hkd=6,mlpj=4,hrf-,kz-,dhbv=5,kqj=4,jp-,rh=8,mpbnpv=4,pzfh-,pbf=6,vhj=4,cgjvjm=7,ctkf-,rcg=6,br-,bjdqmg-,mbfl-,nvn-,hckzt=5,hvc=6,zqz-,kcmnqf-,nfb=7,dfmp=1,kqj-,dcb=5,bmjm=6,jnf=3,xhshr-,lj-,bbfb=4,md=2,ppln=9,jlk=4,kdrkb-,gn-,nqjj=1,pzfh=9,kb-,rnpfkv=1,zgd-,br=9,hbbkb-,sc=4,zss-,dtnj-,djz-,kjf-,djz=6,fgx=2,lttln=6,rj-,njtg=4,vjvb=3,kmgm=7,pg=7,kls-,pkfrz-,jx-,vf-,xf=4,smph=5,lvp=1,qfghv-,xd-,fvck=6,ppj=8,fjb-,smh=6,cgxfnp-,zxj=8,bsj=2,ng-,xml=1,bpzqm=6,gt=8,nd=7,hkd=8,nmn-,qn=7,kdrkb=5,nfb=2,cnxj-,fl-,smh-,qn-,ljz=2,nzjfh-,rjjn-,nzjfh-,zfx=1,qqr=4,smph-,ppj-,xf=3,dsfz=5,ghgj-,mbp-,bcf-,fksl=3,ldrm=5,rskgt-,pzhj=4,zbbzmp=9,lcfh=3,mbfl=1,zrvg-,sr=9,hpx=9,gxd=9,tnzx=8,rrmrl=3,hnfv-,qd-,ch=6,rng-,tt-,hg-,gsspd-,vl=8,pbt=7,dj=9,nmn=3,lc=9,hn=7,jfcf=4,tnzx-,dqbc-,gz=5,bt=3,jxrn-,sz-,pcf-,bcf=5,kxp=9,qtf=8,rjjn=4,ld=9,hgnr-,rf-,ndzhk=5,mpbnpv=9,tnzx=7,kszx=3,hkd=5,hgnr=9,hmt-,txt-,spn=9,nf=1,sv-,mqjt-,ml=7,ql=7,fkrq=9,scn=6,vfx=4,zx=7,gg=2,gdq-,mb-,fslmcb-,mb-,pzfh=9,rt=1,dz=6,ltcx=5,gxd=4,hv-,xgkp=9,lzn=6,qpn-,spn=6,xtbbr-,cbrq-,cmxt-,dfmp-,gq-,fslmcb=4,nn-,hrghb-,pzfh-,hpv=7,nv-,pzhj-,bg-,xml-,qd=2,tlcmq=5,ks=8,dm-,mvgv-,dzlr=2,pzfh=6,kqj-,kxp=2,djz=2,qtf=9,dvgd=4,vxrsf-,dqrc-,rnv-,rrmrl=1,lmz=7,tnzx-,kscs-,jd-,cd-,sr-,bjdqmg=8,tl-,mcz-,rxp=8,gsdb-,cxzp-,fvc-,tznh-,kmr-,mxkr-,tlp-,hqj-,xjl-,vxrsf-,rml-,fc-,htd=6,ql-,msln-,pv-,gt=6,rgpbr=4,bmjm=1,qfghv-,qd=5,jg-,jnf=2,ltdc=9,mkp-,rcg-,mlpj=5,hp=5,hl-,tls-,fgx=4,prkg=9,qm-,pspgr-,flsb=3,ppln-,pzfh=5,sg-,lks-,dz-,nmk-,pb-,ptg-,bktbf=3,rnv-,fcj=7,hrf-,cnxj=8,bsj-,bnpd=6,mbp-,hcr=7,jkk-,lj=8,ng=9,klpjt-,mkp-,zx=5,lv-,qdg-,bbfb=2,zbbzmp-,xfp=3,jfcf-,pk-,pcf-,lc=6,lv-,sjt=6,pm-,dz-,scn=4,mqjt-,snl-,gf=4,hl=5,dmzgm=1,tr=1,pcf=9,sg-,hb=2,ltcx-,vlbk=8,nm=9,bs-,hn=3,xb=3,qml=5,hnpt-,htd=7,mmz=1,dqrc-,kszx=7,fh-,xmf=5,nfb=4,hmt=1,tgvc=7,xbjs-,qczrx=6,ltcx-,mm=2,xcc-,cbrq=3,xht-,zmnfx-,xcbz-,mzz-,vxrsf-,dhbv-,dhbv=9,lxb-,xn=6,ng=1,svcp-,qn=1,hqnszx=7,vnj-,qmvk-,tznh-,rqs-,pspz=1,kh=6,cxzp-,ldd-,zrvg-,lvp=7,kv-,fq=1,ztq-,tzj=3,gsq=9,jss=4,ct-,gq=4,snl-,nz=5,mlk=4,gsdb=6,nq-,hpx=3,vtn=4,llgl=9,fhz=3,gt=9,cggq=8,lp=6,mblhs=7,dqpq-,ckkrt=3,rxp=9,bpzqm-,dqbc-,dtnj-,vl=6,rv-,kh-,fhs=8,cgxfnp-,qfghv-,rf-,rvxv-,tgvc-,fq=3,jks=9,sdqx=4,lks-,xgkp=9,tlp-,jxb-,lks-,lzh=3,fgx-,tr=3,nx-,gdd=9,kszx-,hl-,ktfj-,sgf=9,jfcf-,gpz=5,xmnjl-,hqnszx=5,pt=2,gt=9,rb-,cggq-,scn-,phxt=6,brtp-,prkssf-,rskmm-,tfmlp=8,pspz-,dvgd=9,lk=3,fhs=1,rh=4,vfx=4,spn=1,dm-,gbq=8,kcmnqf=4,nhq-,qqjh-,rmv=2,dh-,pbt-,vjbmp=9,hckzt=3,mkp=5,fhz-,pdl=5,fvck-,rmz-,snl-,nv-,gcz-,pdl-,dqjngp-,pb-,bcf=2,lvp=9,bjdqmg-,xz-,bdql-,mg=1,dh=5,gz=3,xd=3,bk=1,vlbk=7,zbbzmp=1,cggq-,ql-,mlk-,md-,hcr-,mcz=7,dcb-,xgkp-,hfp=1,rlc=7,bb=5,pv=1,nzr-,tf-,bcjtr=2,mlk-,rmv=6,kscs-,bnd=3,kcmnqf=1,qczrx=4,cbrq=8,mqjt-,rqs-,zpn-,hnpt=9,kqj=7,thb-,nf-,nst-,cggq=5,kqx-,hcx-,klpjt-,srsdk=8,lj-,rkg=4,sq=9,xmnjl=9,smph-,ts=9,dz-,lc-,nfb-,ptg-,bmdg-,sg-,pm-,ls-,fcj-,fjdk-,fs=1,qkqc-,nfk=5,kdrkb=2,nq=4,sb=1,bcjtr=8,bmdg=8,pdl=8,jpn=7,tfmlp=9,ht-,lgvzd=5,hqnszx=9,cgjvjm=7,xd-,jlk=9,pnthr-,fqj=3,rxp=8,sg-,svcp-,svc=8,dhbv-,rlc-,mqjt=3,mqjt-,ldrm=7,phx=2,sxs-,bl=4,ddl-,mhlmnz=1,bnpd=6,jcbk-,mp=5,rmz-,nn=4,hd=6,qfghv=2,xml=6,rf=8,kz=9,ktfj-,tlcmq-,jsn-,sq-,jnc=8,xf-,pkfrz-,nv=6,ln=2,mkp-,dz=4,pkq-,lbp-,gcz-,lmz=5,htd=9,hrf=3,ml-,xb-,snl-,dxgg=7,sjt-,xtbbr=5,shb-,kscs-,sr=4,qdq=9,nm-,xmnjl=5,ksnx-,nzjfh-,nng=3,ckkrt-,fgfgps-,nst=3,ln=2,hb=5,qpn-,bktbf-,shb=6,gc=9,pbb-,dqrc=7,qkth=9,sz=8,srsdk-,xbvjv=9,ch-,xmf-,msln=2,fjdk-,kj=7,ld=2,lnn=3,lc=7,qkzk-,nst=1,pb=9,ldrm-,th=7,hm=3,ql=1,rh-,xv=7,zgd-,bjdqmg=2,jtbx=5,lzf-,fx=8,xv=9,nqjj=9,fjdk=8,vfx=9,qqr-,ckkrt-,sjt=9,cc=9,brtp=4,rdk=5,dfmp=7,sg-,hmt-,nx=6,svc-,lxb=2,kcs=3,xx-,bn=4,brtp=8,jrl-,cc=7,vl=6,llgl=5,hb-,jnc=8,ng-,fslmcb=2,nvn=6,gxd-,pcf-,rjjn-,lrr=8,sc=9,nmk=7,fcj-,phxt-,gsq-,xhshr=6,bmjm=3,gdq=4,kcs-,xmnjl-,nm=3,hvg-,hvc=8,lrr=3,ppln=5,knb-,rj=7,lczq-,pftqp=7,cxsq-,pdxvn=8,mbfl=7,ld=9,fhs-,rcg-,lczq=6,lxb=5,thb-,kmgm-,zrvg=5,db=3,np=1,pnthr-,xx-,nfb=6,jx-,hkd-,nmn=9,rcjskk=6,hfp=6,zpxxz=6,mcz-,bcpvg=2,rcjskk-,fgfgps-,vhj=2,zh=4,klpjt=7,kxp=6,rb-,nq-,kkdtnq=3,kmr=5,gsq=5,kj-,rmv=6,vfx=2,zjqt=2,nzr-,gv=3,jcbk-,rb=8,svcp-,cdnq=7,njtg-,tznh=9,njtg-,nng=4,zk=9,bhd=3,ppj=5,pb-,ltj-,lks=8,hpp-,lks=8,bjlm-,jfcf=5,bmdg-,mjj=8,nhq=8,vc=9,cxzp=7,th=6,rjq=2,mz-,snl-,dqrc-,mcz=4,bcq-,zbbzmp-,dxxfq=3,thb-,xx-,jpn-,jsl-,hb-,dcb-,tl-,gcz=6,rng-,zblxsk=9,vxsplt-,pg-,hqj=3,jn=5,fvc-,nz-,rnpfkv-,fslmcb-,tf=8,smph-,rf=4,szm=9,kcs=7,vjvb-,mf-,klxt=6,xb-,jnc-,kdrkb=2,rf-,kqj-,qq-,vlbk=2,zqz=6,pv=9,sr=7,jkk-,ghgj=9,pcf=5,zjqt=1,nmxhc=3,lks=4,ctkf=4,th-,fjvp=9,mz=7,rltxrt=5,fqq=6,nzjfh-,gbx=5,pbt-,tnzx=5,shb=6,snnb=2,qfghv=5,jnf=7,hfp=8,pbb-,tq=1,gfp-,tzj-,bdql-,mcz-,mvgv-,lzn=2,ld=6,rmv=7,dzlr-,pftqp-,lvp-,dqrc=9,zcn=1,sgf=5,mcz=5,frz=3,fjvp-,sq-,pt=3,hm=5,rltxrt=6,hpv=4,tznh-,cxzp-,hpv-,sv-,jnf-,jnf-,nv-,dj=5,ztq-,jq-,xvs-,mqjt-,ltcx-,hqnszx=1,kqj-,jsn-,hx-,ld-,tg=8,ln-,xng-,tf-,cmntsd=7,kdrkb=7,nx-,sgf=7,lnn=8,br=9,lrc-,hkd=9,hn-,rlk=4,tznh=1,sprjx-,dvgd=7,hm=8,hfp-,rcjskk=8,jvs-,mzz=9,sg=1,vx-,hbbkb-,cmntsd-,jn=5,kls=9,cxsq-,spn=6,sv-,gnxgnd-,gsq-,bhd-,tt-,rkg=3,cxzp=8,hr=4,qkqc=8,hv-,nng-,tjtdr-,xmf=1,tlp=4,ln-,hgnr-,sb-,rvvssc-,fl=9,kzb=1,kh-,fkrq=8,mz-,pspgr=5,vtc=8,klpjt=6,hpx=4,hv-,ht=7,ppj=7,sprjx-,vjvb=1,rxp=6,fs=6,qczrx-,kszx=9,jn-,jd=5,njtg=5,kkdtnq=9,mlpj=4,dz-,nvn=1,gsspd=4,kxp=1,mz-,rrd-,pq=5,xvs=9,fl-,dxp-,sr-,hnfv-,fh=1,ddl-,ltdc-,kqx-,ffkh-,dqjngp=4,cd-,svc-,tlp=9,nx-,dzlr-,zk=2,hfp=2,fslmcb=7,mmz-,jsn=7,sc=2,jlk-,br=6,ct=5,fqq=9,bktbf-,hqj-,zblxsk-,rlc-,pdxvn-,hn=4,tl-,rn-,qml=8,bbfb=4,fqq-,dh=5,nhq-,hvg=5,vhj-,pzfh=9,ncfnf=4,th-,jfcf-,pv-,rn-,vjvb-,jx-,pdl=6,brtp=6,lvp=6,tg=2,nzjfh=7,dxp-,gc-,vt=7,jp=1,gjs-,cgjvjm=1,nn-,jvs=3,cnxj-,rxp=5,gcz-,rxp-,zc=6,rcg-,gr=5,sz-,thc=5,jks-,bbfb-,cbrq-,kt=8,kqj=4,fc=5,cxsq=8,fcj=3,bjdqmg-,rjjn=4,hg-,mkp-,ks-,fd-,gfp-,mjj=5,ldrm-,xfp-,kdrkb-,pspz=6,vtn=5,pk=1,hbbkb-,bk=5,ffkh-,tf=3,vxsplt-,ng=8,sg-,mm-,mbfl-,dqbc=5,rlk=4,flsb-,nxbjh=5,smh=3,xcbz-,tfg=5,htd=7,tt-,fvck-,bl=1,nx-,dqjngp=1,bk-,hrf=6,jq=4,rmz=5,pjc-,cgxfnp=7,jn-,nq=5,brtp-,kjf=2,vhj-,gt-,rcjskk-,vxsplt=6,pdxvn=9,pcjjb=7,bsj-,cgxfnp-,mblhs=3,qzp-,jnc=9,dxxfq-,xz-,jfrj-,ql-,np=5,hpp-,rskmm-,pk-,gbq-,hnfv=2,kqx-,ld-,smph=2,vxsplt=6,jvc-,gcz-,pnd-,dqrc=9,tsf=9,lv=7,zmnfx=8,rv=8,gjs=1,mbp=5,vbt=4,lj-,hv-,bnpd=4,lrr=5,jxb=8,jnf=2,bmdg=8,pvrk=1,dh=8,lzn=7,njtg=9,thc-,jfrj=4,dvgd-,ddl-,kh-,kb=9,lzf-,rv=1,kmt-,zpxxz=6,ng=6,kb-,gv-,hpv-,lzn-,dxxfq-,njtg-,tsf=5,cxzp-,rxp=9,hk=4,qjr-,kt=8,fjb-,vfx=8,zpxxz=2,kc=6,ltdc=2,kg-,gdq-,pnthr=7,df=9,mcc=9,lbp=8,bjlm-,mh=8,ccs=8,jlk=8,ppln-,prkssf=4,phxt=6,dtnj=4,lgvzd-,jxrn=8,fz=1,xng=2,mbfl=1,pbf=4,flsb-,pg=7,hn=8,xng=2,vjvb=3,ltp=3,tf-,rn=9,klpjt=8,nvn-,pdb-,zh=4,kz=8,nf=4,rnpfkv-,lgvzd-,fs-,phx=1,rvxv=5,mmz=8,klxt-,lv=4,mb=3,mpbnpv=5,vc-,hrf-,bnpd-,nxbjh-,pb=5,phxt=2,shb=5,hb=5,fvc=1,vbt-,ltcx=7,djz=5,ztq-,cggq-,hckzt=7,hk-,tt=8,bhd-,xhmh-,nng-,jcbk=1,gn-,vjbmp-,dqbc=8,dfx=4,ncfnf=4,dhbv=4,ltdc=3,fhz-,bnpd-,kr=4,kxp-,dzlr-,kxp=1,xng-,lbp=7,kqx=7,pjc=4,sx=3,dqjngp-,hcx=4,kc-,rvxv=1,bjlm-,xml-,ncfnf=6,xz=6,btl=6,dqrc=8,rqs=2,lb-,lcfh=6,lxb-,ktfj=2,lzh=8,lnn=3,fjvp=9,nvn-,hbbkb=4,sq-,rv=3,gv=5,vlk-,bsj-,gz=4,nst=1,mpbnpv=3,jkk-,klxt-,bbfb=8,fx-,cmxt=1,nfk=9,gjs-,jp-,fdn=7,mlpj-,smph-,nmk-,srsdk=4,rnv-,kr-,lbp=3,phxt-,xd=6,rjjn-,dxgg-,qqjh=5,jrl-,dfx=6,hkd-,mlpj=6,ckkrt-,sxs-,qmvk=8,fgfgps-,gv-,mxkr=7,kv=9,pcf-,hrf=6,nm=6,szm=3,qn=1,tsf=8,hqj-,lsr-,fq=4,vf=9,vfx=1,rkg-,sgf=5,kkf=2,ls=4,frz=1,smh=3,rcg=8,nmk-,jnc=9,bpzqm-,pjc=7,gsspd-,qczrx=7,zpn-,hfp=5,ltp=1,sx=8,hnfv=2,dq-,xbbhd=3,mblhs=3,pql-,dqrc=3,tt-,bg-,tfmlp-,vbt-,bcf=7,fvc=5,lfcmg=6,hrf-,nm-,mf-,lrc=5,vnj-,rmz=8,dztrj-,rltxrt=8,sjt=9,rv-,lv-,mblhs=7,sx-,lfcmg-,fs-,cgxfnp=4,xcbz=3,lttln=5,xmnjl=3,tf-,zjqt=6,vjbmp-,jxb-,qqjh=4,qml=3,tt=5,xmnjl=8,pdxvn=5,lczq=1,nhj=1,htd-,cgjvjm-,lks-,np-,jn-,qczrx=5,bcq=8,pq=2,jvs-,zx=5,jx=7,ddl-,rjjn-,hfp-,thb-,xvs=4,cnxj=6,dj=5,lczq=8,cz=4,rv=4,xmf=3,tlp-,bjdqmg=4,fgfgps=1,ch-,cggq=6,dqrc-,xgkp=8,xn-,nmn-,cz=6,lrc-,ch-,rjnh-,pg=7,nd=1,kz-,bjdqmg-,bpzqm=2,dtnj=9,zss-,lmz-,nhj-,cgxfnp=7,rltxrt=4,bg=9,pk-,cnxj-,mf=9,pvrk=8,nxbjh-,qkzk-,lbnpzn=1,dq-,bktbf-,ppln-,bcjtr-,mg=4,thb=2,tfpmcd=9,vjvb-,ks=5,rj=8,zbbzmp=6,klxt=1,hmt-,rmz=9,kkf=5,gt-,rdk-,tfpmcd-,sgf-,nfb-,ddl-,mlpj=3,qg=5,th-,zqz=6,kls=8,fgfgps=7,vl-,dhbv-,rvvssc-,tr=9,dztrj=4,sv-,cxsq=1,pspz=1,scn=1,gsdb=9,sbmp-,lzn=5,xmnjl=2,ktfj=7,mlpj=4,cmxt-,xcc=5,sc-,nq-,zmnfx=6,qg=2,zpn-,tsf=5,fslmcb=5,zpxxz=4,xfp-,dh-,xmnjl=6,sg-,kkdtnq=4,kmt=6,sq-,lbnpzn-,hnfv=3,pcf-,qkzk=4,cz-,bbfb=6,dfk-,dqpq=1,lc-,rdk=7,nvn-,hvc-,tg-,ztq-,kcs=1,xbbhd=9,pnd=7,hqnszx-,nf-,kqx-,fhs-,rlc=3,nst-,sbmp-,cggq=1,dbb=6,gv-,pzhj=1,bjlm=4,hkd-,pkfrz-,mmz-,cdnq-,vc=8,pq-,hgnr-,pg-,rmz-,xmnjl=6,tg=4,rj-,rgpbr-,xht=6,nvn=2,jss-,hk-,nn=8,lfcmg-,mh-,rskgt=5,pdb-,fd=6,nmxhc-,rcjskk=9,qd-,tlp=3,sc=2,hpp-,jp-,spn-,ppln=6,nqjj-,zmnfx-,vl=9,pbb=7,pjc=4,sb-,hnfv=1,rf=2,cgxfnp=9,fhz-,vnj-,dxgg-,sb-,jp-,qczrx-,bnd-,gsq-,jfrj-,rn=7,dfk-,cgjvjm-,kscs=1,mg-,zgd=6,ndzhk-,rmz-,pbf-,nn-,vxsplt=9,gq-,sdqx-,rltxrt=6,xn-,hmt-,dqbc-,fx=6,lzn-,ls-,nv-,tjtdr-,chd=1,qml-,lc=8,mcz=8,msln=4,zpxxz-,lj-,tznh-,qj-,xd-,hpp-,mf-,gk-,nhj=5,bl=1,rskgt-,zmnfx=7,flsb-,lzn=3,nst-,mzz-,pftqp=6,jq=6,xtbbr=7,mf-,fh=3,dxgg=3,gv=5,cxzp=1,dfk=8,nhj-,dxxfq-,msln-,lp=4,frz-,dfx=5,fd=3,bs-,nfk=2,nmk-,prkg-,qj=1,lzf-,ckkrt=7,qml-,nvn=4,ptg-,qdg-,chd=6,xcbz-,lbp-,cqtffb-,rf-,dvs-,qfghv-,jxrn-,qfghv=5,tlp-,lczq-,xmnjl-,hmt=2,cbrq=5,cnxj-,zqz-,hfp=5,kmr-,jpn=3,kr=9,lzh=8,dfp-,bhd=1,rng=8,pkfrz-,fgx=2,pcf=4,dztrj-,fd=8,gbq=6,xx=9,spn=1,rml=9,kzb-,hn-,ppln=8,jlk-,ckkrt=3,dfk-,fx-,hqnszx-,xbbhd=7,rml-,gn-,fkrq-,hcr=6,kkdtnq=2,lvp=3,hpv-,nzjfh=1,sv-,rlc=6,rmv=6,svcp=1,gl-,dxp=1,nst=5,zk-,nz=5,lks=4,zfx-,ln=3,qfl-,rcjskk=6,fjb=9,hvc=7,gq=9,bbfb-,qdg-,gq-,smph-,klpjt-,tzj=7,kg-,thb-,qmvk-,bjlm=1,cbrq=8,hn-,fhs=1,hrf=5,sq-,ffkh-,vtn-,fl=5,qd=7,sr=7,hvg=7,cz=2,lsr=7,pspgr=8,bb=4,bk=2,dvs-,gc=3,cd=6,pm-,ldd-,rmv=9,cxzp=5,ljz-,dtnj=1,ldrm=9,lgvzd=2,lc=2,smh=9,lsr=2,hn-,kcs=6,kmgm-,rcg-,kf-,mlpj-,fjvp=7,hpx-,jtbx=7,fslmcb=6,qkzk-,jlk=9,qkth-,lsr=5,vnj-,frz=4,ghp-,rn=2,pvlt-,zpn-,kj-,qtf=7,np=3,hvg=2,df=9,xjl=4,ht=7,svcp=2,tfpmcd-,flsb-,pspgr-,nvn-,hpx-,zk=8,cb-,xmnjl-,dcb=3,hk=4,vnj-,fz=2,ghgj=3,qfq-,fhz=8,dqpq-,lvp=5,hl-,fhs=4,jfcf-,xbvjv=2,jkk-,cb-,nd=9,xjl-,zpn=1,tfpmcd=9,pcjjb-,bjdqmg-,kdrkb=4,frz-,nvt-,qqr-,chd=5,mkkl-,pjc=4,pg=6,mkp=2,jxrn=3,xhmh-,lzf=9,zss-,xd=9,lnn=7,xng=5,nmxhc-,dj-,ctkf-,fqq-,mzz-,cmxt-,kqj-,fgx-,pk-,dmzgm-,dfx-,ztq=2,pt-,ht-,dhbv-,bml=1,qj-,nfk=9,vt=6,xgkp=5,br=2,mlk=6,gjs-,hd=9,sgf=4,qtf-,zcn=7,lzh=3,lzh-,jvc=6,bg-,vc-,ch=2,lzf=7,bktbf=4,vc-,kz=3,dcb-,ks=8,tt=7,cgjvjm=3,xfp=9,djg-,zblxsk-,bml-,mhlmnz=4,snl=7,lxb=5,dqrc-,nx=2,rrd=7,bk-,xd-,jss=2,gn-,ddl=5,pg-,rkg=4,hl=6,vbt=6,mvgv-,tnzx=9,jnf=3,tq=2,lj=4,hpv=5,fc=1,pbb-,jkk=2,hckzt=4,mz-,ml-,np-,kb-,mg-,rvxv=5,jvs=4,txt-,jpn-,pb-,pvrk=5,jq-,ppj=9,gsq=3,hnfv-,zss=5,ztq=5,xn-,gr-,fs=2,rvxv-,rb=6,xv=6,hd-,tlcmq=2,jcbk=2,lzh=8,rskgt=2,bpzqm=2,tjtdr=3,pcf-,pkfrz=5,pbt=8,bnpd-,rj=1,dtnj-,rjnh-,cgxfnp-,qtf-,rrd-,smh-,kmt-,hjfr=3,gz=9,frz-,nst-,frz=4,zrvg=2,lrr-,fqq=4,dh-,lzn=8,jss-,kxp=1,dm=9,dh=1,gl-,jnf=8,fs-,kh=2,db=4,kt-,mbfl=1,bmdg=8,gpz-,pk-,cgxfnp=1,bl-,fkrq=9,tznh=8,bcq-,snnb=2,btl-,lmz=5,sq=1,hr-,tq-,jxrn=7,hg=2,lrc-,nq-,nv=3,bs=2,ct-,jx=5,hpx=8,zcn-,xvs=6,kb-,hm-,hvg=7,qqjh-,lrc-,hk-,fjdk=2,sgf=6,md=9,xjl=2,mkp=4,vlk=4,hp-,kszx=2,cdnq-,rskgt=3,smh=3,sgf-,fjvp=7,nv=9,hvc-,jpn=2,dqrc-,lks=6,bsj-,ltp=3,kjf-,jss=4,jks=5,tfpmcd-,lks-,dmzgm-,fx-,rn-,sbmp-,nng=6,dqjngp=4,xbjs-,bcjtr-,nd-,chd=8,kmt-,cgxfnp-,sb-,mkkl-,svcp=7,pjc=1,lsr=3,cgjvjm=1,mmz-,htd-,dhbv-,bbfb=5,dsfz=4,fkrq=7,mg=3,hvc=6,hd=9,jfrj-,dxp-,lzh=1,gk=3,cd=7,ckkrt-,lc-,gc-,jd-,lv-,lvp=2,zk-,lk=9,rlk-,pzhj=4,ts=6,mpbnpv-,xgkp=1,vlk=8,jrl-,nfb-,fhs-,bl=1,mkp=1,ldrm-,gg-,hd-,rskgt-,xd-,dvs-,nv-,kv=2,snnb=6,vxrsf=2,fkrq=6,klxt=2,jvs-,qmvk-,gpz=7,hb-,nf-,qdg-,xht=9,qn-,hr-,mg=3,xf=6,ptg-,rvxv-,ffkh-,bmdg=7,pm=4,pbf-,nst-,tnzx=5,lsr-,pbf=4,pvlt-,kmt=8,gsq=6,rvxv-,rvxv=5,nqjj-,ltcx-,kscs-,gxd=4,fgx-,vt=3,lzf-,mlpj=3,cz-,hg-,njtg-,rrmrl=3,nvt=3,gsdb-,djz=2,lks=2,bt=1,zk-,dxxfq-,nfb=6,tlcmq-,kcs=6,zc=7,tfmlp-,nx=1,jkk-,gsq=9,hnfv=1,thc-,dtnj-,pnthr=9,jd=1,gn-,pm-,pvlt-,kxp-,dh=3,kmr=1,gbx-,gpz-,zgd-,hk-,jkk=8,nvn-,ch=7,zk-,rrmrl=4,cc-,tf=7,fgx-,ncfnf=4,xcc-,zgd=2,fx=5,hd-,dxgg=5,xb=6,kg-,xcbz-,pg-,mcz-,tfmlp=4,bmjm=4,kt-,fgfgps=9,gn-,kqx=8,lfcmg-,bcjtr-,phxt-,dz=3,pcf=3,dxgg-,xjl=6,bb=2,xbbhd=5,md=8,dh=1,rcg-,tdp-,lj-,hk=7,pql=5,kszx=1,szm=2,rqs=6,jkk=5,lfcmg=8,kj=4,nmxhc-,jnf=5,qjr-,fjb-,jx-,pftqp=9,jnf=6,kcs-,bbfb=3,qqjh=9,rt=8,xmf-,xtbbr-,gbq-,gjs=4,trgp-,hpv=1,dvs=1,bnpd-,tjtdr=7,msln=5,lc=2,pq-,mzz=7,vnj-,nst-,brtp-,jfcf-,mlk=2,pvlt=3,dfx-,xcc=8,pftqp-,br=6,kdrkb=3,mqjt=2,rjjn=8,rltxrt=3,sr=6,jks=5,tfg-,cnxj=7,ktfj-,zrvg=3,ljz-,rnpfkv-,jnf-,tgvc=7,nv=2,jfrj-,zpn-,fhz-,bpzqm-,gdq-,tjtdr=9,ml=8,lbp-,tzj=5,jg-,kkf-,ql=3,lvp=5,hcr=2,gdd=6,jxb=5,bmjm-,qfq=1,pbt=7,cqtffb=2,kkdtnq-,lmz-,fx-,rn=8,cggq=2,fx=7,mxkr-,pg=5,mkkl-,lk-,nst=2,zss=5,hm-,hp=8,pzhj=2,pb-,fkrq-,kb-,lbp-,njtg-,cnxj=9,hv-,htd-,rxp=2,pspgr-,zk=9,hx-,rcg=4,xht=1,jrl-,xbjs=7,cxzp=6,tf-,pdl=1,cnxj-,qczrx-,tl=2,sq=1,dxgg=9,vlk-,hpp=5,ljz=6,gnm-,nbsf=2,nhq-,gdq=6,bnd-,bhd=3,ldrm-,rn=3,bk-,gz=9,tq-,fhz=1,zx=3,nd=3,dhbv=4,pnd=8,ltcx=5,gc-,knb=5,bktbf=1,bn=7,pg-,nxbjh=4,flsb-,ghp=3,gg=9,cxzp-,vtn=2,dxp=5,fx-,cz=1,jg=4,hfp-,sprjx=1,pdb-,jn-,lttln-,lk=6,fkrq=5,tg-,bg=9,hmt=4,rqs-,rvvssc=8,scn=4,sb=8,tfg-,bcpvg-,szm-,xhshr-,ptg-,jfcf=6,qmvk-,nqjj=8,ltp-,sc=6,lk-,fd-,lsr-,dh-,vnj=6,mcc=8,nv=9,zcn-,rlc=9,brtp=5,bk=9,kcmnqf=3,bmdg-,bl-,fcj-,gz-,dhbv-,gc=4,tnzx=4,dvs-,vbt-,mjj=9,vlbk-,kg=3,rm=2,mvgv-,hd-,xv=8,knb=2,ct=1,cmxt=7,cnxj-,hqj-,cbrq=6,zrvg=4,pdl=5,jxrn-,hrghb-,dj=5,jnc=5,hg=6,vfx-,rlk=4,szm-,ld-,dsfz=8,vhj=8,dxxfq=7,nzjfh-,pspz-,ts=1,ccs-,qkqc-,ng=7,rv-,nfk-,lbp-,mcz=8,gk=4,zxj-,vlk=6,xbvjv-,gsq-,ppln-,lczq-,pnd=6,xht=3,kls-,thb-,kqx=7,mp-,hp-,phx=6,nvt-,mz=5,xjl=3,zpn=5,kjf=1,cmntsd=7,rkg-,szm=7,mlpj-,kz=7,prkg-,dqpq-,qj-,qtf=3,xn=7,tl=3,dm-,mhlmnz-,smh-,pspz-,bktbf-,kxp=3,nhq=4,cmntsd=1,zxj=3,kmgm-,rcjskk=8,dxp=4,scn-,db-,nm=4,qkth=6,pdxvn-,jnc=8,pzhj-,lgvzd=6,lp-,fq-,smph=9,mz=6,mh=9,rv=3,mqjt-,bjlm=5,lzh=7,lczq-,jvc-,cxsq=4,zrvg-,bjdqmg-,dz=7,chd=9,xcc-,zpn-,zrcl=7,qmvk-,hgnr-,bnd=2,njtg=7,pkq=3,hbbkb-,hkd=5,lbnpzn-,hrf-,vhj=3,bhd-,tlp=4,dxp=1,cz=7,xmf=3,dtnj-,br-,zgd-,tlp-,vfx-,zgd-,mvgv-,jfcf-,lbnpzn=9,cnxj=6,gjs=1,fd=5,ppj=7,klpjt=9,lfcmg-,rlk-,cgxfnp-,kv-,cgxfnp-,zjqt-,xv=8,bjlm=7,klxt-,qczrx=1,gz=9,txt=7,gf-,rcg-,qfq=3,pv-,dqbc-,hckzt=4,fkrq-,nm=8,hp=3,rm=4,kjf-,tt=5,cnxj-,rskgt=9,prkg=7,rml=8,zh-,tznh-,xmnjl-,nzjfh-,bbfb-,mjj=6,fgfgps=8,qpn=6,bt-,ncfnf=4,ptg-,xns=7,fjb=9,gsspd-,gdd=5,prkg-,xn=1,fqq=7,jcbk-,nst-,dq-,gdq=2,bcf=7,lzf=1,hkd-,pbf-,cd=5,nxbjh-,vtn-,tgvc-,vf=9,rdk=5,bcf-,klxt-,lfcmg=5,nmn=5,dsfz-,smh=5,jfrj-,thb-,gr-,ztq-,bcf=6,kcs-,nfb-,flsb=1,lrr-,hb-,rvxv-,hd=6,dxgg=1,zc-,kmt-,gsdb-,rnv=7,gfp-,df-,rv=7,zcn=2,lgvzd=4,cggq=1,hnfv=9,fksl=3,ghp=4,zpn=2,sx-,djg=2,nfb-,fl-,hb-,kmgm=3,fksl=4,nd=5,jsl=3,qmvk=8,rh-,fjvp-,kzb=8,rcg-,hcr=2,pdb-,tnzx-,hv=5,rdk-,nhq=9,tjtdr=5,kj=8,br-,fq=7,rnpfkv=7,fs-,lc-,bnpd-,zcn-,gl=3,gdd=7,jsn-,bcjtr=9,qtf-,xb-,xd=9,ct-,jxrn-,vxrsf=7,nmn-,jxb=1,dcb=7,cxzp=6,qm=4,bpzqm-,msln-,lbnpzn-,rjq-,mqjt-,bml-,kkdtnq-,lj=6,mb=7,spn-,dq=1,jrl=7,zrcl=2,vx-,rvxv=5,srsdk=2,sbmp-,qg=3,jq=1,smh=7,pdl-,fhs=3,kzb=5,tsf-,spn=2,mb-,shb=3,dh=9,sgf=9,rb=1,kscs-,fq-,thb-,ctkf=9,ct-,zpxxz-,mpbnpv=7,sjt=3,vlk-,rskgt=1,vx-,xcc=4,bdql=4,zbbzmp=9,xx=9,jxb-,mpbnpv-,pspz-,bs-,nfb=3,ng=9,pvrk-,kg-,phx-,qdq-,qd=9,gnxgnd=8,zpxxz=6,brtp=4,gr-,xjl=6,nd=2,rskgt-,gdd-,xtbbr-,ghp=7,pspz=9,ht-,ksnx-,jvs-,tzj-,ppj-,dz-,cgjvjm-,mm=8,jn=9,lvp-,sgf-,rh=1,hpp-,pv-,xcbz=2,dxgg=8,phxt=2,mlk=7,fdn-,mz-,vf-,mcz=3,pbb-,bk=8,bnpd=6,th-,vxrsf=3,mkp-,fdn-,shb-,tfg-,nmn=1,gpz=1,kqx=8,fqq=3,rb-,pvlt-,bpzqm-,hpx-,zqz=3,zgd=6,nbsf-,vc-,ztq-,qqjh=2,lp-,hl=3,xns=4,vc=3,gcz=1,qkzk=1,fq=9,ks-,tq-,nst=5,zmnfx=7,bbfb=1,xhshr=5,dmzgm=8,nvt=6,dm-,hp=5,jd=2,fqq=7,hqnszx-,vl-,hn-,nhj=8,cdnq-,gdq-,cmxt-,pcjjb=6,lgvzd-,qq-,dvgd-,jp-,pg-,kls=4,qmvk=9,jtbx-,dzlr-,llgl=5,pvrk-,lb=7,kf-,zrvg=4,gpz-,pcf-,msln-,jrl=3,htd=7,ptg=5,br=7,kc=2,vnj-,hckzt=7,tls=6,pzhj-,lczq=7,rjjn=6,htd=2,ccs-,hrf-,pb-,hvc=4,ts-,qml-,mpbnpv-,nzjfh=9,lbnpzn-,rcjskk-,ckkrt-,kmr-,rmv-,cxzp-,fjb-,lc=1,dvgd=7,prkg-,nzjfh=6,db-,nmn-,xml=6,mcc=9,dfx-,hrghb-,svcp-,szm-,rt-,hv-,kg=2,mcc-,mbp=7,fvck-,xn=6,md-,bnd=2,xvs=6,cnxj=5,hn-,zcn=2,kjf-,hg=8,bmjm-,sbmp=2,snnb-,ztq-,shb-,hg-,pg=4,nmn-,nhq=9,svcp-,thb=9,gv-,fjvp=2,kqj=6,nx-,vtn-,vt-,lvp-,vlk-,pvrk-,bjdqmg-,sq-,ltkk-,bt-,dfk-,fjb-,jpn=6,dxxfq-,bnpd=6,ptg-,hbbkb=9,jsn-,mqjt-,pvrk-,rj=3,kj=2,hkd-,zmnfx-,fc-,rxp-,cgjvjm-,tfg=9,lvp=7,nqjj=4,lzn-,kmgm-,jg-,bhd-,tq-,gf-,pspgr=4,gbx=4,rml-,kv-,qq-,zcn-,tgvc-,qkzk=1,sprjx-,gxd=3,xmf=6,rlk-,xml=8,xz=3,tf=9,lc=4,rcjskk-,gg-,ch-,vlk=8,lsr-,rlc-,vx=9,tjz-,kn=2,qdq-,zrcl-,ctkf-,mlk-,qfq=1,vc-,ltj=1,xx=2,mcz-,zgd=9,tjz=7,lgvzd=7,thc=8,fcj=2,bcq-,nvn-,tq=8,htd-,tlp-,svc=3,pbt-,vmgnvg-,gv-,lzn=4,bcf=6,trgp=8,tf=9,jtbx-,jpn-,qg-,jnf=5,fvc=1,mjj-,bs=8,nfb=7,kszx-,kmr-,bcpvg=8,gc=1,hbbkb-,zk=7,xbbhd-,srsdk=5,hvc-,zfx-,ln-,rqs-,cggq-,dqjngp=8,sxs=1,th-,dqbc-,qzp-,kxp-,vbt=8,vx-,xbbhd=9,flsb=7,tls=2,lzh-,vmgnvg=2,jss=1,jnf=9,ztq=1,qj-,nmxhc-,kls-,cgxfnp-,bhd=3,fcj-,fvc=5,rm-,dfx=6,gpz-,lttln-,lsr-,jlk=4,ksnx=2,cxzp=3,ckkrt=5,lbnpzn=5,gf=8,gjs=8,smh-,vfx=5,pv=1,xml=2,tznh-,qzp-,vtn=2,nmxhc-,ghgj=2,ncfnf-,nz-,nqjj=4,fdn-,bfmln=5,sx-,xf=5,ztq-,qfl=7,prkg-,ltj=4,dbb-,vmgnvg-,th-,dfmp-,ls-,hcx=6,hp=9,pcjjb=2,cnxj-,gn=9,tnzx=5,jxb-,gbq-,lk=6,zcn-,rmv-,vxsplt=5,hd-,gbx-,vjvb-,hjfr-,ppln-,sq-,vjvb=2,fd=2,mxkr=6,fqq=2,sprjx=6,bdql-,fl=6,pspgr-,tls=7,gc-,fvck-,lp=2,djz=1,xd=7,th-,lbnpzn-,dq=4,ljz-,df-,cqtffb=6,hx-,hrghb=7,gdl=2,ltp-,bktbf-,cmntsd-,cmntsd-,jtbx-,dm-,pt=5,xbjs=4,lj-,md-,jnc=6,tlcmq-,qpn-,snnb=7,pkq-,jd=9,xhshr=8,bcf-,xmnjl-,jfcf-,svc-,jnc-,xtbbr-,zx=5,xcbz=7,kzb-,rjq=2,qd=1,lbp=1,nhq-,kscs-,bjlm-,dfx=9,bl=8,fhz=7,dbb=8,tjtdr-,gbq=5,xx-,lzn-,gnm-,jnc-,pkfrz=3,ln=6,ldd-,ltdc=7,dvs-,fcj=1,lb=8,kjf-,rnpfkv-,gz-,sb-,qdq-,kz=6,hmt=2,mf=8,kg=3,rmv=6,prkssf=6,kz-,vc=1,nq-,bjdqmg=5,tjz-,hcx-,dqrc=6,fjb=1,qdq=9,rqs=5,spn=4,cgxfnp-,xng=5,nq=9,dfmp=5,zfx-,dqpq=1,tg=6,ch=7,qdg-,mf-,mmz=8,kb-,zjqt-,xfp-,pv=7,bg-,gxd-,bjlm-,bsj=8,rb-,mblhs-,sb-,jg=3,cqtffb=8,hl-,lsr=8,tznh-,mcz=1,jq=3,ql=9,cgxfnp=4,njtg-,jnc=6,jsn-,klpjt-,nst-,ddl-,dhbv=3,pvrk=8,kls-,bmjm-,ld-,ls-,gbx=4,jks-,gsdb-,mpbnpv-,mm-,xbvjv=5,kszx=9,rjnh=9,mxkr-,qkth=8,fx=3,kh-,dq=5,pdb-,bbfb-,lzf-,ldd=4,ksnx-,ksnx=4,kcs=6,gv=1,fhs=4,ckkrt=1,hnfv-,xng=4,qq=9,ffkh-,hkd=6,gf=4,pbt=1,gpz-,bhd-,zqz=5,tg=8,ht=3,xbjs-,brtp-,xns=9,gdl=5,dqrc=4,xjl-,gdl=1,dzlr=6,djg-,gq=4,dh=4,zh=5,kt=8,fhs=5,pbt-,hp=3,cggq=5,kzb-,db=7,tr=2,qkzk=4,qdq-,vxsplt=3,fkrq-,mjj=9,rnv=4,zbbzmp-,gk-,mmz-,zx-,vx=9,lrc-,mz-,bfmln=9,bcjtr=7,qdg=4,ddl-,jfrj=4,lnn-,gq=7,hcx=3,pdxvn-,mbfl=6,gdd=9,gkh-,vfx=6,sq=6,svcp-,rcg=8,qn=3,hnpt-,rvvssc=3,zpn=9,hnfv-,xf-,gq=3,tg-,mcc-,pftqp=5,fd-,ls-,mjj-,gdq-,fh=9,br=6,vtn=7,lks-,rskgt=9,mcz-,jkk=8,kmr-,mbfl=6,jfrj-,pnd-,qfq-,dtnj=1,hjfr=3,pbb=4,zc-,zfx=9,qkth=8,gdd=2,bs=2,nv-,hcx=6,hgnr=8,brtp=1,rvvssc-,rrd-,cmxt=7,rcg-,sbmp=8,qzp-,tjz=6,fjb=5,rlc=8,nfb=9,jvs-,vmgnvg=9,kdrkb=9,ltp-,ddl-,srsdk=9,nmxhc-,gdd=7,bml=1,rdk=3,bt-,pkq=6,sdqx=3,fx=2,mjj=7,zc=8,xb-,ct-,lj-,lczq-,hpv-,srsdk-,kscs-,htd=2,vnj=7,pcjjb-,hjfr=9,kmgm=2,qn-,jrl=5,nd-,zblxsk=5,md=2,bsj-,phxt-,rvvssc=6,fqq-,tdp=8,thb=7,dm=5,cggq-,ghgj-,txt=5,kxp-,dvs-,rm=9,fqj-,md=5,mkp=4,qml=3,qczrx=7,nng=8,xtbbr=9,pspgr=3,ndzhk-,fkrq=6,mf=7,zgd-,jd=2,hmt=5,zbbzmp-,vx=4,pm-,rf-,sc-,qkzk-,frz=2,mzz=4,htd=2,gdd-,pdl-,hqj=3,qd-,cgxfnp=3,dztrj=8,pql-,hpx=6,rn=9,ts=9,mvgv-,qkzk=6,mg-,ts=3,vhj=9,vhj-,gsspd-,kcmnqf=3,mcz=8,zjqt=3,th=9,mqjt=4,pftqp=2,mlpj-,tfg=9,np=7,bjlm-,nv-,pzhj=6,pg-,pg=9,kcs=7,xb=6,nmn-,sprjx=9,xjl=6,gxd=5,tfmlp-,xtbbr=4,pdl=9,sg-,mvgv-,qg=5,sxs-,ltj-,bjlm=2,prkssf=9,dmzgm-,nvn=6,nst=5,rnv-,jks=3,cc=8,vc=1,kjf-,hcr=9,rm-,fhs-,tfpmcd-,jvc=7,qdg-,zss=7,mbfl=6,kls=5,sc-,bpzqm=6,xv-,dfmp-,hjfr-,nng=8,hckzt=3,ls=4,lc=4,ppln=9,spn-,th-,qkqc=4,hg-,tg=4,ljz=7,qzp-,sr-,hd=9,mz=7,mlpj=4,pjc-,thc=9,pnthr-,fz=9,nxbjh-,lxb=7,rt=6,rkg=6,ct=4,bfmln-,ztq-,hpp-,gdq=3,jsn-,jn-,hm-,gq-,msln=4,pftqp=1,ltj=4,xtbbr=9,kb=3,bcq=4,ltdc-,lzh-,mf-,rlc-,fd=1,dtnj-,fq-,ch-,kdrkb-,rj=9,pg-,ppln-,ppj-,qzp-,gr=4,xfp=9,hcr-,gg-,kn-,dtnj=2,qd=3,gt=4,kt=3,lp-,jnc=4,vc=5,sx=9,cgjvjm-,fjb-,pftqp=7,fhs=9,djg-,dtnj-,fksl=4,kv=5,qkzk=8,ltcx-,btl=1,bcq-,djz=6,dqbc-,szm=4,cc=4,qkth=1,rcg=6,jlk=6,hqj-,nmxhc-,xcc-,rnv=3,ltj=9,jsn-,mh=6,xns-,pkfrz-,pg-,ksnx=9,jsn=4,lnn-,ltcx=6,rdk-,ht-,dztrj=6,hqnszx=9,gk-,fl-,dqpq-,bfmln-,rn=4,vc=1,fgx-,nng=7,qkth=6,bml=7,mbfl=6,nfk-,djg=2,fdn=5,dmzgm=6,dcb=7,gf-,pm-,mz=1,pql=3,bmjm-,tfg=3,xtbbr=2,xmnjl-,vlbk=9,cnxj=3,nz=1,kmt-,vlk-,ztq-,ptg-,dfmp-,ln-,qmvk-,jfrj-,jxb-,sxs-,tgvc-,nf-,ct-,nvn=7,nv-,kdrkb=7,cbrq=9,jfrj=2,pv-,vtn-,qpn=7,cgxfnp=7,gxd-,kc-,bcf=3,prkssf-,gxd=4,lbp=3,pcjjb=4,fqj=4,lxb=3,kmgm-,gt-,ld=9,md-,prkssf-,qm-,mbp=6,vjbmp=8,tfpmcd-,xmnjl=9,zfx=7,fl-,chd-,ddl=1,qg-,fdn-,qdg=3,kszx=9,lb-,qczrx=8,nm=2,nmn-,pk=1,jvc-,klxt=8,ldd-,hrf=5,sdqx-,nmxhc-,gnm-,pvrk=1,sjt=8,hg-,nbsf=4,gdl=1,rh-,tfg=6,sdqx=9,gt-,smph-,bg-,rng=1,lfcmg=8,spn=9,sq=6,rt=7,gv=4,dfk-,bb-,xd-,cgxfnp-,rmv-,mp=4,sc=6,xht-,pspgr=1,hx-,lxb=5,jq=7,hqj=7,cz=6,vjbmp=6,mz=2,lb=7,frz-,fgfgps-,nf=3,kf=5,fqq=9,vbt-,sq=6,pvlt-,hx-,mcz-,scn=6,lc=5,ncfnf-,rlc=9,pzhj-,xml-,ckkrt=8,thb=8,cbrq=6,bcq-,bg-,sv-,lrc-,tfmlp-,mb=8,cmntsd=1,mlpj=7,tfmlp-,xfp=4,pspgr=2,dz=5,tq=9,lj-,sjt-,ghgj-,dtnj=6,dxxfq=2,bb=5,fz=9,bcq=5,kscs-,pftqp=8,ztq=1,gxd=5,pbb-,pspgr=7,trgp=2,kcs-,bcjtr=9,ltj-,dsfz-,xb=2,jss=9,tls-,hmt=1,cgxfnp=1,sc=4,zrcl=1,qjr-,rm-,rmz=6,tfpmcd=2,lrr-,bdql-,lxb=8,nvt-,fksl=2,xfp=8,bml-,pvrk=4,djz=5,cxsq-,vtc=2,nmk=7,snl=2,zmnfx-,ls=1,jd-,snnb=9,trgp-,xns-,prkssf-,sjt=8,gsspd-,pzfh-,rv=2,cb-,snnb=4,vtn=9,rltxrt=6,chd=7,tr-,pnthr=3,rvxv-,rcg-,frz-,ltcx=2,prkg=8,tjtdr=1,rjq=9,rrmrl=7,zqz-,vhj=6,rb=3,bcq=4,sz-,qkqc-,nzjfh=6,zrcl-,kscs=5,rjnh=5,btl=1,nq-,srsdk=9,cxsq=4,bnpd-,zmnfx=6,qfq=2,jkk-,dmzgm=8,htd-,hcr=5,dxp-,cnxj-,knb-,rnpfkv-,qkth-,sc=2,tfpmcd-,gbq-,bdql=5,hqnszx=2,gt=2,lfcmg-,kn-,ltp-,kcs-,nfk=5,trgp=1,fgx-,qg=1,sb-,lzf=4,jfrj-,hg-,sv-,chd=5,lnn-,lfcmg-,gcz-,dhbv=4,kz-,pkq-,rskmm-,gg=3,kxp=5,lzf=8,jnc=2,kt=7,lzf=1,rrmrl-,lbnpzn-,bs-,dhbv-,dqjngp=9,xx=6,jxrn-,gz-,gcz-,fjdk-,ztq=3,vxrsf=8,pbb-,jx=5,zblxsk=9,fx-,lnn-,dqbc=5,sjt-,hpp-,lgvzd=4,pbb=5,nmk=6,nm=2,rqs=2,ztq-,mvgv=7,bs-,zmnfx=3,fl-,xmf-,vtc-,sb-,tfpmcd-,xcbz=1,hv-,fjdk-,snnb=4,bjlm-,gdd-,zxj-,mkp-,tl-,qmvk-,ltp=6,gcz=4,pbb-,bcjtr-,hcx-,ln=8,br-,lnn-,zx-,mbfl-,kqx-,sjt-,vl-,ddl=7,hg-,gnxgnd=2,qkth=5,nfk=2,cz-,bml-,tfpmcd-,fc-,srsdk-,zjqt=5,prkssf=4,fx=4,hfp-,kszx-,kh-,sr-,hbbkb=9,kn=6,nvt-,hx-,zpxxz=6,qqr=2,bjdqmg-,hvc-,nd-,rlk=2,rjnh=7,qn-,zfx=1,ltkk=4,hbbkb=8,jnf-,jnc=8,dvs=3,zc-,bk-,tznh-,ql-,dhbv=5,ldrm=6,rqs-,rml-,mlk-,jg-,mp=6,zbbzmp=4,llgl-,fx-,kv-,bmdg-,zblxsk-,pvrk=5,szm-,htd=7,xz=5,zrcl=1,kb=7,vl=8,mjj=9,dxxfq-,ndzhk-,phx=8,prkg-,kv=6,dfmp-,lj-,nxbjh=8,dm-,pdl-,cgxfnp-,rmz-,cxzp-,pb=6,qdg-,nhj-,hr=2,nmk-,pq-,btl=7,gnm=4,xjl-,mb=2,tg=1,qzp=2,kls=2,bsj=4,gv-,lj=7,xcbz-,lrr-`;
  
  const inputToUse = realInput;
  console.log('inputToUse',inputToUse);
  const strs = inputToUse.split(',');
  // console.log('strs',strs);

  const vals = [];

  strs.forEach(function(str) {
    const chars = str.split('');
    var value = 0;

    chars.forEach(function(char){
      // console.log('char',char);

      let ascii = char.charCodeAt(0);
      // console.log('ascii',ascii);
      ascii = parseFloat(ascii);
      // console.log(ascii);
      value = value + ascii;
      value = value * 17;
      value = value % 256;
    });

    console.log('final value in string loop',value);
    vals.push(value);

  });

  var finalValue = 0;
  vals.forEach(function(val) {
    finalValue = finalValue + val;
  });
  console.log('finalValue',finalValue);

  return (
    <main>
      <div>
        <DayHeader
          title='Day 15: Lens Library'
          starCount={1}
          puzzleLink='https://adventofcode.com/2023/day/15'
        />

        <p>A nice easy one to do on my lunch break (part one only – who has time to do all these parts!?)</p>
        <Link href="/">All days</Link> / <Link href="/day16">Day 16</Link>
      </div>
    </main>
  )
}