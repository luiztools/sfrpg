function getParameterByName(name) {
    url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

String.prototype.replaceAll = function (search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};

function FormatarAcentos(texto) {
    texto = texto.replaceAll("&aacute;", "á").replaceAll("&eacute;", "é").replaceAll("&iacute;", "í").replaceAll("&oacute;", "ó").replaceAll("&uacute;", "ú");
    texto = texto.replaceAll("&acirc;", "â").replaceAll("&ecirc;", "ê").replaceAll("&ocirc;", "ô");
    texto = texto.replaceAll("&atilde;", "ã").replaceAll("&otilde;", "õ");
    texto = texto.replaceAll("&ccedil;", "ç");
    return texto;
}

function DesformatarAcentos(texto) {
    texto = texto.replaceAll("á", "&aacute;").replaceAll("é", "&eacute;").replaceAll("í", "&iacute;").replaceAll("ó", "&oacute;").replaceAll("ú", "&uacute;");
    texto = texto.replaceAll("â", "&acirc;").replaceAll("ê", "&ecirc;").replaceAll("ô", "&ocirc;");
    texto = texto.replaceAll("ã", "&atilde;").replaceAll("õ", "&otilde;");
    texto = texto.replaceAll("ç", "&ccedil;");
    return texto;
}

function GeraHtmlLink(titulo) {
    if (titulo != null && titulo != '')
        return "<a href=\"" + GeraLinkValido(titulo) + "\" target=\"_blank\" title=\"" + titulo + "\">" + titulo + "</a>";
    else return "";
}

function GerarHtmlManobrasEspeciais(manobras) {
    var retorno = "";
    manobras = manobras.replace(new RegExp("<br\s?/?>", 'g'), "#");
    var linhas = manobras.split('#');
    var colunas = [];

    for (var x = 0; x < linhas.length; x++) {
        var s = linhas[x];
        colunas = s.split(',');
        for (var y = 0; y < colunas.length; y++){
            var s2 = colunas[y];
            if (s2.trim().length > 0)
                retorno += GeraHtmlLink(s2) + ",";
        }
        retorno += "<br />";
    }

    return retorno.replace("#", "").replace(",,", ",");;
}

function GeraLinkValido(titulo) {
    if(!titulo) return "#";
    titulo = titulo + "";

    //minimizando tudo
    titulo = titulo.trim().toLowerCase();
    //as
    titulo = titulo.replace(new RegExp("([àãâá]|&a(acute|tilde|circ);)", 'g'), "a");
    //es
    titulo = titulo.replace(new RegExp("([éê]|&e(acute|circ);)", 'g'), "e");
    //is
    titulo = titulo.replace(new RegExp("í|&eacute;", 'g'), "i");
    //os
    titulo = titulo.replace(new RegExp("([òóõô]|&o(acute|tilde|circ);)", 'g'), "o");
    //us
    titulo = titulo.replace(new RegExp("ú|&uacute;", 'g'), "u");
    //cedilhas
    titulo = titulo.replace(new RegExp("ç|&ccedil;", 'g'), "c");
    //espaços
    titulo = titulo.replace(new RegExp("[\\s\\+]", 'g'), "-");
    //+ , ; . /
    titulo = titulo.replace(new RegExp("[,;\\./:]", 'g'), "");

    return "http://www.sfrpg.com.br/post/" + titulo;
}

function PintaCaracteristica(maxCaracteristica, caracteristica) {
    if (caracteristica > 0) return "<img alt=\"" + caracteristica + "\" src=\"http://www.sfrpg.com.br/tools/sheet-img/" + caracteristica + "-bluedot.jpg\" />";
    else return "<img alt=\"Vazio\" src=\"http://www.sfrpg.com.br/tools/sheet-img/5-whitedot.jpg\" />";
}

function FontPadrao(s) {
    if (s != null && s != '')
        return "<span class=\"ArialPadrao\">" + s + "</span>";
    return '';
}

function AutoGeradorA(nome, jogador, cronica, estilo, escola, equipe, time, conceito, assinatura, forca, destreza, vigor, carisma, manipulacao,
 aparencia, percepcao, inteligencia, raciocinio, prontidao, interrogacao, intimidacao, perspicacia, manha, labia, lutacega, conducao,
  lideranca, seguranca, furtividade, sobrevivencia, arena, computador, investigacao, medicina, misterios, estilos, nomeAnt1, valorAnt1,
   nomeAnt2, valorAnt2, nomeAnt3, valorAnt3, nomeAnt4, valorAnt4, nomeAnt5, valorAnt5, nomeAnt6, valorAnt6, nomeAnt7, valorAnt7, nomeAnt8,
    valorAnt8, nomeAnt9, valorAnt9, gloria, honra, divisao, posto, vitorias, derrotas, empates, KOs, soco, chute, bloqueio, apresamento
, esportes, foco, chi, fdv, saude, especiais, combos, divisaoFormal) {
    var antecedentes = [];
    if (nomeAnt1 != '') { antecedentes[0] = newCaracteristica(nomeAnt1, valorAnt1); }
    if (nomeAnt2 != '') { antecedentes[1] = newCaracteristica(nomeAnt2, valorAnt2); }
    if (nomeAnt3 != '') { antecedentes[2] = newCaracteristica(nomeAnt3, valorAnt3); }
    if (nomeAnt4 != '') { antecedentes[3] = newCaracteristica(nomeAnt4, valorAnt4); }
    if (nomeAnt5 != '') { antecedentes[4] = newCaracteristica(nomeAnt5, valorAnt5); }
    if (nomeAnt6 != '') { antecedentes[5] = newCaracteristica(nomeAnt6, valorAnt6); }
    if (nomeAnt7 != '') { antecedentes[6] = newCaracteristica(nomeAnt7, valorAnt7); }
    if (nomeAnt8 != '') { antecedentes[7] = newCaracteristica(nomeAnt8, valorAnt8); }
    if (nomeAnt9 != '') { antecedentes[8] = newCaracteristica(nomeAnt9, valorAnt9); }

    var personagem = {
        Antecedentes: antecedentes,
        NovasTecnicas: [],
        NovosTalentos: [],
        NovosConhecimentos: [],
        NovasPericias: [],
        Gloria: gloria,
        Honra: honra,
        Divisao: divisao,
        Posto: posto,
        Soco: soco,
        Chute: chute,
        Bloqueio: bloqueio,
        Apresamento: apresamento,
        Esportes: esportes,
        Foco: foco,
        Apresamento: apresamento,
        Chi: chi,
        ForcaVontade: fdv,
        Saude: saude,
        ManobrasEspeciais: especiais,
        Combos: combos,
        Nome: nome,
        Jogador: jogador,
        Cronica: cronica,
        Estilo: estilo,
        Escola: escola,
        Equipe: equipe,
        Time: time,
        Conceito: conceito,
        Assinatura: assinatura,
        Forca: forca,
        Destreza: destreza,
        Vigor: vigor,
        Carisma: carisma,
        Manipulacao: manipulacao,
        Aparencia: aparencia,
        Percepcao: percepcao,
        Inteligencia: inteligencia,
        Raciocinio: raciocinio,
        Prontidao: prontidao,
        Interrogacao: interrogacao,
        Intimidacao: intimidacao,
        Perspicacia: perspicacia,
        Manha: manha,
        Labia: labia,
        LutaCega: lutacega,
        Conducao: conducao,
        Lideranca: lideranca,
        Seguranca: seguranca,
        Furtividade: furtividade,
        Sobrevivencia: sobrevivencia,
        Arena: arena,
        Computador: computador,
        Investigacao: investigacao,
        Medicina: medicina,
        Misterios: misterios,
        Estilos: estilos
    };

    return personagem;
}

function AutoGeradorP(p) {
    return AutoGerador(p.Nome, p.Jogador, p.Cronica, p.Estilo, p.Escola, p.Equipe, p.Time, p.Conceito, p.Assinatura,
        p.Forca, p.Destreza, p.Vigor, p.Carisma, p.Manipulacao, p.Aparencia, p.Percepcao, p.Inteligencia, p.Raciocinio, p.Prontidao, p.Interrogacao,
        p.Intimidacao, p.Perspicacia, p.Manha, p.Labia, p.LutaCega, p.Conducao, p.Lideranca, p.Seguranca, p.Furtividade, p.Sobrevivencia,
        p.Arena, p.Computador, p.Investigacao, p.Medicina, p.Misterios, p.Estilos, p.Antecedentes, p.Gloria, p.Honra,
        p.Divisao, p.Posto, p.Soco, p.Chute, p.Bloqueio, p.Apresamento, p.Esportes, p.Foco, p.Chi, p.ForcaVontade, p.Saude,
        p.ManobrasEspeciais, p.Combos, p.NovasTecnicas, p.NovosTalentos, p.NovasPericias, p.NovosConhecimentos);
}

function GeraLinkEstilo(estilo) {
    if (estilo == null) return '';
    if (estilo.indexOf("(") == -1)
        return FontPadrao(GeraHtmlLink(estilo));
    else {
        return FontPadrao(GeraHtmlLink(estilo.split('(')[0].trim()) + " (" + GeraHtmlLink(estilo.split('(')[1].replace(")", "").trim()) + ")");
    }
}

//mehtodo de verdade que faz o serviço sujo
function AutoGerador(nome, jogador, cronica, estilo, escola, equipe, time, conceito,
    assinatura, forca, destreza, vigor, carisma, manipulacao, aparencia, percepcao, inteligencia, raciocinio,
    prontidao, interrogacao, intimidacao, perspicacia, manha, labia, lutacega, conducao, lideranca, seguranca,
    furtividade, sobrevivencia, arena, computador, investigacao, medicina, misterios, estilos, antecedentes,
    gloria, honra, divisao, posto, soco, chute, bloqueio, apresamento, esportes, foco, chi, fdv, saude, especiais,
    combos, novasTecnicas, novosTalentos, novasPericias, novosConhecimentos) {
    var newWindow = "";

    newWindow += "<table width=\"100%\" class=\"topoTitulo\"><tr><td align=\"center\" colspan=\"6\"><img alt=\"Street Fighter RPG\" src=\"http://www.sfrpg.com.br/tools/sheet-img/logo.png\" /></td></tr>";
    newWindow += "<tr><td colspan=\"2\"><span class=\"ArialBlackRed\">Nome: </span>" + FontPadrao(nome) + "</td>";
    newWindow += "<td colspan=\"2\"><a class=\"ArialBlackRed\" href=\"http://www.sfrpg.com.br/estilos-de-luta\" target=\"_blank\">Estilo: </a>" + GeraLinkEstilo(estilo) + "</td>";//FontPadrao(GeraHtmlLink(estilo))
    newWindow += "<td colspan=\"2\"><a class=\"ArialBlackRed\" href=\"http://www.sfrpg.com.br/post/times\" target=\"_blank\">Time: </a>" + FontPadrao(GeraHtmlLink(time)) + "</td></tr>";
    newWindow += "<tr><td colspan=\"2\"><span class=\"ArialBlackRed\">Jogador: </span>" + FontPadrao(jogador) + "</td>";
    newWindow += "<td colspan=\"2\"><span class=\"ArialBlackRed\">Escola: </span>" + FontPadrao(escola) + "</td>";
    newWindow += "<td colspan=\"2\"><a class=\"ArialBlackRed\" href=\"http://www.sfrpg.com.br/post/equipes\" target=\"_blank\">Equipe: </a>" + FontPadrao(GeraHtmlLink(equipe)) + "</td></tr>";
    newWindow += "<tr><td colspan=\"2\" valign=\"top\"><span class=\"ArialBlackRed\">Conceito: </span>" + FontPadrao(conceito) + "</td>";
    newWindow += "<td colspan=\"2\" valign=\"top\"><a class=\"ArialBlackRed\" href=\"http://www.sfrpg.com.br/post/conceitos-de-cronicas\" target=\"_blank\">Cr&ocirc;nica: </a>" + FontPadrao(cronica) + "</td>";
    newWindow += "<td colspan=\"2\" valign=\"top\"><span class=\"ArialBlackRed\">Assinatura: </span>" + FontPadrao(assinatura) + "</td></tr>";

    //atributos
    newWindow += "<tr><td colspan=\"6\" align=\"center\" bgcolor=\"Red\"><a href=\"http://www.sfrpg.com.br/post/atributos\" target=\"_blank\"><img alt=\"Atributos\" src=\"http://www.sfrpg.com.br/tools/sheet-img/sfattributes.jpg\" /></a></td></tr>";
    newWindow += "<tr><td align=\"center\" colspan=\"2\" style=\"padding-top:10px;\"><a href=\"http://www.sfrpg.com.br/post/atributos-fisicos\" target=\"_blank\"><img src=\"http://www.sfrpg.com.br/tools/sheet-img/sfphysical.jpg\" alt=\"Físicos\" /></a></td>";
    newWindow += "<td align=\"center\" colspan=\"2\" style=\"padding-top:10px;\"><a href=\"http://www.sfrpg.com.br/post/atributos-sociais\" target=\"_blank\"><img alt=\"Sociais\" src=\"http://www.sfrpg.com.br/tools/sheet-img/sfsocial.jpg\" /></a>";
    newWindow += "</td><td align=\"center\" colspan=\"2\" style=\"padding-top:10px;\"><a href=\"http://www.sfrpg.com.br/post/atributos-mentais\" target=\"_blank\"><img src=\"http://www.sfrpg.com.br/tools/sheet-img/sfmental.jpg\" alt=\"Mentais\" /></a></td></tr><tr class=\"ArialBlackBlack\">";
    newWindow += "<td><a href=\"http://www.sfrpg.com.br/post/forca\" target=\"_blank\">For&ccedil;a</a></td><td>";
    newWindow += PintaCaracteristica(8, forca); //for&ccedil;a
    newWindow += "</td><td><a href=\"http://www.sfrpg.com.br/post/carisma\" target=\"_blank\">Carisma</a></td><td>";
    newWindow += PintaCaracteristica(8, carisma); //carisma
    newWindow += "</td><td><a href=\"http://www.sfrpg.com.br/post/percepcao\" target=\"_blank\">Percep&ccedil;&atilde;o</a></td><td>";
    newWindow += PintaCaracteristica(8, percepcao); //percep&ccedil;&atilde;o
    newWindow += "</td></tr><tr class=\"ArialBlackBlack\"><td><a href=\"http://www.sfrpg.com.br/post/destreza\" target=\"_blank\">Destreza</a></td><td>";
    newWindow += PintaCaracteristica(8, destreza); //destreza
    newWindow += "</td><td><a href=\"http://www.sfrpg.com.br/post/manipulacao\" target=\"_blank\">Manipula&ccedil;&atilde;o</a></td><td>";
    newWindow += PintaCaracteristica(8, manipulacao); //manipula&ccedil;&atilde;o
    newWindow += "</td><td><a href=\"http://www.sfrpg.com.br/post/inteligencia\" target=\"_blank\">Intelig&ecirc;ncia</a></td><td>";
    newWindow += PintaCaracteristica(8, inteligencia); //intelig&ecirc;ncia
    newWindow += "</td></tr><tr class=\"ArialBlackBlack\"><td><a href=\"http://www.sfrpg.com.br/post/vigor\" target=\"_blank\">Vigor</a></td><td>";
    newWindow += PintaCaracteristica(8, vigor); //vigor
    newWindow += "</td><td><a href=\"http://www.sfrpg.com.br/post/aparencia\" target=\"_blank\">Apar&ecirc;ncia</a></td><td>";
    newWindow += PintaCaracteristica(8, aparencia); //apar&ecirc;ncia
    newWindow += "</td><td><a href=\"http://www.sfrpg.com.br/post/raciocinio\" target=\"_blank\">Racioc&iacute;nio</a></td><td>";
    newWindow += PintaCaracteristica(8, raciocinio); //racioc&iacute;nio

    //habilidades
    newWindow += "</td></tr><tr><td bgcolor=\"Red\" colspan=\"6\" align=\"center\" ><a href=\"http://www.sfrpg.com.br/post/habilidades\" target=\"_blank\"><img alt=\"Habilidades\" src=\"http://www.sfrpg.com.br/tools/sheet-img/sfabilities.jpg\" /></a></td></tr><tr><td align=\"center\" colspan=\"2\" style=\"padding-top:10px;\">";
    newWindow += "<a href=\"http://www.sfrpg.com.br/post/talentos\" target=\"_blank\"><img alt=\"Talentos\" src=\"http://www.sfrpg.com.br/tools/sheet-img/sftalents.jpg\" /></a></td><td align=\"center\" colspan=\"2\" style=\"padding-top:10px;\"><a href=\"http://www.sfrpg.com.br/post/pericias\" target=\"_blank\"><img alt=\"Perícias\" src=\"http://www.sfrpg.com.br/tools/sheet-img/sfskills.jpg\" /></a></td><td align=\"center\" colspan=\"2\" style=\"padding-top:10px;\">";
    newWindow += "<a href=\"http://www.sfrpg.com.br/post/conhecimentos\" target=\"_blank\"><img alt=\"Conhecimentos\" src=\"http://www.sfrpg.com.br/tools/sheet-img/sfknowledges.jpg\" /></a></td></tr><tr class=\"ArialBlackBlack\"><td><a href=\"http://www.sfrpg.com.br/post/prontidao\" target=\"_blank\">Prontid&atilde;o</a></td><td>";
    newWindow += PintaCaracteristica(8, prontidao); //prontid&atilde;o
    newWindow += "</td><td nowrap=\"nowrap\"><a href=\"http://www.sfrpg.com.br/post/luta-as-cegas\" target=\"_blank\">Luta &aacute;s Cegas</a></td><td>";
    newWindow += PintaCaracteristica(8, lutacega); //luta &aacute;s cegas
    newWindow += "</td><td><a href=\"http://www.sfrpg.com.br/post/conhecimento-de-arenas\" target=\"_blank\">Arenas</a></td><td>";
    newWindow += PintaCaracteristica(8, arena); //arena
    newWindow += "</td></tr><tr class=\"ArialBlackBlack\"><td><a href=\"http://www.sfrpg.com.br/post/interrogatorio\" target=\"_blank\">Interrogat&oacute;rio</a></td><td>";
    newWindow += PintaCaracteristica(8, interrogacao); //interroga&ccedil;&atilde;o
    newWindow += "</td><td><a href=\"http://www.sfrpg.com.br/post/conducao\" target=\"_blank\">Condu&ccedil;&atilde;o</a></td><td>";
    newWindow += PintaCaracteristica(8, conducao); //condu&ccedil;&atilde;o
    newWindow += "</td><td><a href=\"http://www.sfrpg.com.br/post/computador\" target=\"_blank\">Computador</a></td><td>";
    newWindow += PintaCaracteristica(8, computador); //computador
    newWindow += "</td></tr><tr class=\"ArialBlackBlack\"><td><a href=\"http://www.sfrpg.com.br/post/intimidacao\" target=\"_blank\">Intimida&ccedil;&atilde;o</a></td><td>";
    newWindow += PintaCaracteristica(8, intimidacao); //intimida&ccedil;&atilde;o
    newWindow += "</td><td><a href=\"http://www.sfrpg.com.br/post/lideranca\" target=\"_blank\">Lideran&ccedil;a</a></td><td>";
    newWindow += PintaCaracteristica(8, lideranca); //lideran&ccedil;a
    newWindow += "</td><td><a href=\"http://www.sfrpg.com.br/post/investigacao\" target=\"_blank\">Investiga&ccedil;&atilde;o</a></td><td>";
    newWindow += PintaCaracteristica(8, investigacao); //investiga&ccedil;&atilde;o
    newWindow += "</td></tr><tr class=\"ArialBlackBlack\"><td><a href=\"http://www.sfrpg.com.br/post/perspicacia\" target=\"_blank\">Perspic&aacute;cia</a></td><td>";
    newWindow += PintaCaracteristica(8, perspicacia); //perspic&aacute;cia
    newWindow += "</td><td><a href=\"http://www.sfrpg.com.br/post/seguranca\" target=\"_blank\">Seguran&ccedil;a</a></td><td>";
    newWindow += PintaCaracteristica(8, seguranca); //seguran&ccedil;a
    newWindow += "</td><td><a href=\"http://www.sfrpg.com.br/post/medicina\" target=\"_blank\">Medicina</a></td><td>";
    newWindow += PintaCaracteristica(8, medicina); //medicina
    newWindow += "</td></tr><tr class=\"ArialBlackBlack\"><td><a href=\"http://www.sfrpg.com.br/post/manha\" target=\"_blank\">Manha</a></td><td>";
    newWindow += PintaCaracteristica(8, manha); //manha
    newWindow += "</td><td><a href=\"http://www.sfrpg.com.br/post/furtividade\" target=\"_blank\">Furtividade</a></td><td>";
    newWindow += PintaCaracteristica(8, furtividade); //furtividade
    newWindow += "</td><td><a href=\"http://www.sfrpg.com.br/post/misterios\" target=\"_blank\">Mist&eacute;rios</a></td><td>";
    newWindow += PintaCaracteristica(8, misterios); //mist&eacute;rios
    newWindow += "</td></tr><tr class=\"ArialBlackBlack\"><td><a href=\"http://www.sfrpg.com.br/post/labia\" target=\"_blank\">L&aacute;bia</a></td><td>";
    newWindow += PintaCaracteristica(8, labia); //l&aacute;bia
    newWindow += "</td><td><a href=\"http://www.sfrpg.com.br/post/sobrevivencia\" target=\"_blank\">Sobreviv&ecirc;ncia</a></td><td>";
    newWindow += PintaCaracteristica(8, sobrevivencia); //sobreviv&ecirc;ncia
    newWindow += "</td><td><a href=\"http://www.sfrpg.com.br/post/conhecimento-de-estilos\" target=\"_blank\">Estilos</a></td><td>";
    newWindow += PintaCaracteristica(8, estilos); //estilos

    //novashabilidades
    if (novasPericias != null || novosConhecimentos != null || novosConhecimentos != null) {
        if (novosTalentos.length >= novosConhecimentos.length && novosTalentos.length >= novasPericias.length) {
            for (var i = 0; i < novosTalentos.length; i++) {
                newWindow += "</td></tr><tr class=\"ArialBlackBlack\"><td>" + GeraHtmlLink(novosTalentos[i].Nome) + "</td><td>";
                newWindow += PintaCaracteristica(8, novosTalentos[i].Valor);

                if (novasPericias.length > i) {
                    newWindow += "</td><td>" + GeraHtmlLink(novasPericias[i].Nome) + "</td><td>";
                    newWindow += PintaCaracteristica(8, novasPericias[i].Valor);
                }
                else {
                    newWindow += "</td><td>______________</td><td>";
                    newWindow += PintaCaracteristica(8, 0);
                }

                if (novosConhecimentos.length > i) {
                    newWindow += "</td><td>" + GeraHtmlLink(novosConhecimentos[i].Nome) + "</td><td>";
                    newWindow += PintaCaracteristica(8, novosConhecimentos[i].Valor);
                }
                else {
                    newWindow += "</td><td>______________</td><td>";
                    newWindow += PintaCaracteristica(8, 0);
                }
            }
        }
        else if (novasPericias.length >= novosConhecimentos.length && novasPericias.length >= novosTalentos.length) {
            for (var i = 0; i < novasPericias.length; i++) {
                if (novosTalentos.length > i) {
                    newWindow += "</td></tr><tr class=\"ArialBlackBlack\"><td>" + GeraHtmlLink(novosTalentos[i].Nome) + "</td><td>";
                    newWindow += PintaCaracteristica(8, novosTalentos[i].Valor);
                }
                else {
                    newWindow += "</td></tr><tr class=\"ArialBlackBlack\"><td>______________</td><td>";
                    newWindow += PintaCaracteristica(8, 0);
                }

                newWindow += "</td><td>" + GeraHtmlLink(novasPericias[i].Nome) + "</td><td>";
                newWindow += PintaCaracteristica(8, novasPericias[i].Valor);

                if (novosConhecimentos.length > i) {
                    newWindow += "</td><td>" + GeraHtmlLink(novosConhecimentos[i].Nome) + "</td><td>";
                    newWindow += PintaCaracteristica(8, novosConhecimentos[i].Valor);
                }
                else {
                    newWindow += "</td><td>______________</td><td>";
                    newWindow += PintaCaracteristica(8, 0);
                }
            }
        }
        else {
            for (var i = 0; i < novosConhecimentos.length; i++) {
                if (novosTalentos.length > i) {
                    newWindow += "</td></tr><tr class=\"ArialBlackBlack\"><td>" + GeraHtmlLink(novosTalentos[i].Nome) + "</td><td>";
                    newWindow += PintaCaracteristica(8, novosTalentos[i].Valor);
                }
                else {
                    newWindow += "</td></tr><tr class=\"ArialBlackBlack\"><td>______________</td><td>";
                    newWindow += PintaCaracteristica(8, 0);
                }

                if (novasPericias.length > i) {
                    newWindow += "</td><td>" + GeraHtmlLink(novasPericias[i].Nome) + "</td><td>";
                    newWindow += PintaCaracteristica(8, novasPericias[i].Valor);
                }
                else {
                    newWindow += "</td><td>______________</td><td>";
                    newWindow += PintaCaracteristica(8, 0);
                }

                newWindow += "</td><td>" + GeraHtmlLink(novosConhecimentos[i].Nome) + "</td><td>";
                newWindow += PintaCaracteristica(8, novosConhecimentos[i].Valor);
            }
        }
    }

    // antecedentes
    newWindow += "</td></tr><tr><td colspan=\"6\" style=\"padding-left:150px;\" bgcolor=\"Red\"><img alt=\"Vantagens\" src=\"http://www.sfrpg.com.br/tools/sheet-img/sfadvantages.jpg\" /></td>";
    newWindow += "</tr><tr><td align=\"center\" colspan=\"2\" valign=\"top\" width=\"33%\" style=\"padding-top:10px;\"><a href=\"http://www.sfrpg.com.br/post/antecedentes\" target=\"_blank\"><img alt=\"Antecedentes\" src=\"http://www.sfrpg.com.br/tools/sheet-img/sfbackgrounds.jpg\" /></a><br />";
    newWindow += "<table width=\"100%\" class=\"ArialPadrao\">";//tabela de antecedentes

    if (antecedentes != null) {   //pinta cada antecedente na ficha
        for (var x = 0; x < antecedentes.length; x++) {
            var ant = antecedentes[x];
            newWindow += "<tr><td>" + GeraHtmlLink(ant.Nome) + "</td><td>";
            newWindow += PintaCaracteristica(8, ant.Valor) + "</td></tr>";
        }
    }

    // tecnicas
    newWindow += "</table></td><td valign=\"top\" align=\"center\" colspan=\"2\" width=\"33%\" style=\"padding-top:10px;\" ><a href=\"http://www.sfrpg.com.br/post/tecnicas\" target=\"_blank\"><img alt=\"Técnicas\" src=\"http://www.sfrpg.com.br/tools/sheet-img/sftechniques.jpg\" /></a><br />";
    newWindow += "<table width=\"100%\" class=\"ArialBlackBlack\"><tr><td><a href=\"http://www.sfrpg.com.br/post/soco\" target=\"_blank\">Soco</a></td><td>";
    newWindow += PintaCaracteristica(8, soco); //soco
    newWindow += "</td></tr><tr><td><a href=\"http://www.sfrpg.com.br/post/chute\" target=\"_blank\">Chute</a></td><td>";
    newWindow += PintaCaracteristica(8, chute); //chute
    newWindow += "</td></tr><tr><td><a href=\"http://www.sfrpg.com.br/post/bloqueio\" target=\"_blank\">Bloqueio</a></td><td>";
    newWindow += PintaCaracteristica(8, bloqueio); //bloqueio
    newWindow += "</td></tr><tr><td><a href=\"http://www.sfrpg.com.br/post/apresamento\" target=\"_blank\">Apresamento</a></td><td>";
    newWindow += PintaCaracteristica(8, apresamento); //apresamento
    newWindow += "</td></tr><tr><td><a href=\"http://www.sfrpg.com.br/post/esportes\" target=\"_blank\">Esportes</a></td><td>";
    newWindow += PintaCaracteristica(8, esportes); //esportes
    newWindow += "</td></tr><tr><td><a href=\"http://www.sfrpg.com.br/post/foco\" target=\"_blank\">Foco</a></td><td>";
    newWindow += PintaCaracteristica(8, foco); //foco
    newWindow += "</td></tr>";

    if (novasTecnicas != null) {//pintando as técnicas doidas
        for (var x = 0; x < novasTecnicas.length; x++) {
            var tec = novasTecnicas[x];
            newWindow += "<tr><td>" + tec.Nome + "</td><td>";
            newWindow += PintaCaracteristica(8, tec.Valor) + "</td></tr>";
        }
    }

    // manobras especiais e combos
    newWindow += "</table></td><td align=\"left\" valign=\"top\" colspan=\"2\" width=\"33%\" style=\"border-left:solid 20px Red;padding-left:10px;padding-top:10px;\" >";
    newWindow += "<div align=\"center\"><a href=\"http://www.sfrpg.com.br/manobras-especiais\" target=\"_blank\"><img alt=\"Manobras Especiais\" src=\"http://www.sfrpg.com.br/tools/sheet-img/sfspecialmaneuvers.jpg\" /></a></div>";
    newWindow += "<p><span class=\"ArialBlack\">" + GerarHtmlManobrasEspeciais(especiais) + "</span></p></td></tr>";
    newWindow += "<tr><td colspan=\"4\" bgcolor=\"Red\" height=\"20px\"></td><td colspan=\"2\" style=\"border-left:solid 20px Red;\"></td></tr><tr><td colspan=\"2\" valign=\"top\" align=\"center\">";
    newWindow += "<a href=\"http://www.sfrpg.com.br/post/renome\" target=\"_blank\"><img src=\"http://www.sfrpg.com.br/tools/sheet-img/sfrenown.jpg\" alt=\"Renome\" /></a></td><td colspan=\"2\"></td><td colspan=\"2\" rowspan=\"5\" style=\"border-left:solid 20px Red;border-bottom:solid 20px Red;\">";
    newWindow += "<span class=\"ArialBlack\"><b><a href=\"http://www.sfrpg.com.br/post/manobra-combo\" target=\"_blank\">Combos:</a> </b>" + combos + "</span></td></tr><tr><td colspan=\"2\" align=\"center\" class=\"ArialBlackBlack\"><a href=\"http://www.sfrpg.com.br/post/gloria\" target=\"_blank\">Gl&oacute;ria</a></td><td colspan=\"2\" align=\"center\">";
    newWindow += "<a href=\"http://www.sfrpg.com.br/post/chi\" target=\"_blank\"><img src=\"http://www.sfrpg.com.br/tools/sheet-img/sfchi.jpg\" alt=\"Chi\" /></a></td></tr><tr><td colspan=\"2\" align=\"center\"><img src=\"http://www.sfrpg.com.br/tools/sheet-img/" + gloria + "-10bluedot.jpg\" alt=\"" + gloria + "\" /></td>";
    newWindow += "<td colspan=\"2\" align=\"center\"><img src=\"http://www.sfrpg.com.br/tools/sheet-img/" + chi + "-10bluedot.jpg\" alt=\"" + chi + "\" /></td></tr><tr><td colspan=\"2\" align=\"center\" style=\"padding-top:10px;\" class=\"ArialBlackBlack\">";
    newWindow += "<a href=\"http://www.sfrpg.com.br/post/honra\" target=\"_blank\">Honra</a></td><td colspan=\"2\" align=\"center\" style=\"padding-top:10px;\"><a href=\"http://www.sfrpg.com.br/post/forca-de-vontade\" target=\"_blank\"><img src=\"http://www.sfrpg.com.br/tools/sheet-img/sfwillpower.jpg\" alt=\"Força de Vontade\" /></a></td></tr><tr><td colspan=\"2\" align=\"center\"><img src=\"http://www.sfrpg.com.br/tools/sheet-img/";
    newWindow += honra + "-10bluedot.jpg\" alt=\"" + honra + "\" /></td><td colspan=\"2\" align=\"center\"><img src=\"http://www.sfrpg.com.br/tools/sheet-img/" + fdv + "-10bluedot.jpg\" alt=\"" + fdv + "\" /></td></tr>";
    newWindow += "<tr><td class=\"ArialBlack\" colspan=\"2\" nowrap=\"nowrap\" style=\"padding-top:10px;padding-left:50px;\"><b><a href=\"http://www.sfrpg.com.br/post/divisao\" target=\"_blank\">Divis&atilde;o: </b></a><u>" + GeraHtmlLink(divisao) + "</u></td><td colspan=\"2\" align=\"center\" style=\"padding-top:10px;\">";
    newWindow += "<a href=\"http://www.sfrpg.com.br/post/saude\" target=\"_blank\"><img src=\"http://www.sfrpg.com.br/tools/sheet-img/sfhealth.jpg\" alt=\"Saúde\" /></a></td><td colspan=\"2\" align=\"center\" rowspan=\"3\"></td></tr>";
    newWindow += "<tr><td class=\"ArialBlack\" colspan=\"2\" valign=\"top\" nowrap=\"nowrap\" style=\"padding-top:10px;padding-left:50px;\"><a href=\"http://www.sfrpg.com.br/post/posto\" target=\"_blank\"><b>Posto: </b></a><u>" + posto + "</u></td><td colspan=\"2\" align=\"center\">";

    if (saude >= 10)
        newWindow += "<img src=\"http://www.sfrpg.com.br/tools/sheet-img/10-10bluedot.jpg\" alt=\"" + saude + "\" />";
    else newWindow += "<img src=\"http://www.sfrpg.com.br/tools/sheet-img/" + saude + "-10bluedot.jpg\" alt=\"" + saude + "\" />";

    newWindow += "</td></tr><tr><td colspan=\"2\" align=\"center\" ></td><td colspan=\"2\" align=\"center\">";

    if (saude > 10)
        newWindow += "<img src=\"http://www.sfrpg.com.br/tools/sheet-img/" + (saude - 10) + "-10bluedot.jpg\" alt=\"" + saude + "\" /></td></tr>";
    else newWindow += "<img src=\"http://www.sfrpg.com.br/tools/sheet-img/0-10bluedot.jpg\" alt=\"" + saude + "\" /></td></tr>";

    return newWindow + "</td></tr><tr><td colspan=\"6\" style=\"height:25px;\"></td></tr></table>";
}

function newCaracteristica(nome, valor) {
    return { Nome: nome, Valor: valor };
}

function getCaracteristica(arr,nome){
	var valor = 0;
	$.each(arr, function(i,v){
		if(arr[i].Nome == nome)
		  	valor = arr[i].Valor;
	});
	return valor;
}

function CarregarEdicao(nome) {
    //ler do webservice o json
    var dic = new JSON();

    $('#divFicha').hide();
    $('#divNaoEncontrado').hide();
    $('#divFormulario').show();

    //cabecalho
    $('#txtNome').text(dic["Nome"]);
    $('#txtConceito').text(dic["Conceito"]);
    $('#txtEstilo').text(dic["Estilo"]);
    $('#txtAssinatura').text(dic["Assinatura"]);
    $('#txtEscola').text(dic["Escola"]);
    $('#txtEquipe').text(dic["Equipe"]);
    $('#txtTime').text(dic["Time"]);
    $('#txtCronica').text(dic["Cronica"]);
    $('#txtJogador').text(dic["Jogador"]);

    //atributos
    $('#ddlForca').val(dic["Forca"]);
    $('#ddlDestreza').val(dic["Destreza"]);
    $('#ddlVigor').val(dic["Vigor"]);
    $('#ddlCarisma').val(dic["Carisma"]);
    $('#ddlManipulacao').val(dic["Manipulacao"]);
    $('#ddlAparencia').val(dic["Aparencia"]);
    $('#ddlPercepcao').val(dic["Percepcao"]);
    $('#ddlInteligencia').val(dic["Inteligencia"]);
    $('#ddlRaciocinio').val(dic["Raciocinio"]);

    //talentos
    $('#ddlProntidao').val(dic["Prontidao"]);
    $('#ddlPerspicacia').val(dic["Perspicacia"]);
    $('#ddlInterrogatorio').val(dic["Interrogatorio"]);
    $('#ddlManha').val(dic["Manha"]);
    $('#ddlLabia').val(dic["Labia"]);
    $('#ddlIntimidacao').val(dic["Intimidacao"]);

    if (!string.IsNullOrEmpty(dic["NovosTalentos"]) && dic["NovosTalentos"] != ",0") {
        var arrTemp = dic["NovosTalentos"].split(';');
        if (arrTemp.Length > 0) {
            $('#txtTalento1').text(arrTemp[0].split(',')[0]);
            $('#ddlTalento1').val(arrTemp[0].split(',')[1]);
            if (arrTemp.Length > 1) {
                $('#txtTalento2').text(arrTemp[1].split(',')[0]);
                $('#ddlTalento2').val(arrTemp[1].split(',')[1]);

                if (arrTemp.Length > 2) {
                    $('#txtTalento3').text(arrTemp[2].split(',')[0]);
                    $('#ddlTalento3').val(arrTemp[2].split(',')[1]);
                }
            }
        }
    }

    //pericias
    $('#ddlLutaCega').val(dic["LutaCega"]);
    $('#ddlSobrevivencia').val(dic["Sobrevivencia"]);
    $('#ddlConducao').val(dic["Conducao"]);
    $('#ddlLideranca').val(dic["Lideranca"]);
    $('#ddlFurtividade').val(dic["Furtividade"]);
    $('#ddlSeguranca').val(dic["Seguranca"]);

    if (!string.IsNullOrEmpty(dic["NovasPericias"]) && dic["NovasPericias"] != ",0") {
        var arrTemp = dic["NovasPericias"].split(';');
        if (arrTemp.Length > 0) {
            $('#txtPericia1').text(arrTemp[0].split(',')[0]);
            $('#ddlPericia1').val(arrTemp[0].split(',')[1]);
            if (arrTemp.Length > 1) {
                $('#txtPericia2').text(arrTemp[1].split(',')[0]);
                $('#ddlPericia2').val(arrTemp[1].split(',')[1]);

                if (arrTemp.Length > 2) {
                    $('#txtPericia3').text(arrTemp[2].split(',')[0]);
                    $('#ddlPericia3').val(arrTemp[2].split(',')[1]);
                }
            }
        }
    }

    //conhecimentos
    $('#ddlArena').val(dic["Arena"]);
    $('#ddlMisterios').val(dic["Misterios"]);
    $('#ddlEstilos').val(dic["Estilos"]);
    $('#ddlMedicina').val(dic["Medicina"]);
    $('#ddlComputador').val(dic["Computador"]);
    $('#ddlInvestigacao').val(dic["Investigacao"]);

    if (dic["NovosConhecimentos"] !== null && dic["NovosConhecimentos"] != ",0") {
        var arrTemp = dic["NovosConhecimentos"].split(';');
        if (arrTemp.Length > 0) {
            $('#txtConhecimento1').text(arrTemp[0].split(',')[0]);
            $('#ddlConhecimento1').val(arrTemp[0].split(',')[1]);
            if (arrTemp.Length > 1) {
                $('#txtConhecimento2').text(arrTemp[1].split(',')[0]);
                $('#ddlConhecimento2').val(arrTemp[1].split(',')[1]);

                if (arrTemp.Length > 2) {
                    $('#txtConhecimento3').text(arrTemp[2].split(',')[0]);
                    $('#ddlConhecimento3').val(arrTemp[2].split(',')[1]);
                }
            }
        }
    }

    //antecedentes
    if (dic["Antecedentes"] !== null && dic["Antecedentes"] != ",0") {
        var arrTemp = dic["Antecedentes"].split(';');
        if (arrTemp.Length > 0) {
            $('#txtAntecedente1').text(arrTemp[0].split(',')[0]);
            $('#ddlAntecedente1').val(arrTemp[0].split(',')[1]);
            if (arrTemp.Length > 1) {
                $('#txtAntecedente2').text(arrTemp[1].split(',')[0]);
                $('#ddlAntecedente2').val(arrTemp[1].split(',')[1]);

                if (arrTemp.Length > 2) {
                    $('#txtAntecedente3').text(arrTemp[2].split(',')[0]);
                    $('#ddlAntecedente3').val(arrTemp[2].split(',')[1]);

                    if (arrTemp.Length > 3) {
                        $('#txtAntecedente4').text(arrTemp[3].split(',')[0]);
                        $('#ddlAntecedente4').val(arrTemp[3].split(',')[1]);

                        if (arrTemp.Length > 4) {
                            $('#txtAntecedente5').text(arrTemp[4].split(',')[0]);
                            $('#ddlAntecedente5').val(arrTemp[4].split(',')[1]);

                            if (arrTemp.Length > 5) {
                                $('#txtAntecedente6').text(arrTemp[5].split(',')[0]);
                                $('#ddlAntecedente6').val(arrTemp[5].split(',')[1]);

                                if (arrTemp.Length > 6) {
                                    $('#txtAntecedente7').text(arrTemp[6].split(',')[0]);
                                    $('#ddlAntecedente7').val(arrTemp[6].split(',')[1]);

                                    if (arrTemp.Length > 7) {
                                        $('#txtAntecedente8').text(arrTemp[7].split(',')[0]);
                                        $('#ddlAntecedente8').val(arrTemp[7].split(',')[1]);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    //tecnicas
    $('#ddlSoco').val(dic["Soco"]);
    $('#ddlChute').val(dic["Chute"]);
    $('#ddlBloqueio').val(dic["Bloqueio"]);
    $('#ddlApresamento').val(dic["Apresamento"]);
    $('#ddlEsportes').val(dic["Esportes"]);
    $('#ddlFoco').val(dic["Foco"]);

    if (dic["NovasTecnicas"] !== null && dic["NovasTecnicas"] != ",0") {
        var arrTemp = dic["NovasTecnicas"].split(';');
        if (arrTemp.Length > 0) {
            $('#txtTecnica1').text(arrTemp[0].split(',')[0]);
            $('#ddlTecnica1').val(arrTemp[0].split(',')[1]);
            if (arrTemp.Length > 1) {
                $('#txtTecnica2').text(arrTemp[1].split(',')[0]);
                $('#ddlTecnica2').val(arrTemp[1].split(',')[1]);
            }
        }
    }

    //manobras especiais
    $('#txtManobrasEspeciais').text(dic["ManobrasEspeciais"]);
    $('#txtCombos').text(dic["Combos"]);

    //renome
    $('#ddlDivisao').val(dic["Divisao"]);
    $('#ddlPosto').val(dic["Posto"]);
    $('#ddlGloria').val(dic["Gloria"]);
    $('#ddlHonra').val(dic["Honra"]);
    $('#ddlSaude').val(dic["Saude"]);
    $('#ddlChi').val(dic["Chi"]);
    $('#ddlForcaVontade').val(dic["ForcaVontade"]);
}

function ExcluirPersonagem(nome) {
    alert('não implementado');//excluir via webservice
}

function carregarPersonagem() {
    var personagem = {};
    //cabeçalho
    personagem.Nome = $('#txtNome').val();
    personagem.Conceito = $('#txtConceito').val();
    personagem.Time = $('#txtTime').val();
    personagem.Equipe = $('#txtEquipe').val();
    personagem.Jogador = $('#txtJogador').val();
    personagem.Cronica = $('#txtCronica').val();
    personagem.Assinatura = $('#txtAssinatura').val();
    personagem.Escola = $('#txtEscola').val();
    personagem.Estilo = $('#txtEstilo').val();

    //atributos
    personagem.Forca = parseInt($('#ddlForca').val());
    personagem.Destreza = parseInt($('#ddlDestreza').val());
    personagem.Vigor = parseInt($('#ddlVigor').val());
    personagem.Carisma = parseInt($('#ddlCarisma').val());
    personagem.Manipulacao = parseInt($('#ddlManipulacao').val());
    personagem.Aparencia = parseInt($('#ddlAparencia').val());
    personagem.Percepcao = parseInt($('#ddlPercepcao').val());
    personagem.Inteligencia = parseInt($('#ddlInteligencia').val());
    personagem.Raciocinio = parseInt($('#ddlRaciocinio').val());

    //talentos
    personagem.Prontidao = parseInt($('#ddlProntidao').val());
    personagem.Interrogatorio = parseInt($('#ddlInterrogatorio').val());
    personagem.Intimidacao = parseInt($('#ddlIntimidacao').val());
    personagem.Perspicacia = parseInt($('#ddlPerspicacia').val());
    personagem.Manha = parseInt($('#ddlManha').val());
    personagem.Labia = parseInt($('#ddlLabia').val());

    //novos talentos
    var talentos = [];
    if ($('#txtTalento1').val() != '') {
        talentos[0] = newCaracteristica($('#txtTalento1').val(), $('#ddlTalento1').val());

        if ($('#txtTalento2').val() != '') {
            talentos[1] = newCaracteristica($('#txtTalento2').val(), $('#ddlTalento2').val());

            if ($('#txtTalento3').val() != '') {
                talentos[2] = newCaracteristica($('#txtTalento3').val(), $('#ddlTalento3').val());
            }
        }
    }
    personagem.NovosTalentos = talentos;

    //perícias
    personagem.LutaCega = parseInt($('#ddlLutaCega').val());
    personagem.Conducao = parseInt($('#ddlConducao').val());
    personagem.Lideranca = parseInt($('#ddlLideranca').val());
    personagem.Seguranca = parseInt($('#ddlSeguranca').val());
    personagem.Furtividade = parseInt($('#ddlFurtividade').val());
    personagem.Sobrevivencia = parseInt($('#ddlSobrevivencia').val());

    //novas perícias
    var pericias = [];
    if ($('#txtPericia1').val() != '') {
        pericias[0] = newCaracteristica($('#txtPericia1').val(), $('#ddlPericia1').val());

        if ($('#txtPericia2').val() != '') {
            pericias[1] = newCaracteristica($('#txtPericia2').val(), $('#ddlPericia2').val());

            if ($('#txtPericia3').val() != '') {
                pericias[2] = newCaracteristica($('#txtPericia3').val(), $('#ddlPericia3').val());
            }
        }
    }
    personagem.NovasPericias = pericias;

    //conhecimentos
    personagem.Arena = parseInt($('#ddlArena').val());
    personagem.Computador = parseInt($('#ddlComputador').val());
    personagem.Investigacao = parseInt($('#ddlInvestigacao').val());
    personagem.Medicina = parseInt($('#ddlMedicina').val());
    personagem.Misterios = parseInt($('#ddlMisterios').val());
    personagem.Estilos = parseInt($('#ddlEstilos').val());

    //novos conhecimentos
    var conhecimentos = [];
    if ($('#txtConhecimento1').val() != '') {
        conhecimentos[0] = newCaracteristica($('#txtConhecimento1').val(), $('#ddlConhecimento1').val());

        if ($('#txtConhecimento2').val() != '') {
            conhecimentos[1] = newCaracteristica($('#txtConhecimento2').val(), $('#ddlConhecimento2').val());

            if ($('#txtConhecimento3').val() != '') {
                conhecimentos[2] = newCaracteristica($('#txtConhecimento3').val(), $('#ddlConhecimento3').val());
            }
        }
    }
    personagem.NovosConhecimentos = conhecimentos;

    //antecedentes
    var antecedentes = [];
    if ($('#txtAntecedente1').val() != '') {
        antecedentes[0] = newCaracteristica($('#txtAntecedente1').val(), $('#ddlAntecedente1').val());
        if ($('#txtAntecedente2').val() != '') {
            antecedentes[1] = newCaracteristica($('#txtAntecedente2').val(), $('#ddlAntecedente2').val());
            if ($('#txtAntecedente3').val() != '') {
                antecedentes[2] = newCaracteristica($('#txtAntecedente3').val(), $('#ddlAntecedente3').val());
                if ($('#txtAntecedente4').val() != '') {
                    antecedentes[3] = newCaracteristica($('#txtAntecedente4').val(), $('#ddlAntecedente4').val());
                    if ($('#txtAntecedente5').val() != '') {
                        antecedentes[4] = newCaracteristica($('#txtAntecedente5').val(), $('#ddlAntecedente5').val());
                        if ($('#txtAntecedente6').val() != '') {
                            antecedentes[5] = newCaracteristica($('#txtAntecedente6').val(), $('#ddlAntecedente6').val());
                            if ($('#txtAntecedente7').val() != '') {
                                antecedentes[6] = newCaracteristica($('#txtAntecedente7').val(), $('#ddlAntecedente7').val());
                                if ($('#txtAntecedente8').val() != '') {
                                    antecedentes[7] = newCaracteristica($('#txtAntecedente8').val(), $('#ddlAntecedente8').val());
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    personagem.Antecedentes = antecedentes;

    //técnicas
    personagem.Soco = parseInt($('#ddlSoco').val());
    personagem.Chute = parseInt($('#ddlChute').val());
    personagem.Bloqueio = parseInt($('#ddlBloqueio').val());
    personagem.Apresamento = parseInt($('#ddlApresamento').val());
    personagem.Esportes = parseInt($('#ddlEsportes').val());
    personagem.Foco = parseInt($('#ddlFoco').val());

    //novas técnicas
    var tecnicas = [];
    if ($('#txtTecnica1').text() != '') {
        tecnicas[0] = newCaracteristica($('#txtTecnica1').text(), $('#ddlTecnica1').val());
        if ($('#txtTecnica2').text() != '') {
            tecnicas[1] = newCaracteristica($('#txtTecnica2').text(), $('#ddlTecnica2').val());
        }
    }
    personagem.NovasTecnicas = tecnicas;

    //renome
    personagem.Gloria = parseInt($('#ddlGloria').val());
    personagem.Honra = parseInt($('#ddlHonra').val());
    personagem.Posto = parseInt($('#ddlPosto').val());
    personagem.Chi = parseInt($('#ddlChi').val());
    personagem.ForcaVontade = parseInt($('#ddlForcaVontade').val());
    personagem.Saude = parseInt($('#ddlSaude').val());
    personagem.Divisao = $('#ddlDivisao').val();

    //manobras especiais
    personagem.ManobrasEspeciais = $('#txtManobrasEspeciais').val();
    personagem.Combos = $('#txtCombos').val();
    return personagem;
}

$(document).ready(function () {

    $('#btnGerarPlanilha').click(function () {
        var personagem = carregarPersonagem();
        $('#divFicha').html(AutoGeradorP(personagem));
        $('#divFicha').show();
        $('#divFormulario').hide();
    });

    $('#btnGerarJSON').click(function () {
        var personagem = carregarPersonagem();
        $('#divFicha').html("var personagem = " + JSON.stringify(personagem));
        $('#divFicha').show();
        $('#divFormulario').hide();
    });

    $('#btnGerarManobras').click(function () {
        var personagem = carregarPersonagem();
        $('#divFicha').html(carregarTabela(personagem));
        $('#divFicha').show();
        $('#divFormulario').hide();
    });

    if (getParameterByName("nome") != null) {
        $('#divFicha').show();
        $('#divFormulario').hide();
        document.title += ": " + getParameterByName("nome");
        $('#divFicha').html(VerificaNome(getParameterByName("nome")));
    }
    else if (getParameterByName("arquivo") != null) {
        $('#divFicha').show();
        $('#divFormulario').hide();
        document.title += ": " + getParameterByName("arquivo");
        $('#divFicha').html(CarregaArquivo(getParameterByName("arquivo")));
    }
    else if (getParameterByName("editar") != null) {
        CarregarEdicao(getParameterByName("editar"));
    }
    else if (getParameterByName("excluir") != null) {
        ExcluirPersonagem(getParameterByName("excluir"));
    }
    else {
        $('#divFicha').hide();
        $('#divFormulario').show();
    }
})