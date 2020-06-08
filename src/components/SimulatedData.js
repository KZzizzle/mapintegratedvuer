/* eslint-disable no-alert, no-console */
function getGenericMarkerInfo(term ,label, dataset, scaffold, simulations) {
  let data = {};
  if (label)
    data.title = label;
  else
    data.title = term;
  data.description = "";
  data.actions = [];
  if (label) {
    if (dataset) {
      data.actions.push(
        {
          title: "View dataset",
          label: "dataset",
          resource: dataset,
          type: "URL"
        }
      );
    }
    if (scaffold) {
      // temporary changes to get circleon flatmap to response
      if (scaffold == "heart") {
        data.actions.push(
          {
            title: "View 3D scaffold",
            label: "Heart",
            resource: "https://mapcore-bucket1.s3-us-west-2.amazonaws.com/others/29_Jan_2020/heartICN_metadata.json",
            type: "Scaffold"
          }
        );
      }
    }
    if (simulations) {
      if (simulations[0]) {
        data.actions.push(
          { 
            title: "View simulation",
            label: "simulation",
            resource: simulations[0],
            type: "URL"
          }
        );
      } else {
        if (label == "Heart"){
          data.actions.push(
            {
              title: "View control diagram",
              label: "Kember",
              resource: "ABI:1000001",
              type: "Flatmap",
              minZoom: 5,
              pathControls: false,
              datasetTitle: "Kember control diagram",
              datasetUrl: "https://pubmed.ncbi.nlm.nih.gov/28692680/?from_term=Kember+G%5Bau%5D&from_pos=2"
            },
            { 
              title: "View simulation",
              label: "simulation",
              resource: "https://sparc.science/datasets/78?type=simulation",
              type: "URL"
            }
            
          );
        }
      }
    }
    data.actions.push(
      {
          title: "Search for dataset",
          label: "dataset",
          resource: "https://sparc.science/data?type=dataset&q=" + label,
          type: "URL"
      }
    );
  } else {
    data.actions = [];
  }
  return data;
}

function getRatData(term, label, dataset, scaffold, simulations) {
  if (term || label) {
    let data = {};
    switch (term) {
      case "UBERON:0000948":
      case "UBERON:0002080":
      case "UBERON:0002084":
        if (!simulations) {
          data.title = "Mapping of ICN Neurons in a 3D Rat Heart";
          data.description = "The distribution of neurons in the intrinsic cardiac nervous system (ICN) were mapped and visualized in a 3D reconstruction of a male rat heart.";
          data.actions = [
            {
              title: "View 3D scaffold",
              label: "Heart",
              resource: "https://mapcore-bucket1.s3-us-west-2.amazonaws.com/others/29_Jan_2020/heartICN_metadata.json",
              type: "Scaffold"
            },
            {
              title: "View 3D scaffold with ICN data",
              label: "Heart",
              resource: "https://mapcore-bucket1.s3-us-west-2.amazonaws.com/rat_hearts/may-15-integrated/integrated_heart_may_metadata.json",
              type: "Scaffold"
            },
            {
              title: "Search for dataset",
              label: "Heart",
              resource: "https://sparc.science/data?type=dataset&q=heart",
              type: "URL"
            }
          ];
        } else {
          data = getGenericMarkerInfo(term, label, dataset, scaffold, simulations);
        }
        break;
      case "UBERON:0001155":
        data.title = "Colon";
        data.description = "";
        data.actions = [
          {
            title: "View 3D scaffold",
            label: "Colon",
            resource: "https://mapcore-bucket1.s3-us-west-2.amazonaws.com/Generic+Scaffold/Colon/mouse_time/mouseColon_metadata.json",
            type: "Scaffold"
          },
          {
            title: "Search for dataset",
            label: "Heart",
            resource: "https://sparc.science/data?type=dataset&q=colon",
            type: "URL"
          },
        ];
        break;
        case "UBERON:0001255":
          data.title = "Urinary Bladder";
          data.description = "";
          data.actions = [
            {
              title: "View 3D scaffold",
              label: "Bladder",
              resource: "https://mapcore-bucket1.s3-us-west-2.amazonaws.com/bladder/rat/rat_bladder_metadata.json",
              type: "Scaffold"
            },
            {
              title: "Search for dataset",
              label: "Heart",
              resource: "https://sparc.science/data?type=dataset&q=bladder",
              type: "URL"
            },
          ];
        break;
        case "UBERON:0002048":
          data.title = "Lung";
          data.description = "";
          data.actions = [
            {
              title: "View 3D scaffold",
              label: "Lung",
              resource: "https://mapcore-bucket1.s3-us-west-2.amazonaws.com/lungs/28-may/lung_metadata.json",
              type: "Scaffold"
            },
            {
              title: "Search for dataset",
              label: "Heart",
              resource: "https://sparc.science/data?type=dataset&q=lung",
              type: "URL"
            },
          ];
          break;
      case "ICN":
        data.title = "RNA";
        data.description = "The distribution of neurons in the intrinsic cardiac nervous system (ICN) were mapped and visualized in a 3D reconstruction of a male rat heart.";
        data.actions = [
          {
            title: "View plot",
            label: "ICN",
            resource: "https://mapcore-bucket1.s3-us-west-2.amazonaws.com/ISAN/csv-data/use-case-4/RNA_Seq.csv",
            type: "Plot",
            plotType: "heatmap",
            datasetTitle: "Molecular Phenotype Distribution of Single Rat Intracardiac Neurons",
            datasetDescription: "Images collected from serial cryostat sectioning of a cryopreserved heart was used to reconstruct the 3D context. Transcriptional profiles taken from isolated single neurons and mapped back into the previously generated 3D context.",
            datasetUrl: "https://discover.blackfynn.com/datasets/29",
            datasetImage: "https://assets.discover.blackfynn.com/dataset-assets/29/6/revisions/1/banner.jpg"
          },
          {
            title: "Search for dataset",
            resource: "https://sparc.science/data?type=dataset&q=icn",
            type: "URL"
          }
        ];
        break;
      case "UBERON:0000945":
        data.title = "Stomach";
        data.description = "Scaffolds of the stomach";
        data.actions = [
          {
            title: "View generic stomach scaffold",
            label: "Stomach",
            resource: "https://mapcore-bucket1.s3-us-west-2.amazonaws.com/others/rat_stomach/stomach_exploding/stomach_exploding_metadata.json",
            type: "Scaffold"
          },
          {
            title: "View scaffold with fitted neurites",
            label: "Stomach",
            resource: "https://mapcore-bucket1.s3-us-west-2.amazonaws.com/ISAN/scaffold/stomach_lines/stomach_metadata.json",
            type: "Scaffold"
          },
          {
            title: "Search for dataset",
            label: "Stomach",
            resource: "https://sparc.science/data?type=dataset&q=stomach",
            type: "URL"
          }
        ];
        break;
      case "UBERON:0001759":
        if (label)
          data.title = label;
        else
          data.title = "Vagus nerve";
        data.actions = [
          {
            title: "View MRG fiber model",
            label: "Vagus nerve",
            resource: "https://models.physiomeproject.org/e/5f7",
            type: "URL"
          },
          {
            title: "Search for dataset",
            label: "Vagus nerve",
            resource: "https://sparc.science/data?type=dataset&q=vagus+nerve",
            type: "URL"
          }
        ];
        break;
      default:
        data = getGenericMarkerInfo(term, label, dataset, scaffold, simulations);
        break;
    }
    return data;
  }
  return undefined;
}

function getMouseData(term, label, dataset, scaffold, simulations) {
  if (term || label) {
    let data = {};
    switch (term) {
      case "UBERON:0001155":
        data.title = "Colon";
        data.description = "";
        data.actions = [
          {
            title: "View 3D scaffold",
            label: "Colon",
            resource: "https://mapcore-bucket1.s3-us-west-2.amazonaws.com/Generic+Scaffold/Colon/mouse_time/mouseColon_metadata.json",
            type: "Scaffold"
          },
          {
            title: "Search for dataset",
            label: "Heart",
            resource: "https://sparc.science/data?type=dataset&q=colon",
            type: "URL"
          },
        ];
        break;
      default:
        data = getGenericMarkerInfo(term, label, dataset, scaffold, simulations);
        break;
    }
    return data;
  }
  return undefined;
}

function getPigData(term, label, dataset, scaffold, simulations) {
  if (term || label) {
    let data = {};
    switch (term) {
      case "UBERON:0001155":
        data.title = "Colon";
        data.description = "";
        data.actions = [
          {
            title: "View 3D scaffold",
            label: "Colon",
            resource: "https://mapcore-bucket1.s3-us-west-2.amazonaws.com/Generic+Scaffold/Colon/pig/pigColon_metadata.json",
            type: "Scaffold"
          },
          {
            title: "Search for dataset",
            label: "Heart",
            resource: "https://sparc.science/data?type=dataset&q=colon",
            type: "URL"
          },
        ];
        break;
      default:
        data = getGenericMarkerInfo(term, label, dataset, scaffold, simulations);
        break;
    }
    return data;
  }
  return undefined;
}

export function simulatedData(term, taxonomy, label, dataset, scaffold, simulations) {
  switch (taxonomy) {
    case "NCBITaxon:10090":
      return getMouseData(term, label, dataset, scaffold, simulations);
    case "NCBITaxon:9823":
      return getPigData(term, label, dataset, scaffold, simulations);
    case "NCBITaxon:10114":
    default:
      return getRatData(term, label, dataset, scaffold, simulations);
  }
}