webpackJsonp([0],[,,,function(t,e,s){"use strict";var o=s(2),r=s.n(o),a=s(29),n=s(21),i=s.n(n);r.a.use(a.a),e.a=new a.a({mode:"history",routes:[{path:"/",name:"Portfolio",component:i.a}]})},function(t,e){},,function(t,e,s){s(15);var o=s(0)(s(8),s(27),null,null);t.exports=o.exports},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=s(2),r=s.n(o),a=s(6),n=s.n(a),i=s(3),l=s(5),u=s.n(l),c=s(4);s.n(c);r.a.use(u.a),new r.a({el:"#app",router:i.a,template:"<App/>",components:{App:n.a}})},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=s(22),r=s.n(o),a=s(20),n=s.n(a),i=s(23),l=s.n(i);e.default={name:"hello",data:function(){},components:{project:r.a,myfooter:n.a,weblinks:l.a}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{img:null,title:null,subtitle:null,source:null,docs:null,demo:null,paper:null,website:null,githubStars:null}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"web-links",props:{emailSubject:{default:function(){return null}},tweetMessage:{default:function(){return null}},tweetUrl:{default:function(){return""}},tweetHashtags:{default:""}},data:{},computed:{emailHref:function(){return"mailto:egf-software@ed.ac.uk?&cc=hille.tekotte@ed.ac.uk, valentin.zulkower@ed.ac.uk&body=Hello EGF team !&subject="+this.emailSubject},twitterHref:function(){return"https://twitter.com/intent/tweet?hashtags=synbio,software&text="+this.tweetMessage+"&url="+this.tweetUrl+"&via=EdinGenFoundry&hashtags="+this.tweetHashtags}}}},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,function(t,e,s){s(16);var o=s(0)(null,s(28),"data-v-fa324e66",null);t.exports=o.exports},function(t,e,s){s(12);var o=s(0)(s(9),s(24),"data-v-537c2f86",null);t.exports=o.exports},function(t,e,s){s(14);var o=s(0)(s(10),s(26),"data-v-a1f893f2",null);t.exports=o.exports},function(t,e,s){s(13);var o=s(0)(s(11),s(25),"data-v-90842f12",null);t.exports=o.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("github-corners",{attrs:{repo:"Edinburgh-Genome-Foundry","bg-color":"#514ec5"}}),s("img",{staticClass:"title-logo",attrs:{src:"/static/imgs/logos/egf-codon.svg"}}),s("h1",[t._v("The Software Suite of the Edinburgh Genome Foundry")]),s("weblinks",{attrs:{emailSubject:"[EGF-Codons] Feedback on the EGF software",tweetMessage:"EGF Codons: free software for DNA design, assembly, and more.",tweetUrl:"https://edinburgh-genome-foundry.github.io/",tweetHashtags:"synbio, software"}}),t._m(0),t._m(1),t._m(2),t._m(3),s("project",{attrs:{title:"DNA CHISEL",subtitle:"A versatile sequence optimizer",img:"/static/imgs/logos/dnachisel.png",source:"https://github.com/Edinburgh-Genome-Foundry/DnaChisel",docs:"https://edinburgh-genome-foundry.github.io/DnaChisel/index.html",demo:"https://cuba.genomefoundry.org/sculpt_a_sequence",githubStars:{repo:"dnachisel"}}},[s("div",{attrs:{slot:"summary"},slot:"summary"},[t._v("Python library to optimize a sequence's nucleotides with respect to\nconstraints and objectives. DNA Chisel allows to provide specifications as\nGenbank features, and to define new constraints or objectives via scripts.\n")])]),s("project",{attrs:{title:"Golden Hinges",subtitle:"Restriction overhang designer",img:"/static/imgs/logos/goldenhinges.png",source:"https://github.com/Edinburgh-Genome-Foundry/GoldenHinges",docs:"https://edinburgh-genome-foundry.github.io/GoldenHinges/index.html",githubStars:{repo:"goldenhinges"},demo:"https://cuba.genomefoundry.org/design-overhangs"}},[s("div",{attrs:{slot:"summary"},slot:"summary"},[t._v("Python library to find collections of compatible overhangs for Type-2S\nrestriction-based assembly, or decompose\na DNA sequence into fragments with compatible overhangs for scar-less\nDNA assembly. Can also suggest minimal edits in the sequence to allow\nsuch assembly.\n\n")])]),s("project",{attrs:{img:"/static/imgs/logos/dfv.png",title:"DNA Features Viewer",subtitle:"Display DNA features from Genbank etc.",githubStars:{repo:"DnaFeaturesViewer"},source:"https://github.com/Edinburgh-Genome-Foundry/DnaFeaturesViewer"}},[s("div",{attrs:{slot:"summary"},slot:"summary"},[t._v("Customizable library to produce plots of sequence annotations (e.g. from\nGenbank). Easily customizable to highlight or hide certain features, it\ncan produce figures or simple web-based interactive plots.\n")])]),s("project",{attrs:{img:"/static/imgs/logos/caravagene.png",title:"CARAVAGENE",subtitle:"PDF plots of genetic assemblies",source:"https://github.com/Edinburgh-Genome-Foundry/Caravagene",docs:"https://edinburgh-genome-foundry.github.io/Caravagene/",demo:"https://cuba.genomefoundry.org/sketch_constructs",githubStars:{repo:"Caravagene"}}},[s("div",{attrs:{slot:"summary"},slot:"summary"},[t._v("Python library for generating PDF reports of DNA assembly plots. The renderer\nuses HTML/CSS, allowing for good esthetics in many scenarios. Allows for\nvarious annotations and highlighting. Used at the Foundry to communicate\ndesign ideas with customers.\n")])]),s("project",{attrs:{img:"/static/imgs/logos/visual-sbol-css.png",title:"Visual SBOL CSS",subtitle:"Super-easy construct plotting for the web",source:"https://github.com/Edinburgh-Genome-Foundry/SBOL-Visual-CSS",docs:"https://edinburgh-genome-foundry.github.io/SBOL-Visual-CSS/",demo:"https://edinburgh-genome-foundry.github.io/SBOL-Visual-CSS/examples/drag_and_drop_construct_editor.html"}},[s("div",{attrs:{slot:"summary"},slot:"summary"},[t._v("CSS library for displaying DNA constructs using the visual SBOL notation.\nSmall and self-contained, it can be used in webpages, emails, HTML-based\nPDF reports, etc.\n")])]),s("project",{attrs:{img:"/static/imgs/logos/crazydoc.png",title:"CrazyDoc",subtitle:"Read sequences from .docx files",source:"https://github.com/Edinburgh-Genome-Foundry/crazydoc",githubStars:{repo:"crazydoc"},demo:"https://cuba.genomefoundry.org/convert_sequence_files"}},[s("div",{attrs:{slot:"summary"},slot:"summary"},[t._v("Python library to parse the most common sequence annotation format: the\ncolorful Microsoft Word document.\n")])]),s("project",{attrs:{img:"/static/imgs/logos/dab.png",title:"DAB",subtitle:"Assembly design portal of the EGF",source:"https://github.com/Edinburgh-Genome-Foundry/dab",website:"https://dab.genomefoundry.org"}},[s("div",{attrs:{slot:"summary"},slot:"summary"},[t._v("EGF Design-And-Build makes it easy to discover the assembly standards\nsupported by the EGF (EMMA, MoClo, etc.), understand the options of each\nstandard, browse catalog of parts and (soon) domesticate and manage parts.\n")])]),s("project",{attrs:{img:"/static/imgs/logos/genedom.png",title:"Genedom",githubStars:{repo:"genedom"},demo:"https://cuba.genomefoundry.org/domesticate_part_batches",source:"https://github.com/Edinburgh-Genome-Foundry/genedom",subtitle:"Automated parts domestication"}},[s("div",{attrs:{slot:"summary"},slot:"summary"},[t._v("Genedom (in development) provides sequence optimizers for different\nassembly standards, routines for batch domestication and PDF reports\nfor final verification and traceability.\n")])]),s("project",{attrs:{img:"/static/imgs/logos/screepy.png",title:"Screepy",subtitle:"Screening out the creepy"}},[s("div",{attrs:{slot:"summary"},slot:"summary"},[t._v("Screepy provides a framework to run multiple pathogenicity tests on DNA\nsequences prior to synthesis, and compile the screen results in extensive\nreports for traceability. The code is not public (but you can ask us about it !)\n")])]),s("project",{attrs:{img:"/static/imgs/logos/sequenticon.png",title:"Sequenticon",githubStars:{repo:"sequenticon"},source:"https://github.com/Edinburgh-Genome-Foundry/sequenticon",demo:"https://cuba.genomefoundry.org/render-sequenticons",subtitle:"Visual identifiers for DNA sequences"}},[s("div",{attrs:{slot:"summary"},slot:"summary"},[t._v("Sequenticon provides "),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Identicon"}},[t._v("identicons")]),t._v("\nfor DNA sequences, to quickly check accross project reports whether two mentionned\ngenetic parts have exactly the same sequence.\n")])]),s("project",{attrs:{img:"/static/imgs/logos/zymp.png",title:"Zymp",githubStars:{repo:"zymp"},demo:"https://cuba.genomefoundry.org/design-sites-arrays",source:"https://github.com/Edinburgh-Genome-Foundry/zymp",subtitle:"Restriction array designer"}},[s("div",{attrs:{slot:"summary"},slot:"summary"},[t._v('Zymp is a small python utility to help design compact sequences packed\nwith many restriction enzyme recognition sites. Originally written for\ncreating "universal" controls for restriction digests.\n')])]),t._m(4),s("project",{attrs:{title:"DNA Cauldron",subtitle:"A cloning simulator for synthetic biology",img:"/static/imgs/logos/dnacauldron.png",githubStars:{repo:"DnaCauldron"},source:"https://github.com/Edinburgh-Genome-Foundry/DnaCauldron",docs:"https://edinburgh-genome-foundry.github.io/DnaCauldron/",demo:"https://cuba.genomefoundry.org/simulate_gg_assemblies"}},[s("div",{attrs:{slot:"summary"},slot:"summary"},[t._v("Python library to simulate restriction-based assembly operations\n(Golden Gate, BASIC). Supports simple and combinatorial assemblies, and\nconserves annotations in the final sequence. Also enables the autoselection\nof parts connectors.\n")])]),s("project",{attrs:{title:"DNA Weaver",subtitle:"A route planner for DNA assembly",img:"/static/imgs/logos/dnaweaver.png",demo:"https://dnaweaver.genomefoundry.org",source:"https://github.com/Edinburgh-Genome-Foundry/DnaWeaver"}},[s("div",{attrs:{slot:"summary"},slot:"summary"},[t._v("DNA Weaver computes optimal assembly strategies for long sequences of\narbitrary DNA. It supports several assembly methods (Golden Gate assembly,\nType-2S restriction enzymes, etc.) and can compare several sources of DNA\nsuch as commercial providers or constructs. Most awesome library on this page.\n")])]),s("project",{attrs:{title:"BandWitch",subtitle:"Restriction digests assistant",img:"/static/imgs/logos/bandwitch.png",source:"https://github.com/Edinburgh-Genome-Foundry/BandWitch",docs:"https://edinburgh-genome-foundry.github.io/BandWitch/",demo:"https://cuba.genomefoundry.org/select_digestions"}},[s("div",{attrs:{slot:"summary"},slot:"summary"},[t._v("Python library to automatically select the best enzymes to either validate\nor identify a batch of genetic assemblies. Also provides report generation\nfor the validation or identification of assemblies from fragment analyzis\ndata\n")])]),s("project",{attrs:{img:"/static/imgs/logos/plateo.png",title:"Plateo",subtitle:"Parsers and simulators for lab automation",source:"https://github.com/Edinburgh-Genome-Foundry/Plateo",docs:"https://edinburgh-genome-foundry.github.io/Plateo/",githubStars:{repo:"Plateo"}}},[s("div",{attrs:{slot:"summary"},slot:"summary"},[t._v("Plateo is a Python library to implements parsers and file generators to\ninterface with a biolab automation machines. Read microplate\ninformation (including experimental data) from many file formats, write\nreports, generate and simulate picklists, etc.\n")])]),s("project",{attrs:{img:"/static/imgs/logos/primavera.png",title:"Primavera",subtitle:"Primer-based verification assistant",source:"https://github.com/Edinburgh-Genome-Foundry/Primavera",githubStars:{repo:"primavera"},docs:"https://edinburgh-genome-foundry.github.io/Primavera/",demo:"https://cuba.genomefoundry.org/select_primers"}},[s("div",{attrs:{slot:"summary"},slot:"summary"},[t._v("Python library for primer selection and data analysis for assembly\nverification. Primavera can suggest an optimal set of primers to]\nsequence-verify a multi-part construct at all junctions. It can\nalso consolidate a batch of sequencing reads into a per-construct report.\n")])]),s("project",{attrs:{img:"/static/imgs/logos/geneblocks.png",title:"Geneblocks",githubStars:{repo:"geneblocks"},subtitle:"Human-friendly DNA sequences comparator",demo:"https://cuba.genomefoundry.org/find-common-blocks",source:"https://github.com/Edinburgh-Genome-Foundry/Geneblocks"}},[s("div",{attrs:{slot:"summary"},slot:"summary"},[t._v("Python library and web apps for comparing sequences, e.g. by locating common\nsegments between a set of sequences, transfering annotations between identical\nregions, or highlighting differences between 2 sequences. Used to factorize\nBLAST searches, optimize cloning strategies, transfer annotations\nfrom parts to constructs, compare sequence versions, etc.\n")])]),s("project",{attrs:{img:"/static/imgs/logos/bandwagon.png",title:"BandWagon",subtitle:"Band patterns plotter and simulator",source:"https://github.com/Edinburgh-Genome-Foundry/Bandwagon",docs:"https://edinburgh-genome-foundry.github.io/BandWagon/",demo:"https://cuba.genomefoundry.org/predict-digestions"}},[s("div",{attrs:{slot:"summary"},slot:"summary"},[t._v("Python library to simulate DNA digestion by restriction enzymes and plot\ndigestion patterns. Useful for prediciting experimental results or for\ndisplaying results from digital fragment analyzers.\n\n")])]),s("project",{attrs:{title:"EGF CUBA",subtitle:"Web Collection of Useful Bio Apps",img:"/static/imgs/logos/cuba.png",source:"https://github.com/Edinburgh-Genome-Foundry/CUBA",website:"https://cuba.genomefoundry.org"}},[s("div",{attrs:{slot:"summary"},slot:"summary"},[t._v("Collection of publicly available one-page applications for DNA assembly\nand synthetic biology: restriction digest design, cloning simulation,\nsequence optimization, and more. Now with 20+ apps, and counting.\n")])]),s("project",{attrs:{img:"/static/imgs/logos/smart_ass.png",title:"Smart Assembly",website:"https://smartass.genomefoundry.org",subtitle:"Web apps for Foundry operators"}},[s("div",{attrs:{slot:"summary"},slot:"summary"},[t._v("Collection of tailor-made web apps to help the Foundry operators through\nDNA assembly projects: automatic\npicklist generation, enzyme selection, and sequence validation for batches\nof DNA assemblies, communication between computers, parts repository browsing,\netc. The website is not public (but you can ask us for a demo !).\n")])]),s("project",{attrs:{img:"/static/imgs/logos/file_manager.png",title:"The EGF File Manager",subtitle:"Because USB sticks are not fun"}},[s("div",{attrs:{slot:"summary"},slot:"summary"},[t._v("Server configuration to transmit files between personal computers, web\napplications, and the Foundry's robots, in a traceable and secure way.\nThis project is not currently public (ask us about it!).\n")])]),s("project",{attrs:{img:"/static/imgs/logos/taskpacker.png",title:"TaskPacker",subtitle:"A generic scheduler for Python",source:"https://github.com/Edinburgh-Genome-Foundry/TaskPacker",docs:"https://edinburgh-genome-foundry.github.io/Taskpacker/",githubStars:{repo:"Taskpacker"}}},[s("div",{attrs:{slot:"summary"},slot:"summary"},[t._v("Python project to model tasks and processes and optimize the schedules of\nrepetitive processes in order to predict factory throughputs.\n")])]),s("project",{attrs:{img:"/static/imgs/logos/saboteurs.png",title:"Saboteurs",githubStars:{repo:"Saboteurs"},subtitle:"Indentify faulty genetic parts",source:"https://github.com/Edinburgh-Genome-Foundry/saboteurs"}},[s("div",{attrs:{slot:"summary"},slot:"summary"},[t._v('Saboteurs can use statistical and logical methods to detect genetic parts\nassociated with assembly failure (and therefore possibly corrupted)\nbased on experimental assembly data. It can also design "test batches"\nto check a set of parts and identify bad elements using a minimum of\ntest assemblies.\n')])]),s("project",{attrs:{img:"/static/imgs/logos/icebreaker.png",title:"Icebreaker",subtitle:"Python interface to JBEI ICE",source:"https://github.com/Edinburgh-Genome-Foundry/icebreaker",docs:"https://edinburgh-genome-foundry.github.io/icebreaker"}},[s("div",{attrs:{slot:"summary"},slot:"summary"},[t._v("Provides a Python client to manage parts and samples in an instance of the\n"),s("a",{attrs:{href:"https://github.com/JBEI/ice"}},[t._v("JBEI ICE")]),t._v(" parts repository system.\nMakes it easy to open different sessions under\ndifferent identities, cache results, mass-import or export data, etc.\n")])]),s("project",{attrs:{img:"/static/imgs/logos/blabel.png",title:"Blabel",subtitle:"Printable labels generator",source:"https://github.com/Edinburgh-Genome-Foundry/blabel",docs:"https://edinburgh-genome-foundry.github.io/blabel",githubStars:{repo:"blabel"}}},[s("div",{attrs:{slot:"summary"},slot:"summary"},[t._v("Python library to create PDFs which can be printed into sticky labels.\nEasy barcode, QR-code, datamatrix generation, date formatting, layout\ndefinition with HTML/CSS, and label data input with spreadsheets.\n")])]),s("project",{attrs:{id:"kappagate",img:"/static/imgs/logos/kappagate.png",title:"Kappagate",subtitle:"Clone success rate prediction",demo:"https://cuba.genomefoundry.org/predict-bad-clone-rates",githubStars:{repo:"kappagate"},source:"https://github.com/Edinburgh-Genome-Foundry/kappagate"}},[s("div",{attrs:{slot:"summary"},slot:"summary"},[t._v("Kappagate combines experimental misannealing data\n("),s("a",{attrs:{href:"https://www.biorxiv.org/content/early/2018/05/15/322297"}},[t._v("Potapov et. al")]),t._v(")\nand "),s("a",{attrs:{href:""}},[t._v("Kappa")]),t._v(" simulations to predict the proportion of valid clones\n(vs. clones harbouring wrong, misannealed constructs) in type-2S assemblies\n(Golden Gate, OGAB, etc). Used to detect assemblies with\nlow chances of success, or estimate colonies to pick to find valid clones.\n")])]),t._m(5),s("project",{attrs:{img:"/static/imgs/logos/proglog.png",title:"Proglog",subtitle:"A versatile progress logger for Python",githubStars:{repo:"proglog"},source:"https://github.com/Edinburgh-Genome-Foundry/proglog"}},[s("div",{attrs:{slot:"summary"},slot:"summary"},[t._v("Proglog is used as a unified progress logger in most computational\nprojects of the EGF. It enables to display progress in console error bars,\nHTML error bars for the IPython notebook, or to send progress data to\ndistant servers.\n")])]),s("project",{attrs:{img:"/static/imgs/logos/flametree.png",title:"Flametree",subtitle:"Zip and folder operations made easy",githubStars:{repo:"Flametree"},source:"https://github.com/Edinburgh-Genome-Foundry/Flametree"}},[s("div",{attrs:{slot:"summary"},slot:"summary"},[t._v("Python library to simplify file operations, in particular when zip archives\nare involved. Largely used on the EGF web servers for the creation of zip\narchives "),s("i",[t._v("in memory")]),t._v(".\n")])]),s("project",{attrs:{img:"/static/imgs/logos/cab.png",title:"CAB",subtitle:"A friendly boilerplate for computational apps",source:"https://github.com/Edinburgh-Genome-Foundry/CAB"}},[s("div",{attrs:{slot:"summary"},slot:"summary"},[t._v("CAB provides an easy way to deploy websites where users can fill\na form and get computational jobs done, and is used accross several EGF\nwebsites (CUBA, SmartAss. EGF-DAB). Built with VueJS on the frontend, Python/Django\non the backend, and Docker for integration.\n")])]),s("project",{attrs:{img:"/static/imgs/logos/pdf_reports.png",title:"PDF Reports",subtitle:"Easy and clean PDF reports generation",source:"https://github.com/Edinburgh-Genome-Foundry/pdf_reports",githubStars:{repo:"pdf_reports"},docs:"http://edinburgh-genome-foundry.github.io/pdf_reports/"}},[s("div",{attrs:{slot:"summary"},slot:"summary"},[t._v("Python module to generate PDF reports using Pug templates, an the\nSemantic UI CSS framework.\n")])]),s("project",{attrs:{img:"/static/imgs/logos/bioprinter.png",title:"BioPrinter",subtitle:"Print pictures using colored micro-organisms!",docs:"http://edinburgh-genome-foundry.github.io/bioprinter/",githubStars:{repo:"bioprinter"},source:"https://github.com/Edinburgh-Genome-Foundry/bioprinter"}},[s("div",{attrs:{slot:"summary"},slot:"summary"},[t._v("Python module to "),s("i",[t._v("print")]),t._v(" living art pictures using pigmented yeast or\nbacteria. After an original project by Mike Shen (Boeke Lab).\n")])]),s("project",{attrs:{img:"/static/imgs/logos/topkappy.png",title:"Topkappy",subtitle:"Pythonic bindings for the Kappa language",githubStars:{repo:"topkappy"},source:"https://github.com/Edinburgh-Genome-Foundry/topkappy"}},[s("div",{attrs:{slot:"summary"},slot:"summary"},[t._v("Python module to easily create, run and analyze biological complexation\nsimulations using the "),s("a",{attrs:{href:"https://kappalanguage.org/"}},[t._v("Kappa language")]),t._v(".\nUsed in "),s("a",{attrs:{href:"#kappagate"}},[t._v("Kappagate")]),t._v(" to easily define hundreds of\ninteractions between DNA fragments.\n")])]),s("project",{attrs:{title:"Other Github repositories",subtitle:"...too small to have a logo"}},[s("div",{staticClass:"other-repos",attrs:{slot:"summary"},slot:"summary"},[s("p",[s("a",{attrs:{href:"https://github.com/Edinburgh-Genome-Foundry/egf-shared-documents"}},[t._v("EGF software slideshows and other documents")]),t._v(".")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/Edinburgh-Genome-Foundry/egf-slides"}},[t._v("Web slides about the EGF")])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/Edinburgh-Genome-Foundry/codon-usage-tables"}},[t._v("Coder-friendly codon usage tables")]),t._v(".")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/Edinburgh-Genome-Foundry/igem-registry-downloader"}},[t._v("Scripts to download the iGEM database")]),t._v(".")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/Edinburgh-Genome-Foundry/tatapov"}},[t._v("Overhang annealing data for Python (from Potapov et al.)")]),t._v(".")])])]),t._m(6),s("project",{attrs:{img:"/static/imgs/logos/leaf_lims.png",title:"LEAF LIMS",subtitle:"A LIMS for Synthetic Biology",docs:"https://leaflims.github.io/",source:"https://github.com/LeafLIMS/LeafLIMS",paper:"http://pubs.acs.org/doi/abs/10.1021/acssynbio.7b00212"}},[s("div",{attrs:{slot:"summary"},slot:"summary"},[t._v("This Synbio-focused Laboratory information Management System was developed\nby GeneMill (Liverpool) in collaboration with the Earlham Institute and the\nEdinburgh Genome Foundry, who provided initial input and testing.\n")])]),s("project",{attrs:{img:"/static/imgs/logos/genetic_constructor.png",title:"Autodesk Genetic Constructor",subtitle:"A web-based toolkit for synthetic biology",paper:"http://pubs.acs.org/doi/full/10.1021/acssynbio.7b00236"}},[s("div",{attrs:{slot:"summary"},slot:"summary"},[t._v("(Discontinued in 2018) This sequence designer with modern features such as\nnested constructs, templates, and the possibility to browse external part\nrepositories, was started in 2015 as a collaboration between Autodesk and\nthe EGF. We provided initial input in specifications, software design,\nand a web API to order directly from the EGF via Genetic Constructor.\n")])]),s("myfooter")],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("The "),s("a",{attrs:{target:"_blank",href:"http://genomefoundry.org/"}},[t._v("Genome Foundry")]),t._v("\nis an academic facility running a highly automated robotic setup for DNA\nassembly automation. The software team develops computational libraries\nand web applications for DNA design and assembly, Lab Automation, and more.\nMost of our software is open-source and released\n"),s("a",{attrs:{target:"_blank",href:"https://github.com/Edinburgh-Genome-Foundry"}},[t._v("on Github")]),t._v(".\n")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"alert"},[s("h3",[t._v("Join us!")]),s("p",[t._v("We are always happy to hear about software developers with a passion for\nsynthetic biology or lab automation. If you are interested in developing\nnice, reusable software at a pioneering DNA facility,\n"),s("a",{attrs:{href:"mailto:egf-software@ed.ac.uk?cc=hille.tekotte@ed.ac.uk, valentin.zulkower@ed.ac.uk&body=Hello EGF team!&subject=I want to join!"}},[t._v("get in touch !")])]),s("p",{staticStyle:{"text-align":"center"}},[s("a",{attrs:{href:"https://www.vacancies.ed.ac.uk/pls/corehrrecruit/erq_jobspec_version_4.jobspec?p_id=046558"}},[t._v("Apply")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"header-links"},[s("h3",[t._v("Categories")]),s("a",{attrs:{href:"#design"}},[t._v("Design")]),s("br"),s("a",{attrs:{href:"#build"}},[t._v("Build")]),s("br"),s("a",{attrs:{href:"#other"}},[t._v("Generic software")]),s("br"),s("a",{attrs:{href:"#collaborations"}},[t._v("Collaborations")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"category",attrs:{id:"design"}},[t._v("Design "),s("hr")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"category",attrs:{id:"build",name:"manufacturing"}},[t._v("Build "),s("hr")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"category",attrs:{id:"other"}},[t._v("Generic Software "),s("hr")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"category",attrs:{id:"collaborations"}},[t._v("Collaborations "),s("hr")])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"weblinks-bar"},[t.tweetMessage?s("a",{staticClass:"tweet",attrs:{href:t.twitterHref}},[s("img",{attrs:{src:"/static/imgs/icons/twitter.svg"}}),t._v(" Tweet")]):t._e(),t.emailSubject?s("a",{staticClass:"email",attrs:{href:t.emailHref}},[s("img",{attrs:{src:"/static/imgs/icons/email.svg"}}),t._v(" Send feedback")]):t._e()])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"project-div"},[s("img",{staticClass:"project-logo",attrs:{src:t.img}}),t.title?s("h3",{staticClass:"title"},[t._v(t._s(t.title))]):t._e(),t.title?s("h4",{staticClass:"subtitle"},[t._v(t._s(t.subtitle))]):t._e(),s("div",{staticClass:"links"},[t.website?s("a",{staticClass:"website",attrs:{href:t.website,target:"_blank"}},[t._v("Website")]):t._e(),t.demo?s("a",{staticClass:"demo",attrs:{href:t.demo,target:"_blank"}},[t._v("Demo")]):t._e(),t.paper?s("a",{staticClass:"paper",attrs:{href:t.paper,target:"_blank"}},[t._v("Paper")]):t._e(),t.docs?s("a",{staticClass:"docs",attrs:{href:t.docs,target:"_blank"}},[t._v("Docs")]):t._e(),t.source?s("a",{staticClass:"source",attrs:{href:t.source,target:"_blank"}},[t._v("Source")]):t._e(),t.githubStars?s("span",{staticClass:"github-stars"},[s("iframe",{attrs:{src:"https://ghbtns.com/github-btn.html?user="+(t.githubStars.user||"edinburgh-genome-foundry")+"&repo="+t.githubStars.repo+"&type=star&count=true&size=small",frameborder:"0",scrolling:"0",width:"90px",height:"30px"}})]):t._e()]),s("p",{staticClass:"summary"},[t._t("summary")],2)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",[s("div",{staticClass:"container"}),s("p",{staticClass:"center"},[s("img",{attrs:{src:"/static/imgs/logos/egf-codon-horizontal.png",width:"190"}}),s("br"),t._v("© Edinburgh Genome Foundry, 2018 "),s("br"),t._v("\nThe EGF is supported by the Research Councils UK and University of Edinburgh")])])}]}}],[7]);