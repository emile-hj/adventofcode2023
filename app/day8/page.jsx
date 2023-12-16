'use client';

import Link from "next/link";

import DayHeader from '../../components/dayHeader/dayHeader.component';
import CodeBlock from '../../components/codeBlock/codeBlock.component';


export default function Page() {
  // lost in desert

  const testInput = `RL

  AAA = (BBB, CCC)
  BBB = (DDD, EEE)
  CCC = (ZZZ, GGG)
  DDD = (DDD, DDD)
  EEE = (EEE, EEE)
  GGG = (GGG, GGG)
  ZZZ = (ZZZ, ZZZ)`;

  const pt2testInput = `LR

  11A = (11B, XXX)
  11B = (XXX, 11Z)
  11Z = (11B, XXX)
  22A = (22B, XXX)
  22B = (22C, 22C)
  22C = (22Z, 22Z)
  22Z = (22B, 22B)
  XXX = (XXX, XXX)`;

  const realInput = `LRLRRLRLRLLRRRLLLRLLRRLLRRRLRLRLRRRLRRLRLRRRLRRRLRRRLRRRLRRLRRRLRRRLRRLLLRLLRLRRRLRRRLRRLRLRLRLRRRLRRRLRRRLRRLRRLRRLLRRLRRRLLRRLRRRLRRRLRRRLRLRRLRLRRRLRRLLRLRLLRLRLRRRLRLRRLLRRRLRLRLRLRLRLRRLRLRRLLLLRRLRRLRRRLRRLRRLRRRLRRLRRRLLRLRRLLRLRRLRRLRRLLRRRLRLRLRRRLRRLRLLRLRRRR

  TNX = (BBN, MXH)
  TCN = (VBD, LTV)
  DXP = (GMJ, CMG)
  RRM = (FHL, FHB)
  DFG = (MVT, FTP)
  GFJ = (TRG, LFT)
  FKL = (SFR, NRR)
  GMJ = (RRM, NRT)
  FPM = (GTQ, NSH)
  RKL = (DSC, VNR)
  RXK = (RQR, TQX)
  GGV = (DFG, TNJ)
  KVR = (BBD, RHV)
  RVJ = (MVJ, MNN)
  XCM = (QMM, BTG)
  PMS = (PRQ, BMN)
  BHM = (QGQ, KNC)
  FMC = (NTT, HDH)
  BNX = (DSC, VNR)
  QSJ = (XFR, JMV)
  JMM = (CDT, SXX)
  BNK = (MTL, RVF)
  CBQ = (VPF, VQD)
  KKK = (VKD, SJH)
  FXH = (CMG, GMJ)
  BSF = (GFQ, HSV)
  XHN = (SNR, FPM)
  BNG = (DMT, MPL)
  JQT = (HXB, STK)
  VGR = (CVT, RSF)
  HMD = (RTN, MGT)
  QBD = (FKD, PCL)
  RXH = (SKN, DBR)
  VDJ = (VLB, RCG)
  DMF = (VNJ, DDM)
  THR = (LVL, GGV)
  QVH = (VQD, VPF)
  XVX = (JGQ, VQG)
  LCV = (RSJ, BHM)
  GHN = (FTH, VXF)
  QPF = (PKQ, HPQ)
  DSS = (JHF, FDN)
  VHJ = (TCN, TVC)
  KVJ = (FGH, HCV)
  VHN = (VQG, JGQ)
  SMF = (NQC, JQK)
  MVQ = (GLB, LGG)
  JKX = (XNC, XNC)
  LDH = (GLB, LGG)
  SJH = (XHL, BKG)
  HDM = (PSQ, LJS)
  XKF = (BVP, VGJ)
  PJD = (RVC, QDT)
  TKM = (MLD, KTS)
  KLM = (KTC, VJV)
  BCT = (CJS, PSJ)
  SJB = (XFB, MCX)
  HPR = (DNM, JQJ)
  RTN = (LVK, CFK)
  GXD = (JPS, GFJ)
  CVV = (MJR, VNS)
  CLF = (DHK, TXC)
  LFT = (FMQ, KPB)
  RGJ = (FJR, GHZ)
  MLF = (DPD, CKR)
  DCS = (RNG, LNH)
  LXR = (PFM, NLX)
  BKJ = (SKM, SLQ)
  SHL = (HDM, GNS)
  STN = (SGX, LBD)
  BQB = (GRR, FFB)
  TPT = (BNP, JRK)
  TKP = (GHN, CRT)
  BHJ = (QJL, BDF)
  JFC = (MKK, LCX)
  LNQ = (KVP, TVT)
  XKR = (LXM, BHJ)
  MLX = (TDC, LCV)
  MJX = (BNP, JRK)
  RXX = (FMR, FMR)
  MHG = (SMF, KVT)
  CMJ = (XNV, CVV)
  JKG = (FLM, QHQ)
  SHT = (HXB, STK)
  PDS = (QGG, NNZ)
  NSH = (JBX, GLR)
  BVP = (MKN, SKQ)
  LKC = (QCR, CQJ)
  AAA = (PFM, NLX)
  RXR = (FMR, QNR)
  VBH = (XGF, CMJ)
  QNM = (GXD, PRT)
  VGV = (QQR, SXP)
  PRT = (GFJ, JPS)
  VXF = (XBB, DVX)
  BBD = (XRD, GQX)
  BTG = (CSJ, DFN)
  XSF = (CLF, GLV)
  NXB = (TDC, LCV)
  FBK = (BCT, BMM)
  HXB = (TLV, DKM)
  JKH = (DBT, GBX)
  JDL = (HQT, HTH)
  PFV = (BBN, MXH)
  KNC = (NVM, GVM)
  GPF = (QBD, HBN)
  JLJ = (HPR, TKB)
  LQN = (XJQ, JLJ)
  FFN = (FMB, FHR)
  SCP = (XRS, XVM)
  MQL = (SMJ, SXF)
  QGQ = (GVM, NVM)
  KMF = (FQF, XVD)
  QCR = (VGV, CDR)
  LXM = (QJL, BDF)
  TDV = (VHL, MML)
  KTM = (NQL, TCT)
  XKS = (JMJ, LFN)
  JHJ = (FKG, LJM)
  VHL = (LMB, PKR)
  CDT = (QJJ, HFM)
  TVC = (LTV, VBD)
  XBP = (CFM, VDP)
  LQJ = (XVM, XRS)
  VDP = (HNL, GRT)
  XHL = (HLR, PDR)
  CQD = (VNJ, DDM)
  NSG = (BMH, JKG)
  SPZ = (DFV, QDG)
  NCV = (FRM, CBF)
  SVV = (LLD, JKH)
  LFN = (MDS, PHG)
  KPC = (NVV, MBF)
  VDN = (QVP, HQD)
  DSC = (PMK, TKG)
  MML = (LMB, PKR)
  FHS = (VBF, CXX)
  DFT = (XKF, SLC)
  VGG = (SSS, SBH)
  LDS = (QSK, XKR)
  NDB = (XRG, SHS)
  GRR = (MBL, GVT)
  QKL = (FXJ, TRC)
  DJK = (LNF, XVF)
  NKF = (KTS, MLD)
  BPS = (STL, MMJ)
  KXT = (BJD, CHD)
  BCS = (DFC, XHN)
  LSH = (LJT, QBL)
  QMM = (DFN, CSJ)
  MNH = (DHH, CTV)
  RLG = (QFG, THR)
  GNF = (FVB, FDQ)
  KDX = (VHJ, MBB)
  PBN = (XBP, QPT)
  SFR = (DHC, GPF)
  MQM = (CSK, LQN)
  FJR = (KMT, PPM)
  JPS = (TRG, LFT)
  VLT = (MJF, XLB)
  FKD = (NRN, NSL)
  KNP = (MML, VHL)
  GHZ = (PPM, KMT)
  MBL = (PGG, QDJ)
  FHR = (QSJ, DLH)
  RVL = (BPD, PMS)
  QVF = (CQC, RGJ)
  VFH = (MCX, XFB)
  SRS = (PKQ, HPQ)
  HDH = (VLT, GCX)
  HMV = (CQJ, QCR)
  VTT = (QVH, CBQ)
  PPM = (FBK, RMC)
  RST = (MKS, KDJ)
  FQF = (SFV, HTM)
  CQJ = (CDR, VGV)
  CBT = (JNV, GJN)
  XNC = (VTT, TFL)
  BMM = (PSJ, CJS)
  FDR = (GNF, TJN)
  HQD = (MFB, MVC)
  DKK = (NDV, SVB)
  VTK = (TPM, TPM)
  NVV = (NFM, JKB)
  HNL = (XRF, BGM)
  KPB = (PRG, VQL)
  MJN = (NQL, TCT)
  FLM = (LKT, QKL)
  QQJ = (MJN, KTM)
  XNH = (QDT, RVC)
  TQX = (CHN, BQB)
  FMR = (LXR, LXR)
  GHX = (QGG, QGG)
  XFB = (FDT, JSX)
  TCL = (LGH, RPL)
  VTP = (HMD, PRP)
  TLV = (QFK, NDH)
  GSA = (QDG, DFV)
  VKD = (XHL, BKG)
  HTH = (CBT, GQF)
  MVJ = (PJD, XNH)
  KTS = (TKP, DKB)
  HBD = (DSS, PPX)
  BGM = (XSK, SPR)
  LLD = (DBT, GBX)
  CQX = (PCD, CSX)
  KMP = (QPT, XBP)
  HPQ = (MTN, HPV)
  SQJ = (VTK, VTK)
  PRK = (JXC, RBS)
  VXX = (VHN, XVX)
  XFJ = (KDX, DHD)
  CRT = (VXF, FTH)
  FVH = (TDV, KNP)
  BMB = (QMM, BTG)
  FMB = (DLH, QSJ)
  BDF = (QPF, SRS)
  QDT = (MXK, GJT)
  NQL = (GSM, NLT)
  JCB = (HSV, GFQ)
  DQL = (QHD, JCS)
  DHK = (SCP, LQJ)
  MNN = (XNH, PJD)
  DJP = (KKR, MQM)
  CVT = (RLG, JQM)
  MMB = (RXH, JTT)
  BSX = (PBX, JPV)
  MLD = (DKB, TKP)
  GKR = (PBX, JPV)
  NLX = (RKL, BNX)
  CXD = (VGL, NDB)
  NPL = (KDX, DHD)
  KVP = (NHB, DQL)
  QGT = (PMG, RLX)
  SLQ = (DKK, RXG)
  HVG = (CQC, CQC)
  JJL = (DDK, DFT)
  XSK = (GHT, CQX)
  SPT = (LMF, XKQ)
  HCV = (RVJ, SMT)
  TKG = (VDR, KBD)
  XKQ = (BKJ, GCR)
  TVV = (KPJ, FPR)
  KBD = (VDG, MNV)
  MXT = (XVX, VHN)
  LFC = (QDG, DFV)
  HCM = (MCS, VTD)
  RSJ = (QGQ, KNC)
  PTR = (FFH, TCH)
  RBS = (XSF, BFS)
  VPF = (DJP, QQV)
  GLV = (DHK, TXC)
  MRD = (VGR, BPC)
  VGJ = (SKQ, MKN)
  QGA = (KMT, PPM)
  HQT = (CBT, GQF)
  BLC = (FKG, LJM)
  RDP = (TDB, HLX)
  BMQ = (JFD, JTR)
  QGG = (RLL, VBV)
  CMG = (RRM, NRT)
  PCD = (CFJ, PLX)
  JMV = (KPL, VDN)
  VBV = (CKC, PDV)
  KGC = (DLJ, JXV)
  FMN = (JCB, BSF)
  KKJ = (KPJ, FPR)
  QQF = (LQH, CRN)
  VPH = (MVQ, LDH)
  JHF = (KLM, FLJ)
  NBB = (CJK, KPC)
  SKM = (DKK, RXG)
  XGG = (KPC, CJK)
  HBQ = (QGT, MBX)
  QCM = (LGH, RPL)
  CBF = (PFV, TNX)
  HTQ = (KCN, TCX)
  JBX = (SJB, VFH)
  DDM = (XKS, QTC)
  DLH = (XFR, JMV)
  BNP = (PGV, FVH)
  CHT = (VDJ, BND)
  PHG = (JFC, PPN)
  XSV = (SXX, CDT)
  MVT = (LHV, VPH)
  NFM = (SVV, NHM)
  JRJ = (VGL, NDB)
  NNZ = (VBV, RLL)
  GNS = (PSQ, LJS)
  PKQ = (HPV, MTN)
  MPL = (TDL, KRP)
  LHA = (DXP, FXH)
  RLX = (MNH, KFM)
  RTG = (LGS, VTP)
  VRK = (JCQ, QNP)
  MQN = (NRR, SFR)
  MCX = (JSX, FDT)
  FFB = (GVT, MBL)
  NRN = (TPT, MJX)
  JSQ = (VBN, JBQ)
  KDB = (XGG, NBB)
  MBX = (RLX, PMG)
  KPL = (QVP, HQD)
  SCK = (BFR, BMQ)
  QVP = (MVC, MFB)
  NGS = (KMJ, NMT)
  HLR = (JCF, RDP)
  TRC = (JKX, TQC)
  SNR = (GTQ, NSH)
  JPV = (HQM, SPV)
  NHB = (QHD, JCS)
  DDJ = (KVT, SMF)
  CSX = (PLX, CFJ)
  PJL = (JDL, CGK)
  SPV = (PJL, QFV)
  VNS = (PRK, GNN)
  KKX = (FRR, MQL)
  PBX = (HQM, SPV)
  HVN = (FRR, MQL)
  NGN = (GNS, HDM)
  MTN = (RTG, FKM)
  VDV = (GRB, FGV)
  FTN = (QFB, PTR)
  SMT = (MNN, MVJ)
  VVB = (JBQ, VBN)
  DNM = (KDB, BCX)
  HVD = (TXX, RVB)
  QQV = (MQM, KKR)
  FLD = (JRJ, CXD)
  TRG = (KPB, FMQ)
  FDN = (FLJ, KLM)
  VSC = (VTK, FPK)
  KMH = (BBD, RHV)
  HFM = (RKC, DLT)
  VQQ = (PML, GXJ)
  KTC = (TQN, FHS)
  TMF = (VDV, CBB)
  VNN = (CRN, LQH)
  LVK = (BNG, MXG)
  PLH = (TSF, PKS)
  GBX = (LNQ, BGL)
  PSJ = (PLH, SGS)
  QJJ = (RKC, DLT)
  VLH = (DMF, CQD)
  VLB = (BTM, FLD)
  CSK = (XJQ, JLJ)
  FVB = (VXX, MXT)
  RLL = (CKC, PDV)
  GNN = (JXC, RBS)
  MXH = (LQR, RXK)
  LJS = (RVL, VLD)
  BCX = (NBB, XGG)
  CRR = (SGX, LBD)
  LGG = (HKC, CGS)
  RDR = (NTT, HDH)
  KFM = (DHH, CTV)
  GCR = (SKM, SLQ)
  TQC = (XNC, NPZ)
  CLH = (GHX, PDS)
  BND = (VLB, RCG)
  GHS = (RST, XNG)
  SLC = (VGJ, BVP)
  HGS = (XKR, QSK)
  SHJ = (KJJ, TLD)
  TXC = (SCP, LQJ)
  SSS = (JMM, XSV)
  JQK = (BNK, SGQ)
  PMT = (KVJ, PQN)
  SCH = (KVJ, PQN)
  KMT = (FBK, RMC)
  JXC = (BFS, XSF)
  DFC = (SNR, FPM)
  QFK = (KXT, GKD)
  QQR = (HGT, FTN)
  CKC = (RNF, TMF)
  SFT = (BPC, VGR)
  XTB = (VVB, JSQ)
  RNF = (CBB, VDV)
  MVC = (FQK, HVD)
  FTH = (DVX, XBB)
  VJV = (FHS, TQN)
  XNG = (MKS, KDJ)
  VNR = (PMK, TKG)
  JFD = (VMJ, HBD)
  FPR = (SCK, GNK)
  CBB = (FGV, GRB)
  JRK = (FVH, PGV)
  XLB = (DJK, XFS)
  TKB = (DNM, JQJ)
  SVB = (FDR, CKF)
  BJD = (HHH, HHH)
  LJM = (TKM, NKF)
  XVM = (QTF, FMN)
  DVX = (XCM, BMB)
  TXX = (VCB, GHS)
  VTD = (CHT, RVT)
  PKS = (QCM, TCL)
  HXK = (SPT, BVQ)
  GKD = (BJD, CHD)
  RCN = (TCX, KCN)
  NSL = (MJX, TPT)
  MBF = (NFM, JKB)
  GHR = (QGT, MBX)
  JCQ = (CRR, STN)
  QPT = (CFM, VDP)
  JTT = (DBR, SKN)
  CJS = (PLH, SGS)
  PCL = (NRN, NSL)
  BBN = (RXK, LQR)
  LTV = (PBN, KMP)
  PRQ = (RDL, RDL)
  SXF = (RXX, RXR)
  GJT = (VQQ, DVT)
  RNG = (PGN, MTH)
  QFV = (JDL, CGK)
  JSX = (MHG, DDJ)
  CXX = (JHJ, BLC)
  FTP = (VPH, LHV)
  VBD = (KMP, PBN)
  RXG = (NDV, SVB)
  PDV = (TMF, RNF)
  NCC = (SSS, SBH)
  KPJ = (GNK, SCK)
  DPJ = (SMX, HCM)
  PKR = (VGG, NCC)
  XVD = (SFV, HTM)
  SGS = (TSF, PKS)
  DFV = (TLG, CGM)
  MXG = (DMT, MPL)
  RQR = (BQB, CHN)
  JQR = (XGF, CMJ)
  XDL = (CBF, FRM)
  DMT = (TDL, KRP)
  LCS = (RDR, FMC)
  GVT = (PGG, QDJ)
  CDR = (SXP, QQR)
  CSJ = (VNQ, XTB)
  NMT = (SQJ, VSC)
  PVJ = (LJT, QBL)
  XGF = (XNV, CVV)
  FKM = (VTP, LGS)
  CHD = (HHH, CLH)
  SBH = (JMM, XSV)
  QNR = (LXR, ZZZ)
  PQN = (FGH, HCV)
  TNJ = (FTP, MVT)
  RDL = (LFC, LFC)
  CHN = (GRR, FFB)
  MCS = (CHT, RVT)
  GXJ = (MQN, FKL)
  TDC = (BHM, RSJ)
  VLD = (BPD, PMS)
  GLB = (CGS, HKC)
  RVB = (GHS, VCB)
  MKK = (VNN, QQF)
  XNV = (MJR, VNS)
  CGS = (PVJ, LSH)
  VQD = (QQV, DJP)
  DBT = (LNQ, BGL)
  PMK = (KBD, VDR)
  FPK = (TPM, QJN)
  LMF = (BKJ, GCR)
  BGL = (KVP, TVT)
  HVZ = (FXH, DXP)
  GVM = (SCH, PMT)
  MMJ = (HTQ, RCN)
  PRP = (RTN, MGT)
  FHL = (GHR, HBQ)
  NLT = (LDS, HGS)
  HVJ = (MRD, SFT)
  FGV = (MMB, HXD)
  NHM = (LLD, JKH)
  QHS = (DFC, XHN)
  LHV = (LDH, MVQ)
  LBA = (VTT, TFL)
  PPX = (FDN, JHF)
  VBF = (JHJ, BLC)
  DHC = (QBD, HBN)
  MJF = (DJK, XFS)
  JGQ = (MLF, RTF)
  CKF = (TJN, GNF)
  RKC = (HMV, LKC)
  TCT = (NLT, GSM)
  HBN = (FKD, PCL)
  VQG = (MLF, RTF)
  FHB = (GHR, HBQ)
  PGN = (VGK, QNM)
  NDH = (KXT, GKD)
  SKN = (MLX, NXB)
  KCN = (SHT, JQT)
  MKS = (BCS, QHS)
  FDQ = (MXT, VXX)
  FXJ = (JKX, JKX)
  GLR = (VFH, SJB)
  RTF = (CKR, DPD)
  PFP = (BVQ, SPT)
  SHS = (KMF, KKD)
  HTM = (HVG, QVF)
  FMQ = (PRG, VQL)
  GRB = (MMB, HXD)
  LKT = (FXJ, FXJ)
  GJN = (MQB, HVJ)
  NDV = (CKF, FDR)
  JGC = (DLJ, JXV)
  RVT = (BND, VDJ)
  RPL = (VBH, JQR)
  TCX = (JQT, SHT)
  CQC = (FJR, FJR)
  MXK = (VQQ, DVT)
  DHD = (MBB, VHJ)
  JQJ = (BCX, KDB)
  FVK = (KMJ, NMT)
  LJT = (MPB, VLH)
  PMG = (KFM, MNH)
  GSM = (LDS, HGS)
  QTF = (JCB, BSF)
  TSF = (TCL, QCM)
  VQL = (SSN, VMK)
  HHH = (GHX, GHX)
  QDG = (CGM, TLG)
  PFM = (RKL, BNX)
  XFS = (LNF, XVF)
  RMC = (BMM, BCT)
  JCF = (TDB, HLX)
  HXD = (JTT, RXH)
  NVM = (PMT, SCH)
  KKR = (CSK, LQN)
  TQN = (CXX, VBF)
  FQK = (TXX, RVB)
  PLX = (NSG, BJP)
  DFN = (VNQ, XTB)
  QJL = (SRS, QPF)
  MKN = (BNM, DPJ)
  RVC = (MXK, GJT)
  MPB = (DMF, CQD)
  XRD = (BSX, GKR)
  QSK = (LXM, BHJ)
  QNP = (CRR, STN)
  DKM = (NDH, QFK)
  MBB = (TCN, TVC)
  PHP = (MMJ, STL)
  NQC = (SGQ, BNK)
  NRR = (GPF, DHC)
  LCX = (QQF, VNN)
  PDR = (JCF, RDP)
  HPV = (FKM, RTG)
  BNM = (SMX, HCM)
  VBN = (SHL, NGN)
  NTQ = (NPL, XFJ)
  DDK = (XKF, SLC)
  RRR = (DFT, DDK)
  DDH = (KJJ, TLD)
  CTV = (SKT, QQJ)
  QDH = (NPL, XFJ)
  QJN = (PVT, HVZ)
  JQM = (THR, QFG)
  HSV = (JGC, KGC)
  DLJ = (NLH, KKK)
  JCS = (QDH, NTQ)
  SXX = (HFM, QJJ)
  JMJ = (MDS, PHG)
  CFM = (GRT, HNL)
  FRM = (PFV, TNX)
  LVL = (TNJ, DFG)
  SFV = (HVG, HVG)
  CFK = (BNG, MXG)
  SGX = (TVV, KKJ)
  FGH = (RVJ, SMT)
  CFJ = (NSG, BJP)
  BFR = (JFD, JTR)
  RSF = (JQM, RLG)
  KJJ = (RRR, JJL)
  FRR = (SMJ, SXF)
  GFQ = (JGC, KGC)
  MDS = (JFC, PPN)
  LNF = (LXH, VRK)
  NLH = (SJH, VKD)
  XRG = (KKD, KMF)
  BPD = (PRQ, PRQ)
  KDJ = (QHS, BCS)
  JTR = (VMJ, HBD)
  TDB = (SHJ, DDH)
  TLG = (LCS, KFF)
  VNJ = (XKS, QTC)
  CGK = (HQT, HTH)
  TVT = (DQL, NHB)
  GRT = (XRF, BGM)
  SKQ = (DPJ, BNM)
  QDJ = (PHP, BPS)
  MGT = (CFK, LVK)
  SXP = (HGT, FTN)
  KMJ = (SQJ, VSC)
  HKC = (PVJ, LSH)
  GQX = (GKR, BSX)
  BJP = (BMH, JKG)
  KRP = (FFN, VKT)
  BKG = (HLR, PDR)
  FDT = (MHG, DDJ)
  PPN = (MKK, LCX)
  XVF = (LXH, VRK)
  MFB = (HVD, FQK)
  GCX = (MJF, XLB)
  STK = (TLV, DKM)
  QTC = (JMJ, LFN)
  JNV = (HVJ, MQB)
  XBB = (XCM, BMB)
  PGG = (PHP, BPS)
  LQH = (HXK, PFP)
  VCB = (XNG, RST)
  TJN = (FVB, FDQ)
  TFL = (QVH, CBQ)
  QFB = (FFH, TCH)
  GTQ = (GLR, JBX)
  DVT = (GXJ, PML)
  BPC = (RSF, CVT)
  CGM = (KFF, LCS)
  VGL = (SHS, XRG)
  QHQ = (LKT, QKL)
  PGV = (KNP, TDV)
  HGT = (QFB, PTR)
  MTH = (QNM, VGK)
  DKC = (LFC, SPZ)
  RVF = (FVK, NGS)
  TPM = (PVT, PVT)
  DLT = (LKC, HMV)
  TDL = (FFN, VKT)
  QBL = (MPB, VLH)
  CRN = (PFP, HXK)
  XRS = (FMN, QTF)
  VDR = (VDG, MNV)
  BVQ = (LMF, XKQ)
  LNH = (PGN, MTH)
  QFG = (LVL, GGV)
  LGS = (PRP, HMD)
  LMB = (NCC, VGG)
  DPD = (RCB, DCS)
  MTL = (NGS, FVK)
  ZZZ = (NLX, PFM)
  BFS = (CLF, GLV)
  HLX = (DDH, SHJ)
  XCA = (RLL, VBV)
  DKB = (GHN, CRT)
  GQF = (JNV, GJN)
  TCH = (XDL, NCV)
  XRF = (SPR, XSK)
  CJK = (NVV, MBF)
  DHH = (SKT, QQJ)
  GHT = (PCD, CSX)
  JXV = (NLH, KKK)
  RCB = (LNH, RNG)
  VMJ = (DSS, PPX)
  LBD = (TVV, KKJ)
  VKT = (FMB, FHR)
  VDG = (KVR, KMH)
  HQM = (QFV, PJL)
  NRT = (FHB, FHL)
  CKR = (RCB, DCS)
  LGH = (VBH, JQR)
  RHV = (XRD, GQX)
  FKG = (NKF, TKM)
  NTT = (GCX, VLT)
  FLJ = (KTC, VJV)
  BMN = (RDL, DKC)
  JKB = (NHM, SVV)
  LQR = (RQR, TQX)
  JBQ = (NGN, SHL)
  NPZ = (TFL, VTT)
  BMH = (FLM, QHQ)
  SKT = (KTM, MJN)
  XJQ = (TKB, HPR)
  SMX = (VTD, MCS)
  SPR = (GHT, CQX)
  VNQ = (VVB, JSQ)
  LXH = (JCQ, QNP)
  BTM = (CXD, JRJ)
  VGK = (PRT, GXD)
  VMK = (KKX, HVN)
  SMJ = (RXX, RXX)
  MJR = (GNN, PRK)
  PML = (FKL, MQN)
  KKD = (FQF, XVD)
  PVT = (DXP, FXH)
  GNK = (BMQ, BFR)
  TLD = (JJL, RRR)
  MNV = (KVR, KMH)
  SGQ = (RVF, MTL)
  KFF = (FMC, RDR)
  PSQ = (RVL, VLD)
  RCG = (FLD, BTM)
  KVT = (JQK, NQC)
  MQB = (SFT, MRD)
  PRG = (SSN, VMK)
  QHD = (NTQ, QDH)
  XFR = (VDN, KPL)
  FFH = (NCV, XDL)
  STL = (HTQ, RCN)
  SSN = (KKX, HVN)
  DBR = (NXB, MLX)`;
  
  const inputToUse = realInput;

  const inputLines = inputToUse.split(/\n/);
  // console.log('inputLines',inputLines);
  
  const stepInstructions = inputLines[0];
  const map = [];
  inputLines.forEach(function(line){
    if( line.includes('=' )) {
      const trimmedLine = line.trim();
      const lineParts = trimmedLine.split('=');
      const posName = lineParts[0].trim();
  
      const pathPosLine = lineParts[1].trim()
                                      .replace('(','')
                                      .replace(')','')
                                      .replace(' ','');
      const pathPosArr = pathPosLine.split(',');
  
  
      const obj = {
        posName: posName,
        paths: pathPosArr
      }
      map.push(obj);
    }
  });
  console.log('map',map);
  // map and instructions now ready
  
  var lost = true;
  var currentPosName = 'AAA';
  const destinationPosName = 'ZZZ';
  
  const stepInstrucCount = stepInstructions.length;
  var stepsTaken = 0;
  var currentInstrucStep = 0;
  
  // part 1 lost
  // while( lost ) {    
  //   if( currentPosName === destinationPosName ) {
  //     lost = false;
  //   } else {
  //     const currentMapPos = Object.values(map).find( (obj) => {
  //       return obj.posName == currentPosName;
  //     });
  //     console.log('currentMapPos',currentMapPos);
  
  //     const instrucStep = stepInstructions[currentInstrucStep];
  //     if( instrucStep == 'L' ) {
  //       currentPosName = currentMapPos.paths[0];
  //     } else if( instrucStep == 'R' ) {
  //       currentPosName = currentMapPos.paths[1];
  //     }    
  
  //     stepsTaken = stepsTaken + 1;
  //     console.log('currentPosName after step',currentPosName);
  //     currentInstrucStep = currentInstrucStep + 1;
  //     if( currentInstrucStep == stepInstrucCount ) {
  //       currentInstrucStep = 0;
  //     }
  //   }
  // }
  // part one unlost
  // console.log('stepsTaken',stepsTaken);
  
  // part 2
  const ghostCurrentPositions = [];
  map.forEach(function(mapNode){
    // console.log(mapNode);
    const posName = mapNode.posName;    
    const lastChar = posName.slice(posName.length-1);
    // console.log('lastChar',lastChar);
    if( lastChar == 'A' ) {
      ghostCurrentPositions.push(mapNode);
    }
  });  
  console.log('ghostCurrentPositions',ghostCurrentPositions);  
  
  
  const ghostsLoopPoints = [];
  ghostCurrentPositions.forEach(function(ghostPos, i) {
    console.log('ghostPos',ghostPos);
    var loopPointFound = false;
    var pointsVisited = 0;
    var currentInstrucStep = -1;
    var posName = ghostPos.posName;
    // var posNamesVisited = [];
  
    while( !loopPointFound ) {
      // console.log('––– checking pos',posName);

      const lastChar = posName.slice(posName.length-1);
      // console.log('lastChar',lastChar);
      if( lastChar == 'Z' ) {
        loopPointFound = true;
      }
  
      if( !loopPointFound ) {
        pointsVisited = pointsVisited + 1;
        currentInstrucStep = currentInstrucStep + 1;
        if( currentInstrucStep == stepInstrucCount ) {
          currentInstrucStep = 0;
        }
        const nextPosName = stepGhost(posName,currentInstrucStep);
        posName = nextPosName;
      }  
    } 
    const steps = pointsVisited - 1;
    console.log(`this ghost reaches loop in ${steps} steps`);
    ghostsLoopPoints.push(pointsVisited);
  });
  
  function stepGhost(posName, instrucToUse) {
  
    const currentPos = Object.values(map).find((obj) => {
      return obj.posName == posName;
    });
    
    const instrucStep = stepInstructions[instrucToUse];
    // console.log('instrucStep',instrucStep);
    var nextStepName = '';
    if( instrucStep == 'L' ) {
      // ghostCurrentPositions[i] =           
      nextStepName = currentPos.paths[0];
    } else if( instrucStep == 'R' ) {
      nextStepName = currentPos.paths[1];
    }    
    return( nextStepName );
  }
  
  function gcd(a, b) { 
    for (let temp = b; b !== 0;) { 
      b = a % b; 
      a = temp; 
      temp = b; 
    } 
    return a; 
  } 
  
  function lcmFunction(a, b) { 
    const gcdValue = gcd(a, b); 
    return (a * b) / gcdValue; 
  } 

  var workingLCM = null;
  console.log('ghostsLoopPoints',ghostsLoopPoints);
  ghostsLoopPoints.forEach(function(loopPoint){

    if( workingLCM === null ) {
      workingLCM = loopPoint;
    } else {
      workingLCM = lcmFunction(workingLCM, loopPoint);
    }
    
  });
  console.log('workingLCM',workingLCM);

  stepsTaken = workingLCM;
  console.log('stepsTaken',stepsTaken);
  
  const endTime = performance.now() / 1000;
  console.log(`end at ${endTime} seconds`);

  const codeToShowOnPage = `
  const inputToUse = realInput;

  const inputLines = inputToUse.split(/\\n/);
  // console.log('inputLines',inputLines);
  
  const stepInstructions = inputLines[0];
  const map = [];
  inputLines.forEach(function(line){
    if( line.includes('=' )) {
      const trimmedLine = line.trim();
      const lineParts = trimmedLine.split('=');
      const posName = lineParts[0].trim();
  
      const pathPosLine = lineParts[1].trim()
                                      .replace('(','')
                                      .replace(')','')
                                      .replace(' ','');
      const pathPosArr = pathPosLine.split(',');
  
  
      const obj = {
        posName: posName,
        paths: pathPosArr
      }
      map.push(obj);
    }
  });
  console.log('map',map);
  // map and instructions now ready
  
  var lost = true;
  var currentPosName = 'AAA';
  const destinationPosName = 'ZZZ';
  
  const stepInstrucCount = stepInstructions.length;
  var stepsTaken = 0;
  var currentInstrucStep = 0;
  
  // part 1 lost
  // while( lost ) {    
  //   if( currentPosName === destinationPosName ) {
  //     lost = false;
  //   } else {
  //     const currentMapPos = Object.values(map).find( (obj) => {
  //       return obj.posName == currentPosName;
  //     });
  //     console.log('currentMapPos',currentMapPos);
  
  //     const instrucStep = stepInstructions[currentInstrucStep];
  //     if( instrucStep == 'L' ) {
  //       currentPosName = currentMapPos.paths[0];
  //     } else if( instrucStep == 'R' ) {
  //       currentPosName = currentMapPos.paths[1];
  //     }    
  
  //     stepsTaken = stepsTaken + 1;
  //     console.log('currentPosName after step',currentPosName);
  //     currentInstrucStep = currentInstrucStep + 1;
  //     if( currentInstrucStep == stepInstrucCount ) {
  //       currentInstrucStep = 0;
  //     }
  //   }
  // }
  // part one unlost
  // console.log('stepsTaken',stepsTaken);
  
  // part 2
  const ghostCurrentPositions = [];
  map.forEach(function(mapNode){
    // console.log(mapNode);
    const posName = mapNode.posName;    
    const lastChar = posName.slice(posName.length-1);
    // console.log('lastChar',lastChar);
    if( lastChar == 'A' ) {
      ghostCurrentPositions.push(mapNode);
    }
  });  
  console.log('ghostCurrentPositions',ghostCurrentPositions);  
  
  // ! Pt 2 Brute force approach - it takes too long to compute (tried in 2 variations)
  // const ghostCount = ghostCurrentPositions.length;
  // const ghostStatuses = Array(ghostCurrentPositions.length).fill('lost');
  // ghost starting positions and statuses ready
  
  // function stepGhosts(ghostCurrentPositions){
  //   for(var i=0; i<ghostCurrentPositions.length; i++ ) {
  //     const ghostPos = ghostCurrentPositions[i];
  //     const instrucStep = stepInstructions[currentInstrucStep];
  //     // console.log('instrucStep',instrucStep);
  //     var nextStepName = '';
  //     if( instrucStep == 'L' ) {
  //       // ghostCurrentPositions[i] =           
  //       nextStepName = ghostPos.paths[0];
  //     } else if( instrucStep == 'R' ) {
  //       nextStepName = ghostPos.paths[1];
  //     }    
  //     // console.log('nextStepName',nextStepName);
  
  //     const nextPos = Object.values(map).find((obj) => {
  //       return obj.posName == nextStepName;
  //     });
  //     // console.log('nextPos',nextPos);
  //     ghostCurrentPositions[i] = nextPos;      
  //   }
  // }
  
  // var allGhostsLost = true;
  // var unlostCount = 0;
  // while( allGhostsLost ) {
  
  //   for(var i=0; i<ghostCurrentPositions.length; i++ ) {
  //     const ghostPos = ghostCurrentPositions[i];
  //     // console.log('ghostPos',ghostPos);
  //     const currentPosName = ghostPos.posName;
  //     // console.log('currentPosName',currentPosName);
  //     const lastChar = currentPosName.slice(currentPosName.length-1);
  //     if( lastChar === 'Z' ) {
  //       // ghostStatuses[i] = 'unlost';
  //       unlostCount = unlostCount + 1;
  //     }
  //   }
  //   // const allGhostsFound = ghostStatuses.every(status => status === 'unlost');
  //   // console.log('after check, unlost count',unlostCount);
  //   // if( allGhostsFound ) {
  //   if( unlostCount == ghostCount ) {
  //     allGhostsLost = false;
  //   } else {
  //     // ghostStatuses.fill('lost');
  //     unlostCount = 0;
  //     stepGhosts(ghostCurrentPositions);
  //     stepsTaken = stepsTaken + 1;
  
  //     currentInstrucStep = currentInstrucStep + 1;
  //     if( currentInstrucStep == stepInstrucCount ) {
  //       currentInstrucStep = 0;
  //     }
  //   }
  // }
  
  // ghostCurrentPositions.forEach(function(ghostPos, i){
  //   const thisGhostStatus = ghostStatuses[i];
  //   var thisGhostCurrentInstrucStep = 0;
  //   var currentPosName = ghostPos.posName;
  // });
  // part 2 unlost for all
  
  const ghostsLoopPoints = [];
  ghostCurrentPositions.forEach(function(ghostPos, i) {
    console.log('ghostPos',ghostPos);
    var loopPointFound = false;
    var pointsVisited = 0;
    var currentInstrucStep = -1;
    var posName = ghostPos.posName;
    var posNamesVisited = [];
  
    while( !loopPointFound ) {
      console.log('––– checking pos',posName);
      console.log('posNamesVisited',posNamesVisited);
      // check if we visited this pos already
      for( var i=0; i<posNamesVisited.length; i++ ) {
        const checkPosName = posNamesVisited[i];
        console.log('posName',posName);
        console.log('checkPosName',checkPosName);
        if( posName === checkPosName ) {
          // pos has already been visited
          loopPointFound = true;
        }
      }
      posNamesVisited.push(posName);
  
      if( !loopPointFound ) {
        pointsVisited = pointsVisited + 1;
        currentInstrucStep = currentInstrucStep + 1;
        if( currentInstrucStep == stepInstrucCount ) {
          currentInstrucStep = 0;
        }
        const nextPosName = stepGhost(posName,currentInstrucStep);
        posName = nextPosName;
      }  
    } 
    const steps = pointsVisited - 1;
    console.log(\`this ghost reaches loop in \${steps} steps\`);
    ghostsLoopPoints.push(pointsVisited);
  });
  
  function stepGhost(posName, instrucToUse) {
  
    const currentPos = Object.values(map).find((obj) => {
      return obj.posName == posName;
    });
    
    const instrucStep = stepInstructions[instrucToUse];
    // console.log('instrucStep',instrucStep);
    var nextStepName = '';
    if( instrucStep == 'L' ) {
      // ghostCurrentPositions[i] =           
      nextStepName = currentPos.paths[0];
    } else if( instrucStep == 'R' ) {
      nextStepName = currentPos.paths[1];
    }    
    return( nextStepName );
  }
  
  var powerOfGhostLoopPoints = 0;
  ghostsLoopPoints.forEach(function(loopPoint){
    if( powerOfGhostLoopPoints === 0 ) {
      powerOfGhostLoopPoints = loopPoint;
    } else {
      powerOfGhostLoopPoints = powerOfGhostLoopPoints * loopPoint;
    }
  });
  console.log('powerOfGhostLoopPoints',powerOfGhostLoopPoints);
  stepsTaken = powerOfGhostLoopPoints;
  console.log('stepsTaken',stepsTaken);
  
  const endTime = performance.now() / 1000;
  console.log(\`end at \${endTime} seconds\`);`;


  return (
    <main>
      <div>
        <DayHeader
          title='Day 8'
          starCount={2}
          puzzleLink='https://adventofcode.com/2023/day/8'
        /> 

        <p>Part one done in a reasonable amount of time, and I showed Tim how I'd done it and mentioned how I'm having a bit of trouble with recursive loops, bugs and stuff. He showed me Wallaby.js and Quokka.js, recommending them for immediate test running in the editor to quickly get test results and find failure points. Wallaby looked the most useful to me, although I am yet to write a test. I would like to learn more about this.</p>
        <p>Working on part two the following day, I have been having trouble solving it. With my original, brute force, method of stepping every ghost through its path of positions until they reach synchronisation, I was able to get the answer with the test input. However I realised that the compute time with the real input is too long. I can't get an answer.</p>
        <p>I actually left it computing last night whilst I went out, and at dinner, Tim, Gabo and I had a really interesting chat about AoC in general and these kind of problems where the compute time of the linear/brute force method is too slow, and how various patterns can essentially be compressed to reduce the amount of cycles that must be performed. When I got back home, it was still computing, and I realised I needed a better solution.</p>        
        <p>I've had a look online for better ways to approach this and see people have mentioned that each ghost reaches a certain point where it starts looping, and we can count the amount of steps to reach the loop point. There are people talking about finding the LCM (lowest common multiple) of the loop-point step number…</p>
        <p>I've come back to part two of this problem days later now that I have some time. I had given the LCM idea some thought after reading that last time, and realised that it actually seemed quite simple and obvious to find how many steps each ghost takes to reach their destination, and find the lowest multiple of those values. Well it wasn't obvious to me until basically being told, but now it's quite embarassing that I even tried to brute force and loop all the ghosts until they reached synchronisation, when there is a clear mathematical solution to the problem.</p>
        <p>I didn't know how to find the lowest common multiple of two numbers so found these two functions online, 'gcd' and 'lcmFunction'. I don't quite know how they work and should probably spend some time reading them and about LCM. For now good enough and the problem is solved!</p>

        {/* <CodeBlock 
          codeToShow={codeToShowOnPage}
        />  */}

        <Link href="/">All days</Link> / <Link href="/day9">Day 9</Link>
      </div>
    </main>
  )
}
