import { AppBar, Box as MuiBox, Toolbar } from "@mui/material";
import { NameLogo } from "../logo";
import { Box } from "../common/box";
import { AnchorButton, AnchorText } from "../common/anchor";
import { IconButton } from "../common/button/icon";



const Navigation = () => {
    return (
        <Box sx={{ flexDirection: 'row', '& .MuiTypography-root': { color: 'primary.main', fontSize: 14, fontWeight: 500 }, my: 0, mx: 4, py: 0 }}>
            <AnchorButton content="Services" href="/#services" />
            <AnchorButton content="Pricing" href="/#pricing" />
            <AnchorButton content="About" href="/#about" />
        </Box>
    )
}


const Navbar = () => {
    return (
        <AppBar position="sticky" color="transparent" elevation={0} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 6, flexDirection: 'row' }}>
            <MuiBox sx={{ display: 'flex' }}>
                <MuiBox sx={{ display: 'flex', cursor: 'pointer' }}>
                    <NameLogo width={150} height={50} />
                </MuiBox>
                <Navigation />
            </MuiBox>
            <Toolbar disableGutters>
                {/* <IconButton icon={}/> */}
            </Toolbar>
        </AppBar>
    )
}

export { Navbar };