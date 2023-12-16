'use client';

import Link from "next/link";

import DayHeader from '../../components/dayHeader/dayHeader.component';
import CodeBlock from '../../components/codeBlock/codeBlock.component';

export default function Page() {
  // camel cards game

  const testInput = `32T3K 765
  T55J5 684
  KK677 28
  KTJJT 220
  QQQJA 483`;
  
  const biggerTestInput = `32T3K 765
  T55J5 684
  KK677 28
  KTJJT 220
  QQQJA 483
  KKKKK 1
  tKQ23 2
  22QQQ 3
  QQQQ2 4
  QQ234 5
  2QTTQ 6
  777K5 7`;

  const realInput = `88223 818
  66JQ9 398
  6T9AT 311
  53TT3 43
  J6266 762
  5TTAA 647
  44JTT 779
  T4T66 496
  6AAA3 383
  69K4Q 232
  55KA5 436
  666JJ 479
  75J85 835
  27379 323
  592Q3 565
  33777 438
  75224 136
  2QQK2 116
  JJQK9 219
  9Q77J 46
  68686 177
  7A7AA 336
  J4K3A 582
  46QA9 11
  5AJ85 712
  AJAJ4 264
  AK2AA 756
  K49KK 597
  9J882 678
  28QQ8 405
  93333 401
  KJTQJ 281
  K78Q4 941
  T8J56 377
  Q6TQT 440
  T44T4 792
  6KK66 7
  2JT22 144
  K6656 665
  6JQ4K 87
  5J4JA 419
  3A2J4 325
  47T47 291
  3J7Q3 190
  4A527 234
  223K2 917
  233J3 912
  844QQ 268
  TKTJK 125
  22298 62
  T6J59 258
  99K69 896
  8J878 834
  J5655 757
  4J26T 255
  4K3K5 448
  229J9 889
  22372 702
  6Q73T 832
  Q9892 919
  QJQ7Q 898
  JTTT5 173
  959J9 543
  AAAA5 858
  3Q5Q6 159
  23372 39
  453AK 572
  A6A82 410
  Q88Q8 241
  J675A 348
  KQQ2Q 643
  KJK52 981
  A9989 631
  33633 64
  44TJA 274
  A49A4 59
  AKAKA 864
  4333K 184
  8T843 238
  54594 429
  J222J 78
  5Q655 374
  5Q8KA 147
  J8Q2J 278
  29293 387
  T8TT4 15
  T7K36 481
  43776 782
  24292 369
  7K3Q2 551
  42T2T 495
  5Q5QQ 761
  QKKKK 312
  22J9A 948
  T552T 657
  75Q77 45
  35296 931
  46266 157
  9J4KK 973
  A4A77 269
  36T6T 235
  44483 386
  29452 924
  66Q66 723
  4TT86 717
  544AK 956
  QQQ9Q 75
  JJ989 708
  AKKA9 842
  2777K 519
  Q569A 831
  65838 996
  9AAA9 128
  Q722Q 95
  KJ2KK 807
  8TTKK 989
  393J9 306
  44J44 263
  85335 70
  54499 500
  KKJ44 462
  Q44K4 636
  Q3392 870
  8J896 540
  8QQ63 485
  37955 209
  6K5K8 35
  58JKT 307
  66QQ7 993
  Q4K98 937
  K2J42 583
  45333 965
  TAJ75 74
  T548J 114
  J5599 111
  9J557 79
  49JK3 669
  T9T9T 613
  J5TK6 69
  TQTJT 223
  98746 560
  3QQ33 271
  7A3QK 692
  AQ347 32
  653J9 638
  J8J48 635
  94449 873
  44449 957
  T4TTT 224
  949T4 695
  Q8Q4Q 376
  75QJ5 130
  K8K68 988
  84J45 441
  82577 443
  T4383 812
  973T2 1000
  TKK4J 781
  K6J77 911
  8Q383 491
  333AJ 230
  53555 492
  68666 183
  666Q5 178
  26KKK 379
  77TTQ 978
  92992 907
  T2562 65
  K7J3K 324
  67365 400
  2222J 331
  AA2AA 933
  8AAAJ 790
  47474 105
  48T43 203
  A5AJT 736
  9J6TQ 162
  TTTT6 700
  97987 851
  K5788 439
  Q9399 591
  34976 406
  3434T 486
  6A66J 22
  9J9TA 822
  QQ66J 632
  77755 590
  5564A 345
  J5A75 186
  29785 828
  88844 882
  38KK6 955
  66TTT 349
  78TKK 969
  46344 881
  7TT77 561
  6JTTQ 997
  QA8QA 921
  8Q2T4 625
  67T4A 403
  436K5 214
  6K7T8 26
  8A98K 197
  T3K84 141
  5J454 344
  74Q69 642
  KJ555 20
  5A4A8 129
  Q4A5J 510
  K2KK5 126
  T6686 853
  7Q774 867
  99696 459
  7Q3TA 770
  9J966 117
  T4T5T 494
  828K2 236
  54726 38
  88T82 704
  73977 502
  535A5 294
  K9K5K 418
  8TT9J 115
  Q2376 480
  5A9T7 257
  KK9KK 673
  33KK3 427
  4A575 974
  JT94J 515
  999A9 83
  Q342A 938
  8JKAJ 574
  5664J 775
  642A4 101
  33K28 916
  K28JK 176
  QQQQK 967
  4A4Q4 616
  T578T 552
  46474 174
  QQ83J 837
  22287 23
  JJJJJ 725
  KK55K 120
  AAQA5 555
  72737 37
  Q82JQ 518
  77667 464
  QJAQA 367
  K323K 52
  777T4 751
  74777 452
  839QJ 124
  8Q989 326
  5K5JA 711
  777J7 396
  46AJT 767
  88669 637
  JTTKQ 34
  JKK9K 251
  66226 163
  J3343 605
  998J5 534
  AT72K 950
  7J757 608
  84TT4 460
  99955 315
  TK5KA 60
  T82JQ 991
  46866 661
  T8TTT 19
  25K65 577
  QK3J6 284
  7A977 390
  KKKK2 774
  J97A7 143
  QK545 655
  AK4T3 454
  374K9 300
  AJATT 614
  96KA7 819
  5525A 253
  A995A 61
  66Q6Q 36
  4J253 282
  3JK9Q 385
  44JJ4 196
  KKKKJ 166
  K8KK8 299
  J9979 179
  93999 738
  47T3K 726
  A6J45 182
  JT322 421
  35J36 545
  838TK 434
  6AK6A 838
  4JT44 929
  J5955 473
  K4A47 611
  QK472 40
  AJTTJ 106
  4J9TT 82
  4QQ4Q 316
  38KA8 836
  96K8A 586
  J286T 318
  2JJ77 778
  4344K 528
  866AA 215
  68676 56
  934J3 563
  44J45 355
  4J443 804
  5QQ58 185
  844AK 53
  3T333 909
  TJ2K5 860
  AAQ3A 395
  66646 272
  54T8K 676
  A4Q25 67
  94J49 696
  42KK2 267
  KQK8T 985
  4QJ29 559
  83686 244
  53292 940
  QK6KK 503
  78777 660
  J4424 194
  8Q46Q 699
  72776 368
  KA553 926
  44454 627
  52599 86
  242A2 337
  49955 467
  QJAQK 847
  J22AJ 259
  2QQ2Q 228
  K33KK 833
  95559 900
  262AJ 250
  9AQ34 604
  8Q99Q 788
  JAQT9 908
  Q9432 47
  T3346 619
  8K97T 30
  J62J6 240
  28888 302
  K96K9 320
  9TQAT 960
  J9877 612
  88878 556
  6QQ5T 732
  6JA89 681
  3JJ5T 435
  QQ2K7 77
  ATTTT 283
  QKJQ8 629
  53353 276
  A2A33 805
  383AJ 797
  J684K 169
  44J4A 164
  KKK5K 392
  7988J 24
  Q5446 885
  7777A 713
  24386 839
  J77A7 537
  KTA7Q 16
  6TTJJ 677
  9Q93Q 523
  22322 280
  2QK58 984
  65795 6
  T9TTT 763
  66A67 58
  KJ994 743
  Q7KQQ 222
  4A424 270
  KQKQK 694
  843Q4 287
  5QQAQ 330
  Q4449 593
  QQQ4J 131
  2222K 132
  28287 402
  J46A4 707
  24242 982
  6686J 733
  8T9Q8 175
  45J3Q 442
  6Q48J 444
  3TTQ3 737
  4TT4T 127
  5555A 399
  AKT29 872
  TTT7J 340
  J44QQ 89
  57A3Q 453
  QJAJQ 682
  7JQ74 450
  J55Q2 342
  59267 773
  8J884 652
  33383 456
  K68JJ 600
  6JJA4 156
  T8T8J 771
  62222 942
  92999 947
  55886 946
  75A77 601
  3QK54 945
  A2686 531
  39Q38 687
  TKKTT 360
  8886K 339
  7774A 202
  T2222 798
  3786T 171
  547A6 623
  22T2T 170
  T2688 201
  KJ7A4 902
  9322T 922
  74Q6A 666
  J72T7 511
  44A44 72
  Q776Q 411
  4K4K8 588
  K43JJ 760
  AAAA6 714
  52J55 8
  3K94A 976
  AKJTQ 729
  65J66 94
  9KKK3 445
  6ATJT 876
  T2529 432
  68A79 397
  82J4Q 566
  53557 472
  83383 356
  AAAQA 380
  KTKK5 357
  5T24J 746
  6777J 289
  TK9K9 843
  44744 213
  3KTKT 728
  J739A 659
  T33JJ 928
  84QJQ 952
  KKK67 378
  97979 954
  K52T4 332
  75QA6 863
  ATTK2 603
  33Q33 207
  4AJ24 9
  5TTK5 949
  TTJ9T 663
  77277 645
  434QQ 364
  JJJ8J 527
  T479Q 706
  7A77K 413
  TK486 640
  KKJ59 17
  799Q9 97
  33646 447
  2323J 477
  K2758 986
  T5TT5 547
  9956Q 609
  TK753 149
  87Q79 193
  JQQQQ 512
  44988 871
  AA4AA 789
  J2564 347
  23J68 890
  KAAAT 684
  K9KTK 334
  TTTT3 857
  99899 783
  426J3 865
  8J288 689
  7QT8J 122
  73679 649
  653AQ 899
  9992T 544
  66TJ6 416
  382A9 252
  52J54 273
  J665T 630
  82222 221
  TT3T3 262
  44748 927
  T75KQ 85
  44554 587
  4866J 754
  47T6T 92
  899TT 4
  999JJ 576
  87898 868
  45T32 217
  J54T4 977
  JAAJA 721
  43KJ3 883
  4888K 110
  5A544 546
  J6783 220
  85956 63
  54334 137
  J9384 688
  94429 249
  QQJA3 803
  AA66A 180
  99K9T 28
  535J5 607
  8AA88 341
  862K2 382
  8J888 314
  25282 796
  8J8J8 488
  88Q35 188
  J99Q9 840
  5K832 475
  3333A 653
  A4A4J 539
  999T9 370
  77J73 310
  JJKKJ 964
  J9856 584
  54J9K 727
  22777 231
  6Q274 469
  TTTTJ 408
  6J2Q2 33
  AJ867 484
  55J55 892
  K7593 971
  5AT5T 474
  A2KKA 113
  24222 906
  93J33 875
  Q43AJ 972
  88JT7 569
  5Q8K8 888
  J7T53 747
  99986 29
  5JAA5 968
  97A75 468
  A5A58 449
  77455 44
  88T8A 820
  42732 455
  6A66A 575
  888KK 358
  TT966 780
  2KKTT 150
  Q5J5Q 718
  53J37 827
  A8J42 461
  K2863 548
  9TT99 216
  33343 802
  TTAAT 995
  K4T9J 786
  TKA39 785
  QQQQ3 766
  97Q7Q 903
  QJQ57 821
  92699 598
  49273 529
  2245J 731
  J7826 701
  2K724 983
  88KJK 769
  55592 815
  QK72J 920
  3QQ29 446
  ATTJT 650
  K93AA 303
  T63TT 507
  93993 810
  858J8 852
  2T5K9 165
  3TJ33 1
  93JTK 683
  999K9 672
  J6663 628
  443T4 42
  QQKT7 407
  AA3AA 242
  K9223 624
  QAQTA 570
  39TJ3 490
  22332 54
  82274 848
  2549T 210
  K7J55 466
  JK3AT 285
  Q42AQ 50
  2KQTK 730
  T5A8T 71
  523JT 470
  8T4AQ 433
  TT3A6 664
  555Q5 793
  62227 932
  TT8J2 777
  5Q5TT 91
  83A33 388
  666J6 963
  2J68Q 415
  5TQ37 12
  J8428 246
  JT7T9 953
  8K269 133
  755Q7 530
  8777A 962
  K55K5 394
  84828 195
  37246 679
  6796K 724
  QAA2A 844
  AT47Q 951
  57T5K 121
  35T85 227
  94TJ6 809
  4J6J6 685
  J5545 138
  K653T 646
  T267Q 414
  JJ559 535
  3K59K 25
  5AA23 412
  AJAAK 465
  Q7Q77 595
  9A99J 722
  7QQQQ 3
  KTKKQ 536
  TTJJT 393
  T2K26 905
  4AQ4Q 894
  88885 740
  QAQ8Q 96
  AQQQA 516
  78877 748
  447AA 200
  42JQQ 617
  33J33 776
  88787 155
  2K688 734
  J5K53 886
  Q88QQ 850
  266Q6 167
  8QQ84 644
  TTTJK 610
  K4936 958
  24K3A 698
  55T55 697
  Q5353 146
  339QQ 752
  9Q584 84
  2J822 497
  Q7T25 365
  57JTQ 140
  A847T 458
  82Q7T 80
  97779 293
  66K88 675
  66446 633
  T6KTT 934
  966J6 849
  22T53 854
  88AKK 514
  K5J58 305
  88222 298
  88K6J 526
  528Q8 936
  A2A3A 208
  K49A9 191
  4JJ47 319
  5J858 108
  JA345 425
  8T2Q6 715
  AA999 990
  Q96J9 879
  84J44 742
  A3A3J 806
  AATA8 557
  AJ77A 504
  36753 27
  65686 66
  J76A9 279
  3T63T 913
  9ATJJ 568
  K64K4 580
  8888K 668
  6K9J6 134
  23533 431
  65656 705
  T3T43 979
  79899 48
  QQQKK 795
  7TA7T 709
  KQ627 409
  66669 265
  K8732 404
  K6663 992
  QJQJQ 765
  88383 855
  JT4TJ 944
  26QQ6 874
  KK6KK 501
  6K7K2 451
  3TAK7 772
  TTJ55 328
  6QJ66 424
  56577 428
  6T6T6 816
  J9J2T 375
  J66TT 923
  TK2JQ 602
  QT7T8 233
  QQ9Q9 381
  447KK 959
  AJ6AA 107
  679T5 895
  2J559 533
  9JKAQ 489
  84Q92 521
  KQT83 884
  66946 648
  329KT 198
  5588T 925
  TTTT5 99
  637JT 218
  9K4AJ 918
  7JT5T 914
  24966 513
  76J3Q 13
  74994 260
  QQQQ5 585
  777TJ 112
  24JJ2 286
  Q4Q77 88
  9A559 626
  A63JK 987
  7T776 719
  24A34 618
  J2722 878
  T2TTT 327
  664QK 904
  A5663 160
  J9Q65 187
  J333K 457
  35355 476
  55757 558
  T3A48 856
  QQ445 261
  2JKK2 296
  Q74Q3 758
  5KJ5K 353
  22J24 651
  99366 256
  Q7Q59 172
  AA9JJ 2
  9999J 288
  77779 313
  394TA 247
  J55Q5 532
  TTTTK 384
  68868 749
  56TJT 389
  J555J 5
  T577J 304
  A7T96 290
  7T99A 391
  K7KK7 621
  KQT72 483
  JAAA2 846
  9QK26 710
  23233 750
  T33T2 352
  42444 351
  4224J 841
  574J5 31
  A744J 525
  484KJ 371
  44242 68
  97J26 482
  KK882 153
  32689 139
  429AK 755
  Q5382 102
  84Q88 487
  5J645 622
  99J34 361
  759QA 581
  88585 10
  4JT94 338
  75A44 14
  5557J 363
  KK244 522
  66636 277
  799T9 509
  37J93 142
  J6522 359
  573KJ 98
  63TA3 90
  QQQ8Q 825
  549QQ 538
  99T39 498
  AA37A 830
  JJ9JQ 211
  Q2T88 799
  JA58K 346
  6TQ3T 297
  85385 720
  A5AA6 123
  75588 794
  Q7979 768
  57KQQ 366
  882J2 554
  T9K65 735
  8T787 550
  T5JJT 615
  22832 564
  96JT9 859
  QT22J 716
  8T6T6 335
  J2474 541
  AT8AQ 578
  Q7QQ4 573
  56J7K 869
  46477 109
  68858 579
  74J78 961
  A8A8Q 641
  4AA44 662
  TTT56 791
  94292 229
  AAJ87 703
  4A6K6 901
  487T2 656
  JK626 800
  99996 998
  84448 520
  3QKT5 845
  QA4TA 517
  QQTTK 226
  K995K 596
  77393 76
  99JAA 437
  79K59 205
  9K22K 824
  8389A 741
  755TT 18
  77757 970
  A2777 634
  J795Q 148
  24425 690
  7Q7Q3 81
  5TT89 471
  4Q223 243
  AAAK6 248
  Q6443 620
  58668 478
  5K26T 493
  66J46 999
  46348 745
  62KTK 930
  JK377 893
  Q6K98 119
  5T83K 542
  77332 658
  44K44 422
  K6K6J 606
  75357 199
  99946 980
  89989 372
  22J25 103
  47J47 814
  K7K77 667
  93883 670
  2QTT2 135
  Q693K 753
  A5JT9 237
  38KKJ 571
  66AAT 254
  36636 354
  9AT3J 417
  88899 212
  QQ3Q3 599
  J265J 100
  55KAK 866
  57Q2A 654
  6T266 292
  954J2 245
  5TT65 671
  3T693 21
  ATAT7 994
  K8777 51
  5JQ92 808
  95A75 343
  42K6Q 813
  4J4TK 880
  77768 266
  9J929 549
  653J5 592
  AAQKQ 275
  59956 877
  5A2J6 317
  J9QT3 784
  QAQQQ 887
  KKK4K 301
  J777J 499
  QQQ6Q 910
  88898 154
  4Q553 151
  88J98 189
  95J66 161
  87785 589
  628J4 935
  58Q67 362
  55522 430
  44555 817
  QT792 939
  85754 158
  TKKKK 861
  AAKK3 966
  56JT5 686
  77776 181
  K5553 49
  85855 508
  64444 862
  5TAQ8 739
  97KK7 118
  7J566 321
  99944 505
  TQTTQ 463
  K4528 680
  298K2 329
  66656 691
  55222 152
  9QTTT 891
  64KJ9 801
  Q7737 639
  73533 57
  55524 204
  95999 322
  TA7QT 423
  AAAKA 829
  66QJ7 55
  77353 897
  47A38 333
  88A77 192
  88T8Q 567
  74A68 308
  55556 811
  9AJ6K 975
  QQQ4Q 239
  37Q33 506
  737AJ 915
  222J9 420
  7755K 562
  4T7J4 93
  KJA84 168
  66463 693
  KATTT 674
  KT555 295
  8J459 206
  28882 426
  Q27K9 73
  53442 943
  96678 553
  K34T2 309
  A555A 104
  A7AK2 764
  J8Q7Q 225
  TATT3 373
  63T48 594
  93933 759
  6Q78K 145
  KA29A 823
  AAJAA 744
  85A26 524
  7777K 350
  T6363 826
  J333J 41
  55AA6 787`;

  const inputToUse = testInput;
  const inputLines = inputToUse.split(/\n/);
  // console.log('inputLines',inputLines);
  
  const hands = []; // will be array of objs for each hand
  inputLines.forEach(function(line,i){
    const trimmedLine = line.trim();
    const lineParts = trimmedLine.split(' ');
    // console.log(`line ${i} parts`,lineParts);
    const value = lineParts[0];
    const bid = lineParts[1];

    // analyse the value to find the hand type
    const valueChars = value.split('');
    // console.log('valueChars',valueChars);
    
    const charCounts = {};
    valueChars.forEach(function(char) {
      charCounts[char] = (charCounts[char] || 0 ) + 1;
    });    
    // console.log('charCounts',charCounts);
    var type = 'unknown';
    const uniqueCharCount = Object.values(charCounts).length;
    // console.log('uniqueCharCount',uniqueCharCount);
    if( uniqueCharCount == 1 ) {
      type = 'fiveOfKind';
    } else if( uniqueCharCount == 5 ) {
      type = 'highCard';

      // pt 2: wildcard promotes type
      if( value.includes('J') ){
        type = 'pair';
      }
    } else if( uniqueCharCount == 4 ) {
      type = 'pair';

      // pt 2: wildcard promotes type
      if( value.includes('J') ){
        type = 'threeOfKind';
      }
    } else if( uniqueCharCount == 2 ) {
      // could be four of a kind or full house
      const flattenedCounts = [].concat(...Object.values(charCounts));
      const largestCount = Math.max(...flattenedCounts);
      if( largestCount > 3 ) {
        type = 'fourOfKind';

        // pt 2: wildcard promotes type
        if( value.includes('J') ){
          type = 'fiveOfKind';
        }
      } else {
        type = 'fullHouse';

        // pt 2: wildcard promotes type
        if( value.includes('J') ){
          type = 'fiveOfKind';
        }
      }

    } else if( uniqueCharCount == 3 ) {
      // could be 3 of a kind or 2 pair
      const flattenedCounts = [].concat(...Object.values(charCounts));
      const largestCount = Math.max(...flattenedCounts);
      if( largestCount > 2 ) {
        type = 'threeOfKind';

        // pt 2: wildcard promotes type
        if( value.includes('J') ){
          type = 'fourOfKind';
        }
      } else {
        type = 'twoPair';

        // pt 2: wildcard promotes type
        if( value.includes('J') ){
          const jays = value.match(/J/g);
          if( jays.length == 1 ) {
            type = 'fullHouse';
          } else {
            type = 'fourOfKind';
          }
        }
      }
    }
    const obj = {
      value:value,
      bid:bid,
      type:type
    }

    hands.push(obj);
  });

  console.log('hands are',hands);
  // We now know the types for each hand
  
  function getHandTypeRank(handType) {
    var rank = 0;
    if( handType == 'pair' ) {
      rank = 1;
    } else if( handType == 'twoPair' ) {
      rank = 2;
    } else if( handType == 'threeOfKind' ) {
      rank = 3;
    } else if( handType == 'fullHouse' ) {
      rank = 4;
    } else if( handType == 'fourOfKind' ) {
      rank = 5;
    } else if( handType == 'fiveOfKind' ) {
      rank = 6;
    }

    return rank;
  }

  function getCardRank(cardName) {
    var rank = 0;
    const cardIsNum = !isNaN(cardName);
    if( cardIsNum ) {
      // rank = cardName - 2;
      rank = cardName - 1;
    } else {
      if( cardName == 'T' ) {
        // rank = 8;
        rank = 9;
      } else if( cardName == 'J' ) {
        // rank = 9;
        // rank = -1 // part 2 
      } else if( cardName == 'Q' ) {
        rank = 10;
      } else if( cardName == 'K' ) {
        rank = 11;
      } else if( cardName == 'A' ) {
        rank = 12;
      }  
    }

    return rank;
  }

  const handsCount = Object.keys(hands).length;
  // console.log('handsCount',handsCount);
  for( var i=0; i<handsCount; i++ ) {

    for( var j=0; j<handsCount-1; j++ ) {

      const thisHand = hands[j];
      // console.log('thisHand',thisHand);
      const nextHand = hands[j+1];
      // console.log('nextHand',nextHand);

      const thisHandType = thisHand.type;
      // console.log('thisHandType',thisHandType);
      const nextHandType = nextHand.type;
      // console.log('nextHandType',nextHandType);
      if( thisHandType != nextHandType ) {
        // if they're not the same, they need to be swapped (based off rank)
        const thisHandTypeRank = getHandTypeRank(thisHandType);
        // console.log(`${thisHandType} is worth ${thisHandTypeRank}`);
        const nextHandTypeRank = getHandTypeRank(nextHandType);
        // console.log(`${nextHandType} is worth ${nextHandTypeRank}`);
        if( thisHandTypeRank > nextHandTypeRank ) {
          hands[j] = nextHand;
          hands[j+1] = thisHand;
        }
      } else {
        // if they are the same, we need to compare the actual cards in the hand
        // console.log('--- analyse same hand type')
        const thisHandCards = thisHand.value.split('');
        // console.log('thisHandCards',thisHandCards);
        const nextHandCards = nextHand.value.split('');
        // console.log('nextHandCards',nextHandCards);
        var foundDifferentCards = false;
        var checkingCardNo = 0;

        while( foundDifferentCards == false && checkingCardNo < thisHandCards.length ) {
          const thisHandCard = thisHandCards[checkingCardNo];
          const nextHandCard = nextHandCards[checkingCardNo];
          if( thisHandCard != nextHandCard ) {
            // console.log('the checking cards are different');
            const thisCardRank = getCardRank(thisHandCard);
            // console.log(`rank of card ${thisHandCard} is ${thisCardRank}`);
            const nextCardRank = getCardRank(nextHandCard);
            // console.log(`rank of card ${nextHandCard} is ${nextCardRank}`);

            if( thisCardRank > nextCardRank ) {
              hands[j] = nextHand;
              hands[j+1] = thisHand;
            }

            foundDifferentCards = true;
          }
          checkingCardNo = checkingCardNo + 1;
        }

      }

    }
  }
  // console.log('sorted hands are',hands);
    // the hands are now be sorted by rank

  const handsWithWildcard = [];
  hands.forEach(function(hand) {
    const value = hand.value;
    if( value.includes('J') ) {
      handsWithWildcard.push(hand);
    }
  });
  console.log('handsWithWildcard',handsWithWildcard);
  
  var totalWinnings = 0;
  hands.forEach(function(hand,i){
    const rank = i + 1;
    const bid = hand.bid;
    const winnings = rank * bid;

    totalWinnings = totalWinnings + winnings;

  });

  console.log('totalWinnings',totalWinnings);


  const codeToShowOnPage = `
  const inputToUse = realInput;
  const inputLines = inputToUse.split(/\\n/);
  // console.log('inputLines',inputLines);
  
  const hands = []; // will be array of objs for each hand
  inputLines.forEach(function(line,i){
    const trimmedLine = line.trim();
    const lineParts = trimmedLine.split(' ');
    // console.log(\`line \${i} parts\`,lineParts);
    const value = lineParts[0];
    const bid = lineParts[1];

    // analyse the value to find the hand type
    const valueChars = value.split('');
    // console.log('valueChars',valueChars);
    
    const charCounts = {};
    valueChars.forEach(function(char) {
      charCounts[char] = (charCounts[char] || 0 ) + 1;
    });    
    // console.log('charCounts',charCounts);
    var type = 'unknown';
    const uniqueCharCount = Object.values(charCounts).length;
    // console.log('uniqueCharCount',uniqueCharCount);
    if( uniqueCharCount == 1 ) {
      type = 'fiveOfKind';
    } else if( uniqueCharCount == 5 ) {
      type = 'highCard';

      // pt 2: wildcard promotes type
      if( value.includes('J') ){
        type = 'pair';
      }
    } else if( uniqueCharCount == 4 ) {
      type = 'pair';

      // pt 2: wildcard promotes type
      if( value.includes('J') ){
        type = 'threeOfKind';
      }
    } else if( uniqueCharCount == 2 ) {
      // could be four of a kind or full house
      const flattenedCounts = [].concat(...Object.values(charCounts));
      const largestCount = Math.max(...flattenedCounts);
      if( largestCount > 3 ) {
        type = 'fourOfKind';

        // pt 2: wildcard promotes type
        if( value.includes('J') ){
          type = 'fiveOfKind';
        }
      } else {
        type = 'fullHouse';

        // pt 2: wildcard promotes type
        if( value.includes('J') ){
          type = 'fiveOfKind';
        }
      }

    } else if( uniqueCharCount == 3 ) {
      // could be 3 of a kind or 2 pair
      const flattenedCounts = [].concat(...Object.values(charCounts));
      const largestCount = Math.max(...flattenedCounts);
      if( largestCount > 2 ) {
        type = 'threeOfKind';

        // pt 2: wildcard promotes type
        if( value.includes('J') ){
          type = 'fourOfKind';
        }
      } else {
        type = 'twoPair';

        // pt 2: wildcard promotes type
        if( value.includes('J') ){
          const jays = value.match(/J/g);
          if( jays.length == 1 ) {
            type = 'fullHouse';
          } else {
            type = 'fourOfKind';
          }
        }
      }
    }
    const obj = {
      value:value,
      bid:bid,
      type:type
    }

    hands.push(obj);
  });

  console.log('hands are',hands);
  // We now know the types for each hand
  
  function getHandTypeRank(handType) {
    var rank = 0;
    if( handType == 'pair' ) {
      rank = 1;
    } else if( handType == 'twoPair' ) {
      rank = 2;
    } else if( handType == 'threeOfKind' ) {
      rank = 3;
    } else if( handType == 'fullHouse' ) {
      rank = 4;
    } else if( handType == 'fourOfKind' ) {
      rank = 5;
    } else if( handType == 'fiveOfKind' ) {
      rank = 6;
    }

    return rank;
  }

  function getCardRank(cardName) {
    var rank = 0;
    const cardIsNum = !isNaN(cardName);
    if( cardIsNum ) {
      // rank = cardName - 2;
      rank = cardName - 1;
    } else {
      if( cardName == 'T' ) {
        // rank = 8;
        rank = 9;
      } else if( cardName == 'J' ) {
        // rank = 9;
        // rank = -1 // part 2 
      } else if( cardName == 'Q' ) {
        rank = 10;
      } else if( cardName == 'K' ) {
        rank = 11;
      } else if( cardName == 'A' ) {
        rank = 12;
      }   
    }

    return rank;
  }

  const handsCount = Object.keys(hands).length;
  // console.log('handsCount',handsCount);
  for( var i=0; i<handsCount; i++ ) {

    for( var j=0; j<handsCount-1; j++ ) {

      const thisHand = hands[j];
      // console.log('thisHand',thisHand);
      const nextHand = hands[j+1];
      // console.log('nextHand',nextHand);

      const thisHandType = thisHand.type;
      // console.log('thisHandType',thisHandType);
      const nextHandType = nextHand.type;
      // console.log('nextHandType',nextHandType);
      if( thisHandType != nextHandType ) {
        // if they're not the same, they need to be swapped (based off rank)
        const thisHandTypeRank = getHandTypeRank(thisHandType);
        // console.log(\`\${thisHandType} is worth \${thisHandTypeRank}\`);
        const nextHandTypeRank = getHandTypeRank(nextHandType);
        // console.log(\`\${nextHandType} is worth \${nextHandTypeRank}\`);
        if( thisHandTypeRank > nextHandTypeRank ) {
          hands[j] = nextHand;
          hands[j+1] = thisHand;
        }
      } else {
        // if they are the same, we need to compare the actual cards in the hand
        // console.log('--- analyse same hand type')
        const thisHandCards = thisHand.value.split('');
        // console.log('thisHandCards',thisHandCards);
        const nextHandCards = nextHand.value.split('');
        // console.log('nextHandCards',nextHandCards);
        var foundDifferentCards = false;
        var checkingCardNo = 0;

        while( foundDifferentCards == false && checkingCardNo < thisHandCards.length ) {
          const thisHandCard = thisHandCards[checkingCardNo];
          const nextHandCard = nextHandCards[checkingCardNo];
          if( thisHandCard != nextHandCard ) {
            // console.log('the checking cards are different');
            const thisCardRank = getCardRank(thisHandCard);
            // console.log(\`rank of card \${thisHandCard} is \${thisCardRank}\`);
            const nextCardRank = getCardRank(nextHandCard);
            // console.log(\`rank of card \${nextHandCard} is \${nextCardRank}\`);

            if( thisCardRank > nextCardRank ) {
              hands[j] = nextHand;
              hands[j+1] = thisHand;
            }

            foundDifferentCards = true;
          }
          checkingCardNo = checkingCardNo + 1;
        }

      }

    }
  }
  // console.log('sorted hands are',hands);
    // the hands are now be sorted by rank

  const handsWithWildcard = [];
  hands.forEach(function(hand) {
    const value = hand.value;
    if( value.includes('J') ) {
      handsWithWildcard.push(hand);
    }
  });
  console.log('handsWithWildcard',handsWithWildcard);
  
  var totalWinnings = 0;
  hands.forEach(function(hand,i){
    const rank = i + 1;
    const bid = hand.bid;
    const winnings = rank * bid;

    totalWinnings = totalWinnings + winnings;

  });

  console.log('totalWinnings',totalWinnings);
`;



  return (
    <main>
      <div>
        <DayHeader
          title='Day 7: Camel Cards'
          starCount={2}
          puzzleLink='https://adventofcode.com/2023/day/7'
        />
        <p>It took me a few minutes to plan out how to tackle part one with pen and paper, but was way more time consuming to implement. This was mentally challenging but fairly straight forward; complicated but just need to follow the logic path. Ended up with a bubble sort inside a bubble sort yay!</p>
        <p>I said to Nichola and Gabo the other day that I like writing code to achieve creating something rather than writing code for the sake of it, but here I am on day 7, and I am starting to question that. I guess I am achieving stars though…</p>
        <p>It's been a stressful week and funnily enough, doing these puzzles has been the most meditative part of the day each day.</p>


        <CodeBlock 
          codeToShow={codeToShowOnPage}
        /> 

        <Link href="/">All days</Link> / <Link href="/day8">Day 8</Link>
      </div>
    </main>
  )
}
