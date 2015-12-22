# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create([
  {email: 'vader@empire.gov', username: "Darth Vader", password: "ihaveyounow"},
  {email: 'emperor@empire.gov', username: "Da Emperor", password: "sithrule"},
  {email: 'mofftarkin@empire.gov', username: "Grand Moff Tarkin", password: 'tarkindoctrine'},
  {email: 'warfield@impnavy.mil', username: "Admiral Warfield", password: 'hockaleg'},
  {email: 'leth@impscience.gov', username: 'Umak Leth', password: 'science!'},
  {email: 'jerjerrod@empire.gov', username: 'Moff Jerjerrod', password: 'deathstar2'},
  {email: 'gahg@empire.gov', username: 'Finance Minister Gahg', password: 'mrovermc'},
  {email: 'veers@imparmy.mil', username: "General Veers", password: 'walkingthunder'},
  {email: 'tk-421@stc.mil', username: "Stormtrooper TK-421", password: 'feelingalittleshort'},
  {email: 'tonth@impsurvey.gov', username: "Captain Tonth", password: 'explorerreporting'},
  {email: 'grandinquisitor@inquisitorius.gov', username: "Grand Inquisitor", password: "jedihunting"},
  {email: 'jabba@tatooine.hutt', username: "The Great Jabba", password: 'youlllearntoloveme'},
  {email: 'cody@gar.mil', username: "Commander Cody", password: 'grandarmyoftherepublic'},
  {email: 'cowall@impculture.gov', username: 'Cultural Minister Cowall', password: 'highwinds'}
])

Image.create([
  {imageable_id: '1', imageable_type: 'Project', image_public_id: 'f9amikzhv71is3s9wj0f'},
  {imageable_id: '1', imageable_type: 'Project', image_public_id: 'asrjx9xhcijyrjesvfhd'},
  {imageable_id: '1', imageable_type: 'Project', image_public_id: 'yfy0ylot8hrvppittm6w'},

  {imageable_id: '2', imageable_type: 'Project', image_public_id: 'Tarkin_front_and_side.png_kacd5o.webp'},
  {imageable_id: '2', imageable_type: 'Project', image_public_id: 'The_Tarkin_by_Stephan_Martiniere.jpg_fide9w'},
  {imageable_id: '2', imageable_type: 'Project', image_public_id: 'OooPrettyColors-MSW52.jpg_iongbl'},
  {imageable_id: '2', imageable_type: 'Project', image_public_id: 'The_Tarkin_dlyhzx'},

  {imageable_id: '3', imageable_type: 'Project', image_public_id: 'SunCrusher_egvv_p4ktdg'},
  {imageable_id: '3', imageable_type: 'Project', image_public_id: 'Sun_Crusher-NEGWT_axp0u0'},

  {imageable_id: '4', imageable_type: 'Project', image_public_id: 'Galaxygun_negwt_nwy0mz'},
  {imageable_id: '4', imageable_type: 'Project', image_public_id: 'ParticleDisintegratorWarhead-HBDE.jpg_gmuxyv'},
  {imageable_id: '4', imageable_type: 'Project', image_public_id: 'Galaxy_Gun_egwt_jtabpz'},

  {imageable_id: '5', imageable_type: 'Project', image_public_id: 'World_Devastators.jpg_q9wwbr'},
  {imageable_id: '5', imageable_type: 'Project', image_public_id: 'Worlddevs_pso3q2'},
  {imageable_id: '5', imageable_type: 'Project', image_public_id: 'WD_NEGWT_hwt8xj'},

  {imageable_id: '6', imageable_type: 'Project', image_public_id: 'EclipseHangsOminouslyInSpace-FoC_zzzypr'},
  {imageable_id: '6', imageable_type: 'Project', image_public_id: 'Eclipse_schem.jpg_cmea9m'},
  {imageable_id: '6', imageable_type: 'Project', image_public_id: 'Eclipsepro.jpg_xvrhrl'},

  {imageable_id: '7', imageable_type: 'Project', image_public_id: 'MalachorV_aunht3'},

  {imageable_id: '8', imageable_type: 'Project', image_public_id: 'StarForgeSucksGas-KOTOR1_lrgskv'},

  {imageable_id: '9', imageable_type: 'Project', image_public_id: 'RiddellTKBP.jpg_ggux2w'},
  {imageable_id: '9', imageable_type: 'Project', image_public_id: 'Stormarmor_negwt_eokodh'},

  {imageable_id: '10', imageable_type: 'Project', image_public_id: 'TIE_Defender_ciusnb'},

  {imageable_id: '11', imageable_type: 'Project', image_public_id: 'Personal-shield_negwt_ksuslx'},
  {imageable_id: '11', imageable_type: 'Project', image_public_id: 'PersonalShields-SWIA_jeh1kl'},

  {imageable_id: '12', imageable_type: 'Project', image_public_id: 'Deep_Core_m80hyc'},

  {imageable_id: '13', imageable_type: 'Project', image_public_id: 'Unknown_Regions_kxrghx'},

  {imageable_id: '14', imageable_type: 'Project', image_public_id: 'KaasCity-TOR_qihbeb'},

  {imageable_id: '15', imageable_type: 'Project', image_public_id: 'Mos_Espa_AotC_hfbkfq'},

  {imageable_id: '16', imageable_type: 'Project', image_public_id: 'Grand_army_formation.jpg_vmlbzc'},

  {imageable_id: '17', imageable_type: 'Project', image_public_id: 'f73a1bfbdf6c645b4f1b3f53bf111abd_spooxc'},

  {imageable_id: '18', imageable_type: 'Project', image_public_id: 'Epguide407_qnn67r'},

  {imageable_id: '19', imageable_type: 'Project', image_public_id: 'download_4_gslbcq'},
  {imageable_id: '19', imageable_type: 'Project', image_public_id: 'download_3_f6xbdu'},

  {imageable_id: '20', imageable_type: 'Project', image_public_id: 'Executor_09_crop.jpg_bmho2g'},
  {imageable_id: '20', imageable_type: 'Project', image_public_id: 'Executor-CHRON_y79wyj'},

  {imageable_id: '21', imageable_type: 'Project', image_public_id: 'UmojanMarine_SC2-HotS_DevArt1_duw6f6'},


  {imageable_id: '1', imageable_type: 'User', image_public_id: 'oxba40nyjywfxglzhpx7'},
  {imageable_id: '2', imageable_type: 'User', image_public_id: 'emperor_zrib13'},
  {imageable_id: '3', imageable_type: 'User', image_public_id: 'Tarkininfobox_vbkwon'},
  {imageable_id: '5', imageable_type: 'User', image_public_id: 'Leth_rcba5u'},
  {imageable_id: '6', imageable_type: 'User', image_public_id: 'Jerjerrod-hd_v2fe7a'},
  {imageable_id: '8', imageable_type: 'User', image_public_id: 'GeneralVeers_Murray_TCG.jpg_awtyp4'},
  {imageable_id: '9', imageable_type: 'User', image_public_id: '1588263-tk421_hmhyze'},
  {imageable_id: '10', imageable_type: 'User', image_public_id: 'Pilia_Tonth_cvdaa1'},
  {imageable_id: '11', imageable_type: 'User', image_public_id: 'TheInquisitor_jm9iyy'},
  {imageable_id: '12', imageable_type: 'User', image_public_id: 'Jabba_SWSB_ohcth1'},
  {imageable_id: '13', imageable_type: 'User', image_public_id: 'CodyHS_gqhisg'},
])

Project.create([
  {
    title: "The Death Star",
    summary: "Moon-sized battlestation capable of destroying a planet",
    description: "Specifications: Length: 120km Width: 120km Height: 120km
    Armament: Superlaser: 1, Tractor Beams: 768, Turbolasers: 15,000, Thousands of additional small weapons emplacements
     Crew: 342,953 Imperial Navy 25,984 Stormtroopers;

     The Death Star is the ultimate weapon.  It is a battlestation with a superweapon capable of destroying a planet, and by extension any fleet that opposes it.  It possesses enough defenses to devastate an enemy fleet even without its superlaser.  It can also act as an invincible staging point for the Imperial Military, transporting and supplying entire armies.

     The Death Star will provide complete security for the citizens of the Empire.  No longer will they need live in fear of terrorists, Jedi or otherwise.
    ",
    goal_amt: 850000000000000000,
    start_date: Time.new(2015, 12, 21),
    end_date: Time.new(2016, 3, 21),
    category_id: 1,
    creator_id: 2
  },

  {
    title: "The Tarkin",
    summary: "Smaller battlestation based on the principle of the Death Star",
    description: "Specifications: Length: 42km Width: 42km Height: 70km
    Armament: Superlaser: 1, Tractor Beams: 1, Shields: Borstel Galactic Defense field generators
    Crew: 35,705 Operational staff, 8,158 Gunners, 105,417 Stormtroopers

    The Death Star is certainly powerful, but it is also wasteful and overly expensive.  It wastes quadrillions on minor weapon emplacements that are ultimately secondary to its purpose.  The Imperial Navy can provide defense against enemy fleets and transport for our troops.  A superweapon need not be everything.

    The Tarkin is designed to be a cost-efficient but equally effective solution.  It carries only the essentials to the principle of the Death Star: the superlaser that can crush all resistance.  It is protected not by thousands of small guns but by a powerful set of shields that will render said guns unnecessary.

    The Tarkin can provide the same security at the Death Star, but at a price that won't break the budget.",
    goal_amt: 250000000000000000,
    start_date: Time.new(2015, 12, 21),
    end_date: Time.new(2016, 3, 21),
    category_id: 1,
    creator_id: 4
  },

  {
    title: "The Sun Crusher",
    summary: "Fighter-sized ship capable of causing supernovas",
    description: "Specifications: Length: 13.5m
    Armament: Resonance Torpedoes: 11, Laser Cannons: 5, Tractor Beams: 1, Defense: Quantum-crystalline Armor
    Crew: 1 Pilot, 1 Primary Gunner, 4 Secondary Gunners

    Bigger is not always better.  The Sun Crusher is simulatenously more effective and more mobile than the Death Star.  Its resonance torpedoes can destroy any target, from an enemy cruiser to an entire star system.  Yet, it is no larger than a fighter, hard to detect and even harder to stop.  The enemy will never see it coming.

    Its small size will allow us to invest in Quantum-crystalline armor.  Prohibitively expensive for a larger craft, this armor will render the Sun Crusher all but indestructable.

    Choose sleek and deadly speed.  Choose the Sun Crusher.
    ",
    goal_amt: 500000000000000000,
    start_date: Time.new(2015, 12, 21),
    end_date: Time.new(2016, 3, 21),
    category_id: 1,
    creator_id: 3
  },

  {
    title: "The Galaxy Gun",
    summary: "Massive gun capable of firing through hyperspace to destroy targets across the galaxy",
    description: "Specifications: Length: 7.25km
    Armament: Particle Disintegrator Warhead Launchers: 1, Defense: Turbolasers

    Why should the Empire chase its foes around the galaxy?  Why not force them to come to us?

    With the Galaxy Gun the Empire will be able to respond to any threat, any place, any time, and all without messy and costly fleet deployments.  The Galaxy Gun can target and destroy anything in the galaxy without leaving its secure location, where we can build strong defensive emplacements.  The Galaxy Gun will immediately bring total peace and safety to our citizens, as no terrorist will be able to run or hide.
    ",
    goal_amt: 350000000000000000,
    start_date: Time.new(2015, 12, 21),
    end_date: Time.new(2016, 3, 21),
    category_id: 1,
    creator_id: 2
  },

  {
    title: "World Devastor",
    summary: "Giant Mobile Factories that rip planets apart for resources",
    description: "Specifications: Length: Varies Width: Varies Height: Varies
    Armament: Numerous Tractor Beams, Ion Cannons, Turbolasers, Gun Towers and Missle Launchers, a Molecular Furnace.  Protected by powerful shields.  Powered by a miniture black hole.
    Crew: 342,953 Imperial Navy 25,984 Stormtroopers

    What a waste.  The Death Star is immensely wasteful.  It devastates entire environments and economies, rendering them total losses.  The World Devastor is the sustainable alternative.  The World Devastor uses self sustaining black holes to power large tractor beams and a molecular furnace.  With this it can recycle a target world, using its base matter to power automated factories.  This will let us put the planet to good use, building more fleets not with the resources of the loyal, but with the resources of our enemies.

    Sure its not as fast or cool as a huge superlaser, but we have a responsibility to think about the future.  Choose sustainability.  Choose our children's future.  Choose the World Devastor.
    ",
    goal_amt: 250000000000000000,
    start_date: Time.new(2015, 12, 21),
    end_date: Time.new(2016, 3, 21),
    category_id: 1,
    creator_id: 5
  },

  {
    title: "Eclipse-class Dreadnought",
    summary: "Super Star Destroyer with a superlaser capable of cracking a planet's crust",
    description: "Specifications: Length: 17.5km
    Armament: Superlaser: 1, Tractor Beams: 100, Turbolasers: 500, Heavy Laser Cannons: 550, Ion Cannons: 75, Gravity Well Projectors: 10
    Crew: 708,470 Imperial Navy, 4,175 Gunners, 150,000 Stormtroopers

    Why do we need to build entirely new devices?  Why not utilize the expertise and engineering the Imperial Navy has developed over decades?

    The Eclipse-class Dreadnought leverages all of our ship building experience by integrating a superlaser into a Super Star Destroyer.  It will serve multiple purposes, striking fear into our enemies as per the Tarkin Doctrine, and acting as a centerpiece in our fleet when measures short of planet destruction are appropriate.

    Go with what works.  Go with honor and distinction.  Go with the Imperial Navy.
    ",
    goal_amt: 950000000000000000,
    start_date: Time.new(2015, 12, 21),
    end_date: Time.new(2016, 3, 21),
    category_id: 1,
    creator_id: 6
  },

  {
    title: "Mass Shadow Generator",
    summary: "Gravity Weapon capable of destroying an entire fleet while devstating a planet",
    description: "The Mass Shadow Generator is a historic weapon used to end the Mandalorian Wars in the days of the Old Republic.  Commissioned and used by Revan, Sith Lord and Prodigal Jedi Knight, it utilized the gravitational anomalies around Malachor V to wipe out the Mandalorian Fleet, a blow they never recovered from to this day.  There were, however, plans to generalize the weapon to be used on any planet.  I believe with today's technology it would be a simple matter to reconstruct this weapon, which could wipe out an enemy fleet in a single strike as opposed to say a superlaser.
    ",
    goal_amt: 1000000000000000,
    start_date: Time.new(2015, 12, 21),
    end_date: Time.new(2016, 3, 21),
    category_id: 1,
    creator_id: 5
  },

  {
    title: "The Star Forge",
    summary: "Battlestation and super-factory that can produce infinite armadas",
    description: "The Star Forge was the crowning achievement of the Infinite Empire, a powerful pre-Republic civilization of Force-wielders.  It draws power and mass from any nearby star in order to power extremely rapid factories.  It could produce entire fleets in a very short period of time.

    Destructive superweapons are impressive but ultimately inefficient.  We should not be destroying our resources, but instead focus on creating new ones.  The Death Star and other weapons are expenses.  The Star Forge is an investment that will give back more than it took.

    For the superweapon that will bring not just peace but also prosperity, fund the Star Forge.
    ",
    goal_amt: 950000000000000000,
    start_date: Time.new(2015, 12, 21),
    end_date: Time.new(2016, 3, 21),
    category_id: 1,
    creator_id: 5
  },

  {
    title: "Better Stormtrooper Helmets",
    summary: "Improve the accuracy and survivability of our troops",
    description: "The Stormtroopers are our elite special forces.  The first and last line of defense against those that seek to terrorize our citizens.

    Why, then, do we give them such bad helmets?

    We have heard multiple reports from our troopers that they have trouble seeing out of their helmets, and many stories of unfortunate and accidental collateral damage as a result.  I propose that we raise money to develop a new helmet, one that will allow our troops to aim more accurately and take down our enemies more efficiently.

    Support our troops.  Fund better helmets.
    ",
    goal_amt: 100000000000000,
    start_date: Time.new(2015, 12, 21),
    end_date: Time.new(2016, 3, 21),
    category_id: 2,
    creator_id: 8
  },

  {
    title: "TIE/D Defender",
    summary: "Advanced Starfighter",
    description: "The terrorists have demonstrated extreme cowardice in the face of our fleets.  They flee whenever confronted, striking only where we are not.

    New threats call for new tactics.  As such, I am proposing a new addition to our fleet: the TIE/D Defender.

    The TIE/D Defender will be high-performance TIE Fighter designed to operate independantly from our fleets.  It will be equipped with a hyperdrive and deflector shields while maintaining the heavy firepower and extreme agility characteristic of our TIEs.  This will allow it to respond to any terrorist threat quickly and decisively, being strategically mobile and tactically superior.

    Stop the terrorists wherever they strike.  Fund the TIE/D Defender.
    ",
    goal_amt: 100000000000000,
    start_date: Time.new(2015, 12, 21),
    end_date: Time.new(2016, 3, 21),
    category_id: 3,
    creator_id: 6
  },

  {
    title: "Personal Energy Shields",
    summary: "Protection from blasters and other energy based weapons",
    description: "
    The Imperial Army has long been lacking in personal protection.  Stormtrooper armor is surprisingly ineffective against modern blasters, even handheld ones.  We need something stronger.

    I have done some research and discovered the widespread use of personal energy shields in the days of the Old Republic.  They were so ubiquitous and effective that Old Republic soldiers had to be trained with vibroblades or else slaughtered by a single opponent with an energy shield.

    The Old Republic designs are no longer effective due to the increased power of modern blasters.  Most shields powerful enough to be effective would release deadly amounts of radiation.  However, I am developing a new, advanced design.  It will use rapid shield rotation to disperse and deflect energy at angles rather than directly, and contain special capacitors in order to absorb energy rather than resisting it.  These should allow stormtroopers to safely utilize the personal energy shields, granting them protection from both blasters and the occasional lightsaber antique.
    ",
    goal_amt: 1000000000000,
    start_date: Time.new(2015, 12, 21),
    end_date: Time.new(2016, 3, 21),
    category_id: 4,
    creator_id: 5
  },



  {
    title: "Rechart the Deep Core",
    summary: "Find reliable paths into the heart of the galaxy",
    description: "
      The Deep Core is a treacherous place.  Massive stars and blackholes make charting hyperspace routes difficult.  However, the Deep Core is rumored to have many habitable worlds, some of great historic importance.  I would like to put together a team to find a way into the Deep Core and find out the truth behind these rumors.",
    goal_amt: 100000000000,
    start_date: Time.new(2015, 12, 21),
    end_date: Time.new(2016, 3, 21),
    category_id: 7,
    creator_id: 10
  },

  {
    title: "Chart the Unknown Regions",
    summary: "Explore new sectors and worlds",
    description: "
        There is a large portion of the galaxy that after thousands of years of space travel is still unexplored.  I would like to put together a team to venture into said region and discover new worlds.
      ",
    goal_amt: 100000000000,
    start_date: Time.new(2015, 12, 21),
    end_date: Time.new(2016, 3, 21),
    category_id: 7,
    creator_id: 10
  },

  {
    title: "Find Dromund Kaas",
    summary: "Find the capital of the ancient Sith Empire",
    description: "
      Dromund Kaas was the capital city of the first Sith Empire.  Unlike Korriban, its location was lost long ago.  I believe it is therefore untouched by time and looters.  We should mount an expedition immediately to secure its power lest an enemy of the Empire arrive there first.
    ",
    goal_amt: 100000000000,
    start_date: Time.new(2015, 12, 21),
    end_date: Time.new(2016, 3, 21),
    category_id: 8,
    creator_id: 11
  },

  {
    title: "Hotel Tatooine",
    summary: "Bu investment see wa sicieia",
    description: "Nan bo, nan tytung. Bu cakanle Jabba kanieh uba bai chalankbana du Yakai Hokaaen. Yoieu koumhaptecee doi bu kouiohe see mee danko an gee uahloba du bu bin du tah dhiuox'a tam jedahkacs bmala mee. Natmahconza dah jaa whonbola an neu bu neu cay nagoza-ah dah Jabba baa see'ybark! Tah doth ba makacheesa uba caiot tee san bai konpa!",
    goal_amt: 1000000000000,
    start_date: Time.new(2015, 12, 21),
    end_date: Time.new(2016, 3, 21),
    category_id: 9,
    creator_id: 12
  },

  {
    title: "Return to the Clones",
    summary: "Bring back the best soldiers",
    description: "
    Under Regulation 5.3, I must report a grave misconduct by my superiors.  Specifically: replacing our very best soldiers with subpar amateurs.

    The Grand Army of the Republic was the most powerful army this galaxy's ever seen, and that was because of us, the clones.  We defeated the Separatists.  We ended the Clone Wars.  We defeated the Jedi who betrayed us.  We kept the peace afterwards.

    Yet, our superiors seem to think we can be replaced.  I've noticed a steady decline in the competency of the Imperial Military ever since we stopped using the clones.  The stormtroopers who replaced us are, bluntly, terrible.

    Save the Imperial military from disaster before it's too late.  Bring us back.
    ",
    goal_amt: 10000000000000,
    start_date: Time.new(2015, 12, 21),
    end_date: Time.new(2016, 3, 21),
    category_id: 2,
    creator_id: 13
  },

  {
    title: "Durasteel Man",
    summary: "Live action adaptation of popular Wonder Comics character",
    description: "
      Stato Cebos, billionaire weapon-designing genius, has it all.  He has the brains, the money, the fame, the life.  But everything changes when he's captured by a group of villainous Rebels.
      ",
    goal_amt: 100000000,
    start_date: Time.new(2015, 12, 21),
    end_date: Time.new(2016, 3, 21),
    category_id: 5,
    creator_id: 14
  },

  {
    title: "Saving CT-3516",
    summary: "A war drama set in the Invasion of Umbara",
    description: "
      Arc Trooper 5555 takes his men behind enemy lines to save CT-3516, whose squad is killed.
      ",
    goal_amt: 100000000,
    start_date: Time.new(2015, 12, 21),
    end_date: Time.new(2016, 3, 21),
    category_id: 5,
    creator_id: 14
  },

  {
    title: "Mining on Ilum",
    summary: "Funding mining operations on a new planet",
    description: "
      The recently rediscovered, former Jedi world of Ilum is a treasure trove of rare crystal deposits.  A mining operation there could be highly lucrative, despite the hostile environment.
    ",
    goal_amt: 1000000000000,
    start_date: Time.new(2015, 12, 21),
    end_date: Time.new(2016, 3, 21),
    category_id: 6,
    creator_id: 7
  },

  {
    title: "Executor-Class Super Star Destroyer",
    summary: "State of the art Dreadnought",
    description: "The terrorists have proven highly resourceful.  They are increasingly well armed, posing a threat to our fleets, our soldiers, and our people.  We will need to continue to update our fleets to ensure our superiority over these threats.
    The Executor will be a new super Star Destroyer.  It will dwarf even our current Star Destroyers in both size and capabilities, and therefore can immediately shut down anything the Rebels bring to bear.
    ",
    goal_amt: 10000000000000000,
    start_date: Time.new(2015, 12, 21),
    end_date: Time.new(2016, 3, 21),
    category_id: 3,
    creator_id: 6
  },

  {
    title: "Stormtrooper Powered Combat Armor",
    summary: "Increase the strength of our troops",
    description: "
    The Stormtroopers are our elite, the best of the best.  Yet, they are only men.

    With the Powered Combat Armor they will become more. This armor will allow our troops not only to survive more attacks, but also carry more and larger weapons, increasing their firepower as well.  A single troop with this armor can do the work of an entire squad.

      Best of all, this armor will be cheap and easy to mass produce.  Once the prototypes are developed, I believe we can equip all our troops with this kind of armor.
    ",
    goal_amt: 1000000000000,
    start_date: Time.new(2015, 12, 21),
    end_date: Time.new(2016, 3, 21),
    category_id: 4,
    creator_id: 5
  },



])

Category.create([
  {name: 'Superweapons'},
  {name: 'Imperial Army'},
  {name: 'Imperial Navy'},
  {name: 'Technology'},
  {name: 'Culture'},
  {name: 'Economy and Infrastructure'},
  {name: 'Exploration'},
  {name: "Mysteries of the Force"},
  {name: "Private Projects"}
])

Backing.create([
  {backer_id: 1, project_id: 1, amount: 100000000000000000},
  {backer_id: 3, project_id: 1, amount: 10000000000000000},
  {backer_id: 4, project_id: 1, amount: 100000000000000000},
  {backer_id: 5, project_id: 1, amount: 100000000000000000},
  {backer_id: 6, project_id: 1, amount: 100000000000000000},
  {backer_id: 7, project_id: 1, amount: 100000000000000000},
  {backer_id: 8, project_id: 1, amount: 100000000000000000},
])

Comment.create([
  {author_id: 2, project_id: 1, body: "Good, good.  Let the funds flow through you!"},
  {author_id: 1, project_id: 1, body: "Yes, my master"},
  {author_id: 13, project_id: 9, body: "It's not the helmets."},
  {author_id: 8, project_id: 9, body: "A bit bitter, are we Cody?"}
])
